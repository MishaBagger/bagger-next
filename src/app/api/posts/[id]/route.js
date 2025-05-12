import { NextResponse } from 'next/server'
import { headers, cookies } from 'next/headers'
import { redirect } from 'next/navigation'

const posts = [
    {
        userId: 1,
        id: 1,
        title: 'Миша Баггер',
        body: 'Описание поста Миши Баггера',
    },
    {
        userId: 1,
        id: 2,
        title: 'Миша Бублик',
        body: 'Описание поста Миши Бублика',
    },
    {
        userId: 1,
        id: 3,
        title: 'Миша Пипкер',
        body: 'Описание поста Миши Пипкера',
    },
    {
        userId: 1,
        id: 4,
        title: 'Миша Баггер',
        body: 'Описание поста Миши Баггера',
    },
    {
        userId: 1,
        id: 5,
        title: 'Миша Баггер',
        body: 'Описание поста Миши Баггера',
    },
]

export async function GET(req, { params }) {
    try {
        const { id } = await params

        let initialPosts = posts

        if (id) {
            initialPosts = posts.find((post) => post.id === Number(id))
        }

        // const headersList = headers()
        // const contentType = headersList.get('Content-Type')

        // const cookiesList = cookies()
        // const token = cookiesList.get('token')?.value || null

        // redirect('/p')
        
        return NextResponse.json(initialPosts)
    } catch (error) {
        return NextResponse.json([])
    }
}
