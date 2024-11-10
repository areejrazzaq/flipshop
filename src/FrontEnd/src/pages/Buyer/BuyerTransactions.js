import React from 'react'
import Title from '../../Components/UI/Title/UserPageTitle'
import Transactions from '../../Components/Buyer/Transactions'

function BuyerTransactions() {
  return (
    <>
       <Title role= 'Buyer' link='/buyer' page='Transactions' />
       <Transactions/>
    </>
  )
}

export default BuyerTransactions

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

  console.log(responseData)

  return responseData.data

}
