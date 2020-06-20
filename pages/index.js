import react from "react"
import Link from 'next/link'


export default function Home() {
    return (
        <>
            <h1>SpaceX</h1>
            <li>
                <ul>
                    <Link href="/foguete">
                        <a>Lista de Foguetes</a>
                    </Link>
                </ul>
            </li>
            <li>
                <ul>
                    <Link href="/capsulas">
                        <a>Capsulas</a>
                    </Link>
                </ul>
            </li>
            <li>
                <ul>
                    <Link href="/historico">
                        <a>Historico</a>
                    </Link>
                </ul>
            </li>

        </>
    )
}