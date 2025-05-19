import { prisma } from "@/lib/prisma"

const API_URL = 'http://localhost:3000'

export async function fetchData() {
    return prisma.post.findMany()
}

export async function fetchPost(id) {
    return prisma.post.findUnique({
        where: {
            id
        }
    })
}

export async function fetchPostByQuery(query) {
    const response = await fetch(
        `${API_URL}/api/posts?q=${query}`
    )

    if (!response.ok) throw new Error('Ошибка получения даты!')

    const data = await response.json()

    return data
}
