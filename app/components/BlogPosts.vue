<template>
  <div v-if="posts && posts.length">
    <ul class="space-y-3">
      <li
        v-for="(post, index) in posts"
        :key="post.url"
        class="reveal"
        :style="{ transitionDelay: `${index * 80}ms` }"
      >
        <a
          :href="post.url"
          target="_blank"
          rel="noopener"
          class="card-glow group flex items-center justify-between gap-4 rounded-2xl px-5 py-4"
        >
          <div class="min-w-0">
            <h3 class="text-base sm:text-lg font-semibold text-zinc-100 group-hover:text-rose-200 transition-colors">
              {{ post.title }}
            </h3>
            <p
              v-if="post.published"
              class="mt-1 text-xs font-mono text-zinc-500"
            >
              {{ formatDate(post.published) }}
            </p>
          </div>
          <UIcon
            name="i-lucide-arrow-up-right"
            class="size-5 text-zinc-500 group-hover:text-rose-300 transition-colors shrink-0"
          />
        </a>
      </li>
    </ul>

    <div class="reveal mt-6">
      <UButton
        to="https://holden-blog.hmalinch.deno.net"
        target="_blank"
        external
        color="neutral"
        variant="ghost"
        size="sm"
        trailing-icon="i-lucide-arrow-right"
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

const { data: posts } = await useAsyncData<Post[]>("blog-feed", async () => {
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
    return parsed.slice(0, 3)
  }
  catch {
    return []
  }
})

function formatDate(iso: string) {
  const d = new Date(iso)
  if (Number.isNaN(d.getTime())) return iso
  return d.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })
}
</script>
