import React from 'react'
import Title from '../../Components/UI/Title/UserPageTitle'
import Dashboard from '../../Components/Buyer/Dashboard'

function BuyerHomePage() {
  return (
    <>
       <Title role= 'Buyer' link='/buyer' page='Dashboard' />
       <Dashboard/>
    </>
  )
}

export default BuyerHomePage

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
    throw Error('Sorry! Could not Load the Customer Data')
      // throw json({message: 'Data you are looking for is either not available or removed from sources!'}, {status: 500});
  }
  const data = responseData.data
 
    return data;
}
