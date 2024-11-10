import React from 'react'
import Sellers from '../../Components/Admin/Sellers'

function SellersPage() {
  return (
    <Sellers/>
  )
}

export default SellersPage

export async function loader(){
  const token = localStorage.getItem('token')
  const response = await fetch('https://api.flipshop.tech/api/users?role=seller', {
    method: 'GET',
    headers: {
      'Authorization': 'Bearer ' + token,
      'Content-Type': 'application/json'
    }
  });
  const responseData = await response.json()

  if (!responseData.success) {
    console.log(responseData.error)
    return responseData.error;
  }

  if (!response.ok) {
    throw Error('Sorry! Could not Load the Customer Data')
      // throw json({message: 'Data you are looking for is either not available or removed from sources!'}, {status: 500});
  }

  const data = responseData.data
 
    return data;
}