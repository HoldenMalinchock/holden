<template>
  <div
    class="select-none"
    aria-hidden="true"
  >
    <!-- ═══ Desktop (xl+): personality lives in the empty side gutters ═══ -->
    <div class="hidden xl:block fixed inset-0 -z-10 pointer-events-none">
    <!-- ── Left gutter: pickleball rally ───────────────────────────── -->
    <div class="absolute inset-y-0 left-0 w-[120px] opacity-[0.55]">
      <!-- court sidelines + net line -->
      <div class="absolute inset-y-8 left-[16%] w-px bg-zinc-700/40" />
      <div class="absolute inset-y-8 right-[16%] w-px bg-zinc-700/40" />
      <div class="absolute inset-y-8 left-1/2 -translate-x-px w-px border-l border-dashed border-zinc-600/50" />

      <!-- rally trail -->
      <div
        v-for="ghost in trail"
        :key="ghost.k"
        class="absolute size-2.5 rounded-full bg-rose-400/40 blur-[1px]"
        :style="{ top: pct(ghost.p), left: pct01(ballX(ghost.p)), transform: 'translate(-50%,-50%)', opacity: ghost.o }"
      />
      <!-- the ball -->
      <div
        class="absolute size-2.5 rounded-full bg-rose-300 shadow-[0_0_10px_2px_rgba(251,113,133,0.5)]"
        :style="{ top: pct(eff), left: pct01(ballX(eff)), transform: 'translate(-50%,-50%)' }"
      />

      <span
        class="absolute bottom-10 left-2 font-mono text-[9px] tracking-[0.3em] text-zinc-600 [writing-mode:vertical-rl] rotate-180"
      >PICKLEBALL</span>
    </div>

    <!-- ── Right gutter: markets (top) + golf (bottom) ─────────────── -->
    <div class="absolute inset-y-0 right-0 w-[120px] opacity-[0.55]">
      <!-- markets: self-drawing climb -->
      <div class="absolute top-[8%] inset-x-0 h-[46%]">
        <svg
          class="size-full"
          viewBox="0 0 100 480"
          preserveAspectRatio="none"
          fill="none"
        >
          <path
            d="M0,470 L12,432 L22,452 L34,384 L46,404 L58,318 L70,342 L82,214 L91,246 L100,60"
            stroke="rgba(113,113,122,0.30)"
            stroke-width="1.25"
            vector-effect="non-scaling-stroke"
          />
          <path
            ref="lineRef"
            d="M0,470 L12,432 L22,452 L34,384 L46,404 L58,318 L70,342 L82,214 L91,246 L100,60"
            stroke="#34d399"
            stroke-width="1.75"
            vector-effect="non-scaling-stroke"
            pathLength="1"
            stroke-dasharray="1"
            :stroke-dashoffset="1 - eff"
          />
        </svg>
        <!-- drawing head -->
        <div
          class="absolute size-2 rounded-full bg-emerald-300 shadow-[0_0_10px_2px_rgba(52,211,153,0.5)]"
          :style="{ left: pct01(head.x / 100), top: pct01(head.y / 480), transform: 'translate(-50%,-50%)' }"
        />
        <span
          class="absolute -bottom-1 right-2 font-mono text-[9px] tracking-widest text-emerald-400/60"
        >+{{ (eff * 100).toFixed(1) }}%</span>
      </div>

      <!-- golf: putt into the cup -->
      <div class="absolute bottom-[8%] inset-x-0 h-[34%]">
        <svg
          class="size-full"
          viewBox="0 0 100 260"
          preserveAspectRatio="none"
          fill="none"
        >
          <!-- green -->
          <path
            d="M4,150 Q40,138 62,150 T96,152"
            stroke="rgba(113,113,122,0.35)"
            stroke-width="1.25"
            vector-effect="non-scaling-stroke"
          />
          <!-- cup -->
          <ellipse
            cx="80"
            cy="150"
            rx="7"
            ry="3"
            fill="rgba(9,9,11,0.9)"
            stroke="rgba(113,113,122,0.4)"
            stroke-width="1"
            vector-effect="non-scaling-stroke"
          />
          <!-- flagpole -->
          <line
            x1="80"
            y1="150"
            x2="80"
            y2="86"
            stroke="rgba(161,161,170,0.45)"
            stroke-width="1.25"
            vector-effect="non-scaling-stroke"
          />
          <!-- flag -->
          <path
            :class="{ 'golf-flag': !reduced }"
            d="M80,88 L98,95 L80,102 Z"
            fill="rgba(251,113,133,0.65)"
            style="transform-origin: 80px 95px"
          />
        </svg>
        <!-- ball rolling to the hole -->
        <div
          class="absolute size-2 rounded-full bg-zinc-100 shadow-[0_0_8px_1px_rgba(255,255,255,0.35)]"
          :style="{ left: pct01(golf.x), top: pct01(golf.y), transform: 'translate(-50%,-50%)' }"
        />
        <span
          class="absolute bottom-1 left-2 font-mono text-[9px] tracking-[0.3em] text-zinc-600 [writing-mode:vertical-rl] rotate-180"
        >GOLF</span>
      </div>
    </div>
    </div>

    <!-- ═══ Mobile / tablet (< xl): no gutters, so it moves to a slim ═══
         ═══ scroll-progress bar pinned to the bottom of the screen.    ═══ -->
    <div
      class="xl:hidden fixed inset-x-0 bottom-0 z-30 pointer-events-none pb-[env(safe-area-inset-bottom)] bg-gradient-to-t from-zinc-950/95 via-zinc-950/70 to-transparent"
    >
      <div class="relative h-11 px-6">
        <!-- track: dim base + accent fill up to the scroll position -->
        <div class="absolute inset-x-6 top-1/2 -translate-y-px h-px bg-zinc-800" />
        <div
          class="absolute left-6 top-1/2 -translate-y-px h-px bg-gradient-to-r from-rose-400/70 via-emerald-400/70 to-amber-300/70"
          :style="{ width: `calc((100% - 3rem) * ${eff})` }"
        />

        <!-- waypoints: the three things, along the track -->
        <div class="absolute inset-x-6 inset-y-0">
          <div
            v-for="mark in marks"
            :key="mark.key"
            class="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-500"
            :style="{ left: pct01(mark.at), color: eff >= mark.at ? mark.color : 'rgb(82 82 91)' }"
          >
            <!-- pickleball -->
            <svg
              v-if="mark.key === 'pickleball'"
              viewBox="0 0 16 16"
              class="size-4"
              fill="none"
              stroke="currentColor"
              stroke-width="1.4"
            >
              <circle cx="8" cy="8" r="5.5" />
              <circle cx="8" cy="5.4" r="0.5" fill="currentColor" stroke="none" />
              <circle cx="5.6" cy="8.4" r="0.5" fill="currentColor" stroke="none" />
              <circle cx="10.4" cy="8.4" r="0.5" fill="currentColor" stroke="none" />
              <circle cx="8" cy="10.6" r="0.5" fill="currentColor" stroke="none" />
            </svg>
            <!-- markets -->
            <svg
              v-else-if="mark.key === 'markets'"
              viewBox="0 0 16 16"
              class="size-4"
              fill="none"
              stroke="currentColor"
              stroke-width="1.4"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <polyline points="2,11 6,7 9.5,9.5 14,3.5" />
              <polyline points="10,3.5 14,3.5 14,7.5" />
            </svg>
            <!-- golf -->
            <svg
              v-else
              viewBox="0 0 16 16"
              class="size-4"
              fill="none"
              stroke="currentColor"
              stroke-width="1.4"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <line x1="5" y1="14" x2="5" y2="3" />
              <path d="M5,3 L12,5.2 L5,7.4 Z" fill="currentColor" stroke="none" />
              <ellipse cx="5" cy="14" rx="3" ry="1" stroke-width="1" />
            </svg>
          </div>
        </div>

        <!-- the scroll head rolling across -->
        <div
          class="absolute top-1/2 size-2 rounded-full bg-zinc-100 shadow-[0_0_8px_2px_rgba(255,255,255,0.4)] -translate-y-1/2 -translate-x-1/2"
          :class="{ 'pulse-dot': !reduced }"
          :style="{ left: `calc(1.5rem + (100% - 3rem) * ${eff})` }"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from "vue"

