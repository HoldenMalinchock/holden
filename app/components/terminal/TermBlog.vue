<template>
  <div>
    <div class="mb-2.5 text-xs tracking-wide text-dimmed">
      // blog · recent writing
    </div>

    <div
      v-if="pending"
      class="text-dimmed"
    >
      fetching feed…
    </div>

    <div
      v-else-if="error"
      class="text-dimmed"
    >
      feed error — visit the blog directly.
    </div>

    <div
      v-else-if="posts && posts.length"
      class="grid gap-2"
    >
      <a
        v-for="post in posts"
        :key="post.url"
        :href="post.url"
        target="_blank"
        rel="noopener"
        class="block rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
      >
        <UCard
          variant="subtle"
          :ui="{ root: 'bg-black/55 ring-white/10 hover:bg-primary/5 hover:ring-primary/30 transition-colors', body: 'p-3.5 sm:p-3.5' }"
        >
          <div class="flex flex-col gap-1 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:gap-2">
            <span class="font-medium text-highlighted">{{ post.title }}</span>
            <span class="text-xs text-dimmed">{{ formatDate(post.published) }}</span>
          </div>
        </UCard>
      </a>
    </div>

    <div
      v-else
      class="text-dimmed"
    >
      no posts loaded — visit the blog directly.
    </div>

    <div class="mt-3">
      <UButton
        :to="blogBase"
        target="_blank"
        external
        color="primary"
        variant="soft"
        size="sm"
        trailing-icon="i-lucide-arrow-up-right"
        label="Read all posts"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
interface Post {
  title: string
  url: string
  published: string
}

const blogBase = "https://holden-blog.hmalinch.deno.net"

// Same-origin Nitro proxy (server/api/blog-feed.get.ts) — browser can't
// fetch the Atom feed directly (no CORS), same issue as trading %.
const { data: posts, pending, error } = await useFetch<Post[]>("/api/blog-feed", {
  key: "blog-feed",
  lazy: true,
  server: true,
})

function formatDate(iso: string) {
  const d = new Date(iso)
  if (Number.isNaN(d.getTime())) return iso
  return d.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })
}
</script>
