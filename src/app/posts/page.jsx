import { fetchData } from "@/utils/fetchData";
import Link from "next/link";

export default async function page() {
    
    const test = await fetchData()
    return (
        <>
            <h1>page</h1>
            <div className="post">
            {test.map((post) => (
                <div key={post.id} className="post__container">
                    <p className="text">{post.title}</p>
                    <p className="text">{post.body}</p>
                    <Link href={`/posts/${post.id}`}>Детальнее</Link>
                </div>
            ))}
            </div>
        </>
    )
}
