'use client'
import { useSession, signOut } from "next-auth/react"
import Link from "next/link"

const Header = () => {
  const session = useSession()
  console.log(session)
  return (
    <header>
        <nav>
            <Link href='/'>Главная</Link>
            <Link href='/posts'>Посты</Link>
            {session?.data && (<Link href='/profile'>Профиль</Link>
            )}

            {session?.data ? (<Link href='#' onClick={() => signOut({
              callbackUrl: '/'
            })}>Выйти</Link>) : <Link href='/signin'>Войти</Link>}
        </nav>
    </header>
  )
}

export default Header