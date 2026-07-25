export type TerminalBlock =
  | { kind: "boot" }
  | { kind: "prompt"; input: string }
  | { kind: "text"; lines: string[]; tone?: "dim" | "ok" | "warn" | "err" | "accent" }
  | { kind: "whoami" }
  | { kind: "now" }
  | { kind: "experience" }
  | { kind: "stack" }
  | { kind: "projects" }
  | { kind: "blog" }
  | { kind: "hobbies" }
  | { kind: "contact" }
  | { kind: "social" }
  | { kind: "help" }
  | { kind: "ls" }

export interface TerminalEntry {
  id: string
  block: TerminalBlock
}

function uid() {
  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`
}

function normalize(raw: string) {
  return raw.trim().replace(/\s+/g, " ")
}

export function useTerminal() {
  const portfolio = usePortfolio()
  const entries = ref<TerminalEntry[]>([])
  const history = ref<string[]>([])
  const historyIndex = ref(-1)
  const running = ref(false)
  const activeCommand = ref<string | null>(null)

  const tools = computed(() =>
    portfolio.commands
      .filter(c => !["/help", "/clear", "/ls"].includes(c.name))
      .map(c => ({
        cmd: c.name,
        summary: c.summary,
      })),
  )

  function push(block: TerminalBlock) {
    entries.value.push({ id: uid(), block })
  }

  function resolveCommand(input: string): string | null {
    const cleaned = normalize(input)
    if (!cleaned) return null

    let token = cleaned.split(" ")[0] ?? ""
    if (!token.startsWith("/")) token = `/${token}`
    const key = token.toLowerCase()

    for (const cmd of portfolio.commands) {
      if (cmd.name === key) return cmd.name
      if (cmd.aliases.some(a => `/${a}` === key || a === key.replace(/^\//, ""))) {
        return cmd.name
      }
    }
    return null
  }

  function runResolved(cmd: string) {
    activeCommand.value = cmd
    switch (cmd) {
      case "/whoami":
        push({ kind: "whoami" })
        break
      case "/now":
        push({ kind: "now" })
        break
      case "/experience":
        push({ kind: "experience" })
        break
      case "/stack":
        push({ kind: "stack" })
        break
      case "/projects":
        push({ kind: "projects" })
        break
      case "/blog":
        push({ kind: "blog" })
        break
      case "/hobbies":
        push({ kind: "hobbies" })
        break
      case "/contact":
        push({ kind: "contact" })
        break
      case "/social":
        push({ kind: "social" })
        break
      case "/help":
        push({ kind: "help" })
        break
      case "/ls":
        push({ kind: "ls" })
        break
      case "/clear":
        entries.value = []
        activeCommand.value = null
        push({
          kind: "text",
          tone: "dim",
          lines: ["screen cleared. type /help or pick a tool."],
        })
        break
      default:
        push({
          kind: "text",
          tone: "err",
          lines: [`command not found: ${cmd}`, "try /help"],
        })
    }
  }

  async function execute(raw: string, opts: { echo?: boolean } = {}) {
    const input = normalize(raw)
    if (!input || running.value) return

    running.value = true
    try {
      if (opts.echo !== false) {
        push({ kind: "prompt", input })
        history.value.unshift(input)
        if (history.value.length > 50) history.value.pop()
        historyIndex.value = -1
      }

      const cmd = resolveCommand(input)
      if (!cmd) {
        push({
          kind: "text",
          tone: "err",
          lines: [
            `zsh: command not found: ${input.split(" ")[0]}`,
            "type /help for available tools",
          ],
        })
        return
      }

      // Tiny delay so it feels like a TUI tool dispatch
      await new Promise(r => setTimeout(r, 40))
      runResolved(cmd)

      if (import.meta.client && cmd !== "/clear") {
        const slug = cmd.replace(/^\//, "")
        const url = new URL(window.location.href)
        url.hash = slug
        history.replaceState(null, "", url)
      }
    }
    finally {
      running.value = false
    }
  }

  function autocomplete(partial: string): string | null {
    const p = normalize(partial).toLowerCase()
    if (!p) return null
    const needle = p.startsWith("/") ? p : `/${p}`
    const hits = portfolio.commands
      .map(c => c.name)
      .filter(name => name.startsWith(needle))
    if (hits.length === 1) return hits[0] ?? null
    // also match aliases
    for (const cmd of portfolio.commands) {
      for (const a of cmd.aliases) {
        const full = `/${a}`
        if (full.startsWith(needle) || a.startsWith(needle.replace(/^\//, ""))) {
          return cmd.name
        }
      }
    }
    return hits[0] ?? null
  }

  function historyPrev(current: string): string {
    if (!history.value.length) return current
    const next = Math.min(historyIndex.value + 1, history.value.length - 1)
    historyIndex.value = next
    return history.value[next] ?? current
  }

  function historyNext(current: string): string {
    if (historyIndex.value <= 0) {
      historyIndex.value = -1
      return ""
    }
    historyIndex.value -= 1
    return history.value[historyIndex.value] ?? current
  }

  async function boot() {
    entries.value = []
    push({ kind: "boot" })
    await new Promise(r => setTimeout(r, 120))
    push({ kind: "whoami" })
    push({
      kind: "text",
      tone: "dim",
      lines: [
        "session ready. tools on the left · slash commands below.",
        "try /experience  /projects  /hobbies  ·  /help for all",
      ],
    })
    activeCommand.value = "/whoami"

    if (import.meta.client) {
      const hash = window.location.hash.replace(/^#/, "").trim()
      if (hash) {
        const cmd = resolveCommand(hash.startsWith("/") ? hash : `/${hash}`)
        if (cmd && cmd !== "/whoami") {
          await execute(cmd, { echo: true })
        }
      }
    }
  }

  return {
    entries,
    tools,
    running,
    activeCommand,
    execute,
    autocomplete,
    historyPrev,
    historyNext,
    boot,
    resolveCommand,
  }
}
