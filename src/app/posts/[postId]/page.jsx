import { fetchData, fetchPost } from '@/utils/fetchData'
import Post from '@/components/UI/Post'

export async function generateMetadata({ params, searchParams }) {
    const { postId } = await params
    const post = await fetchPost(postId)
    return {
        title: post?.title || 'Пост не найден',
        description: post?.body || 'Описание отсутствует',
    }
}

export async function generateStaticParams() {
    const posts = await fetchData()

    return posts.map((post) => ({
        postId: String(post.id),
    }))
}

export default async function postById({ params }) {
    const { postId } = await params
    const post = await fetchPost(postId)
    if (!post || !Object.keys(post).length) {
        return <div>Пост не найден</div>
    }

    return <Post id={postId} post={post} />
}
