import { NextResponse } from 'next/server'
import { headers, cookies } from 'next/headers'
import { redirect } from 'next/navigation'

import { posts } from '@/data/posts'

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
