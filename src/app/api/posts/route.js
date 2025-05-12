import { NextResponse } from "next/server"

const posts = [
  {
    "userId": 1,
    "id": 1,
    "title": "Миша Баггер",
    "body": "Описание поста Миши Баггера"
  },
  {
    "userId": 1,
    "id": 2,
    "title": "Миша Бублик",
    "body": "Описание поста Миши Бублика"
  },
  {
    "userId": 1,
    "id": 3,
    "title": "Миша Пипкер",
    "body": "Описание поста Миши Пипкера"
  },
  {
    "userId": 1,
    "id": 4,
    "title": "Миша Баггер",
    "body": "Описание поста Миши Баггера"
  },
  {
    "userId": 1,
    "id": 5,
    "title": "Миша Баггер",
    "body": "Описание поста Миши Баггера"
  }]

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