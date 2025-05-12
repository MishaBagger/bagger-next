'use client'
import { useState } from 'react'
import PostsList from './PostsList'

export default function PostSearch({ initialPosts }) {
    const [search, setSearch] = useState('')
    const [posts, setPosts] = useState(initialPosts)

    async function handleSubmit(e) {
        e.preventDefault()
        const filtered = initialPosts.filter(
            (post) =>
                post.title.toLowerCase().includes(search.toLowerCase()) ||
                post.body.toLowerCase().includes(search.toLowerCase())
        )
        setPosts(filtered)
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="search"
                placeholder="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <button type="submit">Поиск</button>
            <PostsList posts={posts} />
        </form>
    )
}
