import { getAllPosts, getPostBySlug } from '@/lib/posts'
import Markdown from 'react-markdown'

type BlogPostPageProps = {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function BlogPostPage(props: BlogPostPageProps) {
  const params = await props.params;
  const { slug } = params
  const post = getPostBySlug(slug)

  console.log(post.content)
  const markdown = '# Hi, *Pluto*!'

  return (
    <main style={{ maxWidth: '650px', margin: '0 auto', padding: '2rem' }}>
      <h1>{post.frontmatter.title}</h1>
      <p>{post.frontmatter.date}</p>

      <Markdown>{markdown}</Markdown>
    </main>
  )
}
