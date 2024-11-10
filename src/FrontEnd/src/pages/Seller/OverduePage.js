import React from 'react'
import Title from '../../Components/UI/Title/UserPageTitle'
import Overdue from '../../Components/Seller/Overdue'

function OverduePage() {
  return (
    <>
    <Title role='Seller' link='/seller' page='Listings'/>
    <Overdue/>
  </>
  )
}

export default OverduePage

export async function loader(){
  const token = localStorage.getItem('token')
  const response = await fetch('https://api.flipshop.tech/api/review_listings' ,{
      method:'GET',
      headers: {
        'Authorization': 'Bearer ' + token,
        'Content-Type': 'application/json'
      }
  });

  const responseData = await response.json()
  // console.log(responseData.data)
  // console.log(responseData)

  if (!responseData.success) {
    return responseData.message;
  }

  if (!response.ok) {
    throw new Error('Something Went Wrong')
  }

  return responseData.data

}
