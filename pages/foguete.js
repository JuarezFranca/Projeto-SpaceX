import Link from 'next/link'

export default function foguete() {
    return (
        <>
            <h1>Foguete</h1>
            <h2>
                <Link href="/index">
                    <a>retorne inicio</a>
                </Link>
            </h2>
        </>
    )
}