const { progress, reduced } = useScrollProgress()

// Freeze motion to a pleasant static pose when the user prefers reduced motion.
const eff = computed(() => (reduced.value ? 0.22 : progress.value))

const pct = (p: number) => `${p * 100}%`
const pct01 = (p: number) => `${Math.min(1, Math.max(0, p)) * 100}%`

// ── Mobile bottom bar: the three things as scroll waypoints ──
const marks = [
  { key: "pickleball", at: 0.15, color: "rgb(251 113 133)" },
  { key: "markets", at: 0.5, color: "rgb(52 211 153)" },
  { key: "golf", at: 0.85, color: "rgb(252 211 77)" },
]

// ── Pickleball: ball zig-zags across the net as it descends ──
const BOUNCES = 4
function ballX(p: number) {
  return 0.5 + 0.34 * Math.sin(p * Math.PI * BOUNCES)
}
const trail = computed(() =>
  reduced.value
    ? []
    : [
        { k: 1, p: Math.max(0, eff.value - 0.018), o: 0.5 },
        { k: 2, p: Math.max(0, eff.value - 0.036), o: 0.28 },
      ],
)

// ── Markets: track the drawing head along the SVG path ──
const lineRef = ref<SVGPathElement | null>(null)
const head = ref({ x: 0, y: 470 })
watch(
  [eff, lineRef],
  () => {
    const path = lineRef.value
    if (!path) return
    const len = path.getTotalLength()
    const pt = path.getPointAtLength(len * eff.value)
    head.value = { x: pt.x, y: pt.y }
  },
  { immediate: true },
)

// ── Golf: roll along the green, then drop into the cup ──
const golf = computed(() => {
  const p = eff.value
  const x = 0.08 + p * 0.72 // 8% → 80% (the cup)
  const sink = p > 0.9 ? (p - 0.9) / 0.1 : 0 // last 10% of scroll = drop
  return {
    x: Math.min(x, 0.8),
    y: 0.55 + sink * 0.12, // green line sits ~55% down this zone
  }
})
</script>

<style scoped>
@keyframes golf-flag-wave {
  0%, 100% { transform: skewX(0deg) scaleX(1); }
  50% { transform: skewX(-10deg) scaleX(0.92); }
}

.golf-flag {
  animation: golf-flag-wave 3s ease-in-out infinite;
}
</style>
