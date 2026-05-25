<template>
  <article class="card-glow rounded-2xl p-6 flex flex-col h-full group">
    <div class="flex items-start justify-between gap-3">
      <h3 class="text-lg font-semibold text-zinc-100 leading-snug">
        {{ title }}
      </h3>
      <TradingPercent v-if="showTradingPercent" />
    </div>

    <p class="mt-3 text-sm text-zinc-400 leading-relaxed flex-1">
      {{ description }}
    </p>

    <div class="mt-5 flex flex-wrap gap-1.5">
      <span
        v-for="lang in languages"
        :key="lang"
        class="px-2 py-0.5 text-[11px] font-mono rounded-md bg-rose-500/10 border border-rose-500/20 text-rose-300"
      >
        {{ lang }}
      </span>
    </div>

    <div class="mt-5 pt-4 border-t border-zinc-800/60 flex items-center gap-2">
      <UButton
        v-if="github"
        :to="github"
        target="_blank"
        external
        color="neutral"
        variant="ghost"
        size="sm"
        icon="i-lucide-github"
        label="Code"
      />
      <UButton
        v-if="link"
        :to="link"
        target="_blank"
        external
        color="primary"
        variant="soft"
        size="sm"
        trailing-icon="i-lucide-arrow-up-right"
        label="Live"
      />
      <span
        v-if="status"
        class="ml-auto inline-flex items-center gap-1.5 text-xs text-amber-300/90 font-mono"
      >
        <span class="size-1.5 rounded-full bg-amber-400 pulse-dot" />
        {{ status }}
      </span>
    </div>
  </article>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  description: string
  languages: string[]
  github?: string
  link?: string
  status?: string
  showTradingPercent?: boolean
}>()
</script>
