import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/layout'
import { useRouter } from 'next/router'
import { Url } from 'url'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { useState } from 'react'

const useUser = () => getAuth()

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  
  const [isUser, setIsUser] = useState(false)

  const auth = getAuth()
  onAuthStateChanged(auth, (user) => {
    if(user) {
      setIsUser(true)
      console.log(user);
    } else {
      setIsUser(false)
      if(router.pathname !== '/login'){
        router.push('/login')
      }
    }
  })


  return (
    <Layout isUser={isUser}>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
