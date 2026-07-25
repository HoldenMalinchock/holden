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
          :ui="{ root: 'bg-elevated/30 ring-default hover:bg-primary/5 hover:ring-primary/30 transition-colors', body: 'sm:p-3.5' }"
        >
          <div class="flex flex-wrap items-center justify-between gap-2">
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

const { data: posts, pending } = await useAsyncData<Post[]>("blog-feed", async () => {
  try {
    const text = await $fetch<string>(`${blogBase}/feed`, { responseType: "text" })
    const entries = [...text.matchAll(/<entry>([\s\S]*?)<\/entry>/g)]
    const parsed: Post[] = entries.map(([, body]) => {
      const rawTitle = body.match(/<title[^>]*>([\s\S]*?)<\/title>/)?.[1] ?? ""
      const title = rawTitle.replace(/<!\[CDATA\[([\s\S]*?)\]\]>/, "$1").trim()
      const href = body.match(/<link[^>]*href="([^"]+)"/)?.[1] ?? ""
      const url = href.startsWith("http") ? href : `${blogBase}${href.startsWith("/") ? "" : "/"}${href}`
      const published = body.match(/<published>([\s\S]*?)<\/published>/)?.[1]
        ?? body.match(/<updated>([\s\S]*?)<\/updated>/)?.[1]
        ?? ""
      return { title, url, published }
    })
    parsed.sort((a, b) => new Date(b.published).getTime() - new Date(a.published).getTime())
    return parsed.slice(0, 5)
  }
  catch {
    return []
  }
})

function formatDate(iso: string) {
  const d = new Date(iso)
  if (Number.isNaN(d.getTime())) return iso
  return d.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })
}
</script>
