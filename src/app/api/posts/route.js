import { NextResponse } from "next/server"
import { posts } from "@/data/posts"

export async function GET(req) {
    const { searchParams } = new URL(req.url)

    const query = searchParams.get('q')

    let initialPosts = posts

    if (query) {
        initialPosts = posts.filter(post => post.title.toLowerCase().includes(query.toLowerCase()))
    }
    return NextResponse.json(initialPosts)
}

export async function POST(req) {
    const body = await req.json()
    return NextResponse.json(body)
}

export async function DELETE(req) {
    const SECRET_KEY = process.env.SECRET_KEY


    return NextResponse.json({secret: 'test'})
}