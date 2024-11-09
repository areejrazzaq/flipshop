import React from "react";
import Title from "../../Components/UI/Title/Title";
import { Link, useLoaderData } from "react-router-dom";
import CustomerDetails from "../../Components/Admin/CustomerDetails";

function CustomerDetailPage() {
  const data = useLoaderData();
  

  return (
    <>
      <Title page="Customers" />
      <div className="container-fluid">
        <div className="mx-4">
          <Link to="/admin/customers">
            <i className="bi bi-arrow-left me-3"></i>Go Back
          </Link>
        </div>
      </div>
      <div className="container-fluid py-4">
        <CustomerDetails data={data} />
      </div>
    </>
  );
}

export default CustomerDetailPage;

export async function loader({ request, params }) {
  const id = params.customerId;
  const token = localStorage.getItem("token");
  const response = await fetch("https://api.flipshop.tech/api/user/" + id, {
    method: "GET",
    headers: {
      Authorization: "Bearer " + token,
      "Content-Type": "application/json",
    },
  });
  const responseData = await response.json();

  if (!responseData.success) {
    console.log(responseData.error);
    return responseData.error;
  }

  if (!response.ok) {
    throw Error("Sorry! Could not Load the Customer Data");
    // throw json({message: 'Data you are looking for is either not available or removed from sources!'}, {status: 500});
  }

  const data = responseData.data;

  return data;
}
