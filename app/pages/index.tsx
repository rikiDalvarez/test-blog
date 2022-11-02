import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { PostCard, Categories, PostWidget } from "../components/index"
import { getPosts } from "../services"

const posts = [
  { title: "blog testing", excerpt: "read articles" },
  { title: "test1", excerpt: "test1" }

]

export default function Home({ posts }) {
  return (
    <div className="container mx-auto px-10 mb-8 bg-gray-300">
      <Head>
        <title>Plantio Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          {posts.map((post, index) => (
            <PostCard post={post.node} key={post.title}></PostCard>
          ))}
        </div>
      </div>

      <div className="lg:col-span-4 col-span-1">
        <div className="lg:sticky relative top-8">
          {/* <PostWidget></PostWidget>
          <Categories></Categories> */}
        </div>
      </div>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        <a
          className="flex items-center justify-center gap-2"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </a>
      </footer>
    </div>
  )
}

export async function getStaticProps() {
  const posts = (await getPosts()) || [];

  return {
    props: { posts }
  }

}