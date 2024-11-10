import React from 'react'
import Title from '../../Components/UI/Title/UserPageTitle'
// import Button from '../../Components/UI/Button/Button'
import Transactions from '../../Components/Seller/Transactions'


function SellerTransactionPage() {
  return (
    <>
      <Title role='Seller' link='/seller' page='Transactions'/>
      {/* <Button link='65' text='Go to Details Page'/> */}
      <Transactions/>
    </>

  )
}

export default SellerTransactionPage


export async function loader(){
  const token = localStorage.getItem('token')
  const response = await fetch('https://api.flipshop.tech/api/trans' ,{
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

  return responseData.data;

}
