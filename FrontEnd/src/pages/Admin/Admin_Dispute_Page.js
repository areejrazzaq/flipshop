import React from 'react'
import Title from "../../Components/UI/Title/Title";
import Dispute from '../../Components/Admin/Dispute';

function AdminDisputePage() {
  return (

    <>
      <Title page="Listing" />
      <Dispute/>
    </>
  )
}

export default AdminDisputePage



export async function loader(){
  const token = localStorage.getItem('token')
  const response = await fetch('https://api.flipshop.tech/api/disputes' ,{
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