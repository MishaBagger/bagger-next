import fetchData from "@/api/fetchData";
import Header from "../components/Header";

export default async function page() {
    
    const test = await fetchData()
    return (
        <>
            <Header />
            <h1>page</h1>
            <div className="post">
            {test.map((post) => (
                <div key={post.id} className="post__container">
                    <p className="text">{post.title}</p>
                    <p className="text">{post.body}</p>
                </div>
            ))}
            </div>
        </>
    )
}
