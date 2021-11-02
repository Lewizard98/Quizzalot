import { useRouter } from 'next/router'

export default function Home() {
    const router = useRouter()
    return <h1>hi {JSON.stringify(router.query)}</h1>
}