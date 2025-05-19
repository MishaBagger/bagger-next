import Link from 'next/link'
import { removePost } from '@/app/posts/actions'

export default function Post({ id, post }) {
    return (
        <>
            <h1>Пост #{id}</h1>
            <div className="post">
                Заголовок: {post.title} <br />
                Описание: {post.body} <br />
                UserId: {post.userId} <br />
                <Link href={`${Number(id) - 1}`}>Предыдущий пост</Link>
                <Link href={`${Number(id) + 1}`}>Следующий пост</Link>
            </div>

            <form className="form" action={removePost.bind(null, id)}>
                <input type="submit" value="Удалить" className="btn" />
            </form>

            <Link href={`/posts/${id}/edit`}>Редактировать</Link>
        </>
    )
}
