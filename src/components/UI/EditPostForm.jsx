import { editPost } from "@/app/posts/actions"

export default function EditPostForm({ postId, title, body }) {
   
    return (
        <form className="form" action={editPost}>
            <input
                type="text"
                placeholder="title"
                required
                name="title"
                defaultValue={title}
            />
            <textarea
                name="body"
                required
                placeholder="content"
                defaultValue={body}
            />
            <input type="text" hidden defaultValue={postId} name="postId" />
            <div>
                <input type="submit" value="Редактировать" className="btn" />
            </div>
        </form>
    )
}
