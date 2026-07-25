export type TerminalBlock =
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

export interface TerminalView {
  id: string
  command: string | null
  block: TerminalBlock | null
}

function uid() {
  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`
}

function normalize(raw: string) {
  return raw.trim().replace(/\s+/g, " ")
}

export function useTerminal() {
  const portfolio = usePortfolio()
  const view = ref<TerminalView>({ id: uid(), command: null, block: null })
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

  function setView(command: string | null, block: TerminalBlock | null) {
    view.value = { id: uid(), command, block }
    activeCommand.value = command
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

  function blockFor(cmd: string): TerminalBlock | null {
    switch (cmd) {
      case "/whoami": return { kind: "whoami" }
      case "/now": return { kind: "now" }
      case "/experience": return { kind: "experience" }
      case "/skills": return { kind: "stack" }
      case "/projects": return { kind: "projects" }
      case "/blog": return { kind: "blog" }
      case "/hobbies": return { kind: "hobbies" }
      case "/contact": return { kind: "contact" }
      case "/social": return { kind: "social" }
      case "/help": return { kind: "help" }
      case "/ls": return { kind: "ls" }
      case "/clear": return null
      default: return null
    }
  }

  async function execute(raw: string, opts: { recordHistory?: boolean } = {}) {
    const input = normalize(raw)
    if (!input || running.value) return

    running.value = true
    try {
      if (opts.recordHistory !== false) {
        history.value.unshift(input)
        if (history.value.length > 50) history.value.pop()
        historyIndex.value = -1
      }

      const cmd = resolveCommand(input)
      if (!cmd) {
        setView(null, {
          kind: "text",
          tone: "err",
          lines: [
            `zsh: command not found: ${input.split(" ")[0]}`,
            "type /help for available commands",
          ],
        })
        return
      }

      if (cmd === "/clear") {
        setView(null, null)
        if (import.meta.client) {
          const url = new URL(window.location.href)
          url.hash = ""
          history.replaceState(null, "", url)
        }
        return
      }

      // Replace previous output entirely — only the new command remains.
      setView(cmd, blockFor(cmd))

      if (import.meta.client) {
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
    if (import.meta.client) {
      const hash = window.location.hash.replace(/^#/, "").trim()
      if (hash) {
        const cmd = resolveCommand(hash.startsWith("/") ? hash : `/${hash}`)
        if (cmd && cmd !== "/clear") {
          await execute(cmd, { recordHistory: false })
          return
        }
      }
    }
    setView("/whoami", { kind: "whoami" })
  }

  return {
    view,
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
