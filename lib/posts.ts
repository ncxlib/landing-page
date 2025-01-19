import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDir = path.join(process.cwd(), 'content/blog')

/**
 * Gets a list of all .md files in the blog content directory.
 * Example return: ["hello-world.md", "another-post.md"]
 */
export function getPostSlugs(): string[] {
  return fs.readdirSync(postsDir).filter((file) => file.endsWith('.md'))
}

/**
 * Reads one post file by slug (filename minus .md),
 * parses frontmatter, and returns { slug, frontmatter, content }
 */
export function getPostBySlug(slug: string) {
  const realSlug = slug.replace(/\.md$/, '')
  const filePath = path.join(postsDir, `${realSlug}.md`)

  // Read file
  const fileContents = fs.readFileSync(filePath, 'utf8')

  // Parse frontmatter using gray-matter
  const { data, content } = matter(fileContents)

  return {
    slug: realSlug,
    frontmatter: data,
    content,
  }
}

/**
 * Returns all posts in an array, sorted however you like (optional).
 */
export function getAllPosts() {
  const slugs = getPostSlugs()

  const posts = slugs.map((slug) => {
    return getPostBySlug(slug)
  })

  // Example: sort by date descending
  posts.sort((a, b) => {
    const dateA = new Date(a.frontmatter.date).getTime()
    const dateB = new Date(b.frontmatter.date).getTime()
    return dateB - dateA
  })

  return posts
}
