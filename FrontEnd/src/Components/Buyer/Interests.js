import React, { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import Button from "../UI/Button/Button2";
import { useState } from "react";
import { loader } from "../../pages/Buyer/BuyerInterestPage";
import Modal from "../UI/Modal/Modal";

function Interests() {
  const loadedData = useLoaderData();
  const [data, setData] = useState(loadedData)
  const [itemID, setItemID] = useState('')
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [message, setMessage] = useState(); 
  const handleYesClick = async () => {
    // send request to backend here
    try {
      const response = await showInterest(itemID)
      setMessage(response)
    } catch (error) {
      console.log(error);
    }
  };

  const handleCancelClick = () => {
    setShowConfirmation(false);
    setMessage('')
  };
  const submitHandler = (id) => {
        setItemID(id);
      setShowConfirmation(true);
  };
useEffect(() => {
  async function fun(){
    const response = await loader()
    console.log('data loaded')
    setData(response);
    // console.log(data)
  }
  fun(); 
} , [message])

  return (
    <div className="container-fluid py-4 d-flex justify-content-center">
      <div className="col-8 mt-4">
        <div className="card">
          <div className="card-header pb-0 px-3">
            <h4 className="mb-0">Your Interests</h4>
          </div>
          <div className="card-body pt-4 p-3">
            <ul className="list-group">
              {data && data.length > 0 && data.map(item => <DataItem  
                name= {item.asset_name} 
                price={item.price} 
                date={item.created_at} 
                model={item.price_model_type}
                seller={item.asset_by_name}
                email={item.asset_by_email}
                id={item.asset_id} 
                submitHandler={submitHandler}
                key={item.asset_id} />)
              }
             {data && data.length === 0 && <p className="error-text text-center">You have no interested listings.</p>}
            </ul>
          </div>
        </div>
      </div>
      {showConfirmation && (
        <Modal onClick={handleCancelClick}>        
            <div className="d-block p-3 text-center">
            <h4>{!message ? 'Are you sure you want to remove this from interests?' : message}</h4>
          </div>
          <div className="d-block d-flex justify-content-end">
            <Button type='button' text = {message? 'Close' : 'Cancel'} onClick={handleCancelClick}/> <div className='me-2'></div>
            {!message && <Button type='button' text = 'Remove' onClick={handleYesClick} />}
          </div>
        </Modal>)}
    </div>
  );
}

export default Interests;


const DataItem = (props) => {

    return (
      <li className="bg-light list-group-item border-0 d-flex p-4 mb-4 bg-gray-100 border-radius-lg row">
        <div className="d-flex flex-column col-md-12 col-lg-8">
          <h6 className="mb-3 text-lg">{props.subject}</h6>
          <span className="mb-2 text-sm">
            Asset Name:{" "}
            <span className="text-dark font-weight-bold ms-sm-2">
              {props.name}
            </span>
          </span>
          <span className="mb-2 text-sm">
            Asset Price:{" "}
            <span className="text-dark ms-sm-2 font-weight-bold">
              {props.price}
            </span>
          </span>
          <span className="mb-2 text-sm">
            Model Type:{" "}
            <span className="text-dark ms-sm-2 font-weight-bold">
              {props.model}
            </span>
          </span>
          <span className="mb-2 text-sm">
            Seller Name :{" "}
            <span className="text-dark ms-sm-2 font-weight-bold">
              {props.seller}
            </span>
          </span>
          <span className="mb-2 text-sm">
            Seller Email:{" "}
            <span className="text-dark ms-sm-2 font-weight-bold">
              {props.email}
            </span>
          </span>
          <span className="text-sm">
            Date of interest:{" "}
            <span className="text-dark ms-sm-2 font-weight-bold">
              {new Date(props.date).toLocaleDateString("en-US", {
                month: "numeric",
                day: "numeric",
                year: "numeric",
              })}
            </span>
          </span>
        </div>
        <div className="ms-auto text-end col-lg-4 col-md-12 mt-md-3">
          <button
            className="btn btn-link text-warning text-gradient px-3 mb-0 fw-bold text-decoration-none"
            onClick={() => {props.submitHandler(props.id)}}
          >
            <i className="bi bi-trash3 me-2"></i>Remove
          </button>
          <button
            className="btn btn-link text-success text-gradient px-3 mb-0 fw-bold text-decoration-none"
            onClick={() => window.location.href = `/assets/${props.id}`}
          >
            <i className="bi bi-eye-fill me-2"></i>View
          </button>
        </div>
      </li>
    );
  };

  
const showInterest = async (id) => {
    const token = localStorage.getItem("token");
    const response = await fetch("https://api.flipshop.tech/api/interest", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({asset_id: id, status: 'no'})
    });
    const responseData = await response.json();
    console.log(responseData)

    if(!responseData.success){
      return responseData.message;
    }
  
    if (!response.ok) {
      throw Error("Sorry! Could not Load the Customer Data");
    }
    return responseData.message;
  }