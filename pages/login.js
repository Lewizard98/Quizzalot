import { useRouter } from 'next/router'
import Header from '../components/header'
import LoginForm from '../components/loginForm'

export default function Home() {
    const router = useRouter()
    return <>
        <Header/>
        <LoginForm/>
    </>
}