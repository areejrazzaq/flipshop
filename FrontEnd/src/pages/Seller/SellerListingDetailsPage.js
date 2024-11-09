import React from 'react'
import { Link } from 'react-router-dom';
import Title from '../../Components/UI/Title/UserPageTitle';
import ListingDetail from "../../Components/Seller/ListingsDetails";

function SellerListingDetailsPage() {
  return (
    <>
    <Title page="Listing" role='Seller' link='/seller'/>
    <div className="container-fluid">
      <div className="mx-4">
        <Link to="/seller/listing">
          <i className="bi bi-arrow-left me-3"></i>Go Back
        </Link>
      </div>
    </div>

    <div className="container-fluid py-4">
      <ListingDetail />
    </div>

  </>
  )
}

export default SellerListingDetailsPage



export async function loader({ request, params }) {
  const id = params.listId;
  const token = localStorage.getItem("token");
  const response = await fetch("https://api.flipshop.tech/api/listings/" + id, {
    method: "GET",
    headers: {
      Authorization: "Bearer " + token,
      "Content-Type": "application/json",
    },
  });

  const responseData = await response.json();
//  console.log(responseData)

  if (!responseData.success) {
    return responseData.message;
  }

  if (!response.ok) {
    throw Error("Sorry! Could not Load the Customer Data");
  }

  
  return responseData.data;
}
