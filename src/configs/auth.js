import GoogleProvider from 'next-auth/providers/google'
import CredentialsProvider from 'next-auth/providers/credentials'
import { users } from '@/data/users'
import { signIn } from 'next-auth/react'

export const authConfig = {
    session: {
        strategy: 'jwt',
    },
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_SECRET,
        }),
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: { label: 'Email', type: 'email' },
                password: { label: 'Password', type: 'password' },
            },
            async authorize(credentials, req) {
                if (!credentials?.email || !credentials?.password) return null

                const user = users.find(
                    (user) => user.email === credentials.email
                )

                if (user && user.password === credentials.password) {
                    // Возвращаем объект пользователя без пароля
                    return { name: user.email }
                }

                return null
            },
        }),
    ],
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: '/signin',
    }
}
