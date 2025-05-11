import Link from "next/link"

const Header = () => {
  return (
    <header>
        <nav>
            <Link href='/'>Главная</Link>
            <Link href='/posts'>Посты</Link>
        </nav>
    </header>
  )
}

export default Header