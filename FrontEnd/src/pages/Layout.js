// import Header from '../Components/Header/Header'
import TopBar from '../Components/TopBar/TopBar'
import Footer from '../Components/Footer/Footer' 
import { Outlet, useLoaderData, useSubmit } from 'react-router-dom'
import { useEffect } from 'react'
import { getTokenDuration } from '../util/auth'
import Header2 from '../Components/Header/Header2'

const Layout = () => {

    const {token} = useLoaderData(); 
    const submit = useSubmit(); 
    useEffect(() => {

        if(!token){
            return 
        }

        if(token === 'EXPIRED'){
            submit(null, {action:'/logout', method:'POST'})
        }

        const tokenDuration = getTokenDuration();
        console.log(tokenDuration);

        setTimeout(() => {
            submit(null, {action:'/logout', method:'POST'})
        }, tokenDuration)

    }, [token, submit])

    return(<>
        <TopBar/>
        <Header2/>
        {/* <Header/> */}
        <Outlet/>
        <Footer/>
    </>)
}

export default Layout; 