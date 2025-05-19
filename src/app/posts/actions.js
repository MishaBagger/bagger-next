'use server'
import { prisma } from '@/lib/prisma'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

export async function createPost(data) {
    const { title, body } = Object.fromEntries(data)

    const post = await prisma.post.create({
        data: {
            title,
            body
        }
    })
    redirect(`/posts/${post.id}`)
}
export async function editPost(data) {
    const { postId, title, body } = Object.fromEntries(data)

    const post = await prisma.post.update({
        where: {
            id: postId
        },
        data: {
            title,
            body
        }
    })
    revalidatePath(`/posts/${post.id}`)
    redirect(`/posts/${post.id}`)
}

export async function removePost(id) {

    await prisma.post.delete({
        where: {
            id
        }
    })
    revalidatePath("/posts")
    redirect("/posts")
}
