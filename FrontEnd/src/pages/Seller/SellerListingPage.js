import React from 'react'
import Title from '../../Components/UI/Title/UserPageTitle'
import Listings from '../../Components/Seller/Listings'

function SellerListingPage() {
  return (
    <>
      <Title role='Seller' link='/seller' page='Listings'/>
      <Listings/>
    </>
  )
}

export default SellerListingPage


export async function loader(){
  const token = localStorage.getItem('token')
  const response = await fetch('https://api.flipshop.tech/api/seller_listings', {
    method: 'GET',
    headers: {
      'Authorization': 'Bearer ' + token,
      'Content-Type': 'application/json'
    }
  });
  const responseData = await response.json()
  console.log(responseData);

  if (!responseData.success) {
    console.log(responseData.error)
    return responseData.message;
  }

  if (!response.ok) {
    throw Error('Sorry! Could not Load the Customer Data')
  }

  const data = responseData.data
  return data;
}