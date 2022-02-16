import { NextPage } from "next"
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth"
import { useRouter } from "next/router"


const Login: NextPage = () => {
    
    const auth = getAuth()
    const provider = new GoogleAuthProvider()

    const router = useRouter()

    const handleSignIn = () => {
        signInWithPopup(auth, provider)
            .then ((result) => {
                router.push('/')
            })

    }
    
    return (
        <div className='bg-sky-500 w-full min-h-screen flex flex-col items-center justify-center py-4'>
            <button className="bg-gray-100 p-6 rounded-full shadow-xl flex text-5xl" onClick={handleSignIn}>
                Google
            </button>
        </div>
    )
}

export default Login