import { createPost } from "@/app/posts/actions"

export default function AddPostForm() {
   
    return (
        <form className="form" action={createPost}>
            <input type="text" placeholder="title" required name="title" />
            <textarea name="body" required placeholder="content" />
            <div>
                <input type="submit" value="add post" className="btn" />
            </div>
        </form>

        // revalidatePath('/posts) если нужно обновить данные с формой на одной странице
    )
}
