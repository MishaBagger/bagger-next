const { PrismaClient } = require('@prisma/client') 

const prisma = new PrismaClient()

const initialPosts = [
    {
        title: 'Миша Баггер',
        body: 'Описание поста Миши Баггера',
    },
    {
        title: 'Миша Бублик',
        body: 'Описание поста Миши Бублика',
    },
    {
        title: 'Миша Пипкер',
        body: 'Описание поста Миши Пипкера',
    },
    {
        title: 'Миша Баггер',
        body: 'Описание поста Миши Баггера',
    },
    {
        title: 'Миша Баггер',
        body: 'Описание поста Миши Баггера',
    },
    
]

const seed = async () => {
    await prisma.post.deleteMany()

    for (const post of initialPosts) {
        await prisma.post.create({
            data: post
        })
    }
}

seed()