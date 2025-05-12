import Link from "next/link";

export default function PostsList({ posts }) {
    return (
        <div className="post">
            {posts.map((post) => (
                <div key={post.id} className="post__container">
                    <p className="text">{post.title}</p>
                    <p className="text">{post.body}</p>
                    <Link href={`/posts/${post.id}`}>Детальнее</Link>
                </div>
            ))}
        </div>
    )
}
