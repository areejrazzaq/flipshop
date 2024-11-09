import React from "react";
import Title from "../../Components/UI/Title/Title";
import Transactions from "../../Components/Admin/Transactions";

function TransactionsPage() {
  
  return (
    <>
      <Title page="Transaction" />
      <Transactions/>
    </>
  );
}

export default TransactionsPage;

export async function loader(){
  const token = localStorage.getItem('token')
  const response = await fetch('https://api.flipshop.tech/api/trans', {
    method: 'GET',
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
    throw Error('Sorry! Could not Load the Customer Data')
  }
  
    return responseData.data;
}
