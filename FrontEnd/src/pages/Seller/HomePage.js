import React from 'react'
import Title from '../../Components/UI/Title/UserPageTitle'
import DashBoard from '../../Components/Seller/DashBoard'

function SellerHomePage() {
  return (
    <>
      <Title role='Seller' link='/seller' page='Dashboard'/>
      <DashBoard/>
    </>
  )
}

export default SellerHomePage


export async function loader(){
  const token = localStorage.getItem('token')
  const response = await fetch('https://api.flipshop.tech/api/dashboard', {
    method: 'GET',
    headers: {
      'Authorization': 'Bearer ' + token,
      'Content-Type': 'application/json'
    }
  });
  const responseData = await response.json()
  if (!responseData.success) {
    return responseData.message;
  }
  if (!response.ok) {
    throw Error('Sorry! Could not Load the Data')
  }
  const data = responseData.data
 
    return data;
}
