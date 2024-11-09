import React from "react";
import BuyerProfile from "../../Components/Buyer/Profile";
import Title from "../../Components/UI/Title/UserPageTitle";
import { useLoaderData } from "react-router-dom";

function BuyerProfilePage() {
  const data = useLoaderData(); 
  return (
    <>
      <Title link={data.role === 'buyer' ? "buyer" : 'seller'} role={data.role === 'buyer' ? "Buyer" : 'Seller'} page="Profile" />
      <BuyerProfile />
    </>
  );
}
export default BuyerProfilePage;

export async function loader() {
  const token = localStorage.getItem("token");
  const response = await fetch("https://api.flipshop.tech/api/profile", {
    method: "GET",
    headers: {
      Authorization: "Bearer " + token,
      "Content-Type": "application/json",
    },
  });
  const responseData = await response.json();
  console.log(responseData);

  if (!responseData.success) {
    console.log(responseData.error);
    return responseData.error;
  }

  if (!response.ok) {
    throw Error("Sorry! Could not Load the Customer Data");
  }

  const data = responseData.data;
  return data;
}
