import Link from 'next/link'
import axios from 'axios'

export default function foguete({dados}) {
    return (
        <>
            <div>
                <h1>Foguete</h1>
                {console.log(dados)}
            </div>
            <h2>

                <Link href="/index">
                    <a>retorne inicio</a>
                </Link>
            </h2>
        </>
    )
    foguete.getInitialProps = async () => {
        const response = await axios.get(
            'https://api.spacexdata.com/v3/rockets'
        )
        return { dados: response.first_stage }
    }
}