import PostSearch from '@/components/UI/PostSearch'
import { fetchData } from '@/utils/fetchData'
import Link from 'next/link'

export default async function Posts() {
    const posts = await fetchData()
    return (
        <>
            <h1>Страница с постами</h1>
            <Link href="/posts/add">Добавить пост</Link>
            <PostSearch initialPosts={posts} />
        </>
    )
}
