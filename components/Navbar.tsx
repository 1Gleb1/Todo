import { getAuth, signOut } from "firebase/auth"
import Link from "next/link"
import { useRouter } from "next/router"

const Navbar = ({openShowForm} : any) => {

    const router = useRouter()
    const auth = getAuth()
    const handleLogout = () => {
        signOut(auth)
    }


    return (
    <div className="fixed w-full bottom-20 py-4 flex justify-center items-center gap-4 font-bold text-gray-100 text-xl">
        <Link href={'/'} passHref>
            <a className={`
                    p-3 px-4 hover:bg-black hover:bg-opacity-20 transition-colors rounded-xl 
                    ${router.pathname === '/' ? 'bg-black bg-opacity-30' : ''}
                `}>
                To Do
            </a>
        </Link>
        <Link href={'/done'} passHref>
                <a className={`
                    p-3 px-4 hover:bg-black hover:bg-opacity-20 transition-colors rounded-xl 
                    ${router.pathname === '/done' ? 'bg-black bg-opacity-30' : ''}
                `}>
                Done
            </a>
        </Link>
        <button 
            className={`p-3 px-4 font-bold hover:bg-black hover:bg-opacity-20 transition-colors rounded-xl`}
            onClick={openShowForm}    
        >
            New Todo    
        </button>
        <button 
            className={`p-3 px-4 font-bold bg-black bg-opacity-30 hover:bg-opacity-40 transition-colors rounded-xl`}
            onClick={handleLogout}
        >
            Logout
        </button>
    </div>
    )
}

export default Navbar