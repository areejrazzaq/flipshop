import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../../Components/Admin/Admin.css";
import SideBar from '../../Components/Seller/SideBar'
import { Outlet, useLoaderData, useSubmit } from 'react-router-dom'
import { useEffect } from 'react'
import { getTokenDuration } from '../../util/auth'

function SellerPageLayout() {
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
        // console.log(tokenDuration);

        setTimeout(() => {
            submit(null, {action:'/logout', method:'POST'})
        }, tokenDuration)

    }, [token, submit])

  return (<div className='container-fluid bg-light min-vh-100 '>        
  <div className='row '>  
      <div className='col-lg-2 col-sm-4 col-md-3 vh-100 position-fixed green' style={{overflow: "auto"}}><SideBar /> </div>
      <div className='col-lg-2 col-sm-4 col-md-3'></div>
      <div className='col-lg-10 col-sm-8 col-md-9'>                
      <Outlet/>           
      </div>        
  </div>    
</div>  
  )
}

export default SellerPageLayout

