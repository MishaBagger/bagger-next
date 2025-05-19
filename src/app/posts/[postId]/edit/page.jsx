import EditPostForm from "@/components/UI/EditPostForm";
import { fetchPost } from "@/utils/fetchData";

export default async function Page({ params }) {
    const { postId } = await params
    const post = await fetchPost(postId)
  return (
    <div>
        <h1>Редактирование поста: {post.title}</h1>
        <EditPostForm postId={postId} title={post.title} body={post.body}/>
    </div>
  );
}