import React from 'react'
import Customers from '../../Components/Admin/Customers'
import { useLoaderData } from 'react-router-dom'

function CustomersPage() {
  const data = useLoaderData()
  console.log(data)
  return (
    <Customers/>
  )
}

export default CustomersPage

export async function loader(){
  const token = localStorage.getItem('token')
  const response = await fetch('https://api.flipshop.tech/api/users?role=buyer', {
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