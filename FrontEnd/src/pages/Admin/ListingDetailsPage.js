import React from "react";
import Title from "../../Components/UI/Title/Title";
import { Link, useLoaderData} from "react-router-dom";
import ListingDetail from "../../Components/Admin/ListingDetails";

function ListingDetails() {
  const data = useLoaderData();

  return (
    <>
      <Title page="Listing" />
      <div className="container-fluid">
        <div className="mx-4">
          <Link to="/admin/listing">
            <i className="bi bi-arrow-left me-3"></i>Go Back
          </Link>
        </div>
      </div>
      <div className="container-fluid py-4">
        <ListingDetail data={data.basic} details={data.details} />
      </div>
    </>
  );
}

export default ListingDetails;


export async function loader({ request, params }) {
  const id = params.listingId;
  const token = localStorage.getItem("token");
  const response = await fetch("https://api.flipshop.tech/api/listings/" + id, {
    method: "GET",
    headers: {
      Authorization: "Bearer " + token,
      "Content-Type": "application/json",
    },
  });

  const responseData = await response.json();
 console.log(responseData)

  if (!responseData.success) {
    return responseData.message;
  }

  if (!response.ok) {
    throw Error("Sorry! Could not Load the Customer Data");
  }

  
  return responseData.data;
}
