import React from 'react'
import Title from '../../Components/UI/Title/UserPageTitle'
import Offers from '../../Components/Buyer/Offers'

function BuyerOffersPage() {
  return (
    <>
      <Title role= 'Buyer' link='/buyer' page='Offers' />
      <Offers/>
    </>
  )
}

export default BuyerOffersPage

export async function loader(){
  const token = localStorage.getItem('token')
  const response = await fetch('https://api.flipshop.tech/api/offers' ,{
      method:'GET',
      headers: {
        'Authorization': 'Bearer ' + token,
        'Content-Type': 'application/json'
      }
  });

  const responseData = await response.json()
  // console.log(responseData)
  if (!responseData.success) {
    return responseData.message;
  }

  if (!response.ok) {
    throw new Error('Something Went Wrong')
  }

  return responseData.data

}
