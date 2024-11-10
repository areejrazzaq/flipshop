import React from 'react'
import Title from '../../Components/UI/Title/UserPageTitle'
// import Button from '../../Components/UI/Button/Button'
import Payments from '../../Components/Seller/Payments'


function SellerPaymentPage() {
  return (
    <>
      <Title role='Seller' link='/seller' page='Payments'/>
      <Payments/>
    </>
  )
}

export default SellerPaymentPage

export async function loader(){
  const token = localStorage.getItem('token')
  const response = await fetch('https://api.flipshop.tech/api/invoices' ,{
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
