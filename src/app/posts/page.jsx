import PostSearch from '@/components/UI/PostSearch'
import { fetchData } from '@/utils/fetchData'

export default async function Posts() {
    const posts = await fetchData()
    return (
        <>
            <h1>Posts page</h1>
            <PostSearch initialPosts={posts} />
        </>
    )
}
