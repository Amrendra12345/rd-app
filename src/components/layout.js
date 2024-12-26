import Header from './header'
import Footer from './footer'
import { Inter } from 'next/font/google'
import { useDispatch } from 'react-redux'
import { authActions } from '@/redux/auth/auth.reducer'
import { useEffect } from 'react'
const inter = Inter({ subsets: ['latin'] })
const Layout = (props, {children}) => {
    const dispatch = useDispatch()

    const {city, user} = props;

    useEffect(() => {
        dispatch(authActions.checkAndLoadInitialAuth())
    }, [])
  return (
    <main className={inter.className}>
     <Header  city={city} user={user}/>
        {children}
     <Footer/>
    </main>
  )
}

export default Layout