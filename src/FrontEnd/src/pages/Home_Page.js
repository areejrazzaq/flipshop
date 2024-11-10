import Hero from '../Components/Hero/Hero'
import Listing from '../Components/Listing/Listing'
import Bottom from '../Components/Bottom/Bottom'
import Contact from '../Components/Contact/Contact'
import { useEffect } from 'react'

const HomePage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return <div className="App">
     <Hero /> 
     <Listing isHome = {true}/>
     <Bottom/>
     <Contact/>
    </div>
}

export default HomePage; 

