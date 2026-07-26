export interface BlogPost {
  title: string
  url: string
  published: string
}

const BLOG_BASE = "https://holden-blog.hmalinch.deno.net"
const FEED_URL = `${BLOG_BASE}/feed`

function stripCdata(raw: string) {
  return raw.replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1").trim()
}

function parseAtom(text: string): BlogPost[] {
  const entries = [...text.matchAll(/<entry>([\s\S]*?)<\/entry>/g)]
  const posts: BlogPost[] = entries.map(([, body]) => {
    const rawTitle = body.match(/<title[^>]*>([\s\S]*?)<\/title>/)?.[1] ?? ""
    const title = stripCdata(rawTitle)
    const href = body.match(/<link[^>]*href="([^"]+)"/)?.[1] ?? ""
    const url = href.startsWith("http")
      ? href
      : `${BLOG_BASE}${href.startsWith("/") ? "" : "/"}${href}`
    const published = body.match(/<published>([\s\S]*?)<\/published>/)?.[1]?.trim()
      ?? body.match(/<updated>([\s\S]*?)<\/updated>/)?.[1]?.trim()
      ?? ""
    return { title, url, published }
  }).filter(p => p.title && p.url)

  posts.sort((a, b) => new Date(b.published).getTime() - new Date(a.published).getTime())
  return posts.slice(0, 8)
}

export default defineEventHandler(async () => {
  try {
    const text = await $fetch<string>(FEED_URL, { responseType: "text" })
    return parseAtom(text)
  }
  catch (err) {
    console.error("[blog-feed]", err)
    return [] as BlogPost[]
  }
})
