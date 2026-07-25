<template>
  <div class="term-block">
    <div class="term-section-label">// blog · recent writing</div>

    <div
      v-if="pending"
      class="t-dim"
    >
      fetching feed<span class="t-cursor-blink">…</span>
    </div>

    <ul
      v-else-if="posts && posts.length"
      class="term-list"
    >
      <li
        v-for="post in posts"
        :key="post.url"
      >
        <a
          :href="post.url"
          target="_blank"
          rel="noopener"
          class="term-list__row"
        >
          <span class="term-list__title">{{ post.title }}</span>
          <span class="term-list__meta">{{ formatDate(post.published) }}</span>
        </a>
      </li>
    </ul>

    <div
      v-else
      class="t-dim"
    >
      no posts loaded — visit the blog directly.
    </div>

    <div class="term-actions">
      <a
        :href="blogBase"
        target="_blank"
        rel="noopener"
        class="term-link term-link--accent"
      >↗ read all posts</a>
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
