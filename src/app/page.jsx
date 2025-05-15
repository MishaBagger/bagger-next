import Image from 'next/image'
export default function Home() {
    return (
        <div>
            <h1>Главная страница</h1>

            <Image src="/file.svg" width={400} height={400} alt="file"></Image>
        </div>
    )
}
