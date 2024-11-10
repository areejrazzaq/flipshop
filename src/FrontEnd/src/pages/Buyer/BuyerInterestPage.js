import React from 'react'
import Title from '../../Components/UI/Title/UserPageTitle'
import Interests from '../../Components/Buyer/Interests'

function BuyerInterestPage() {
  return (
    <>
      <Title role= 'Buyer' link='/buyer' page='Interests' />
      <Interests/>
    </>
  )
}

export default BuyerInterestPage

export async function loader(){
  const token = localStorage.getItem('token')
  const response = await fetch('https://api.flipshop.tech/api/interest' ,{
      method:'GET',
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
    throw new Error('Something Went Wrong')
  }

  return responseData.data

}
