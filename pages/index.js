import react from 'react'
import Link from 'next/link'
import axios from 'axios'


export default function Home() {
    return (
        <>
            <h1>SpaceX</h1>
            <div>
                <Link href="/foguete">
                    <a>Lista de Foguetes</a>
                </Link>
            </div>

            <div>
                <Link href="/capsulas">
                    <a>Capsulas</a>
                </Link>
            </div>

            <div>
                <Link href="/historico">
                    <a>Historico</a>
                </Link>
            </div>

        </>
    )
}