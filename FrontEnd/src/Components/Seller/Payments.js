import React from "react";
import { useLoaderData } from "react-router-dom";
import Button from '../UI/Button/Button2';
import { useState, useEffect, useRef } from "react";
import Modal from '../UI/Modal/Modal';
import {loader} from '../../pages/Buyer/BuyerPayments'

function Payments() {
  const loadedData = useLoaderData();
  const [data, setData] = useState(loadedData)

  const [showConfirmation, setShowConfirmation] = useState(false);
  const [reqId, setReqId] = useState(null)
  const [message, setMessage] = useState('')

  const credentials = useRef(); 

  const handleYesClick = async () => {
    // send request to backend here
    try {
        const formData = {
          credentials: credentials.current.value,
          invoice_id: reqId
        }
        // console.log(formData)
        // console.log('send request made')
        const response = await sendCredentials(formData);
        setMessage(response)
        reset()
      }catch (error) {
      console.log(error);
    }
  };

  const handleCancelClick = () => {
    setShowConfirmation(false);
    setReqId(null)
    setMessage('')
  };

  const submitHandler = (id) => {
    setReqId(id)
    setShowConfirmation(true);
  };

  const reset = () => {
    credentials.current.value = '';
  }

  useEffect(() => {
    async function fun(){
      const response = await loader()
      setData(response);
      // console.log('data loaded')
      // console.log(data)
    }
    fun(); 
  }, [message])


  return (
    <>
    <div className="container-fluid py-4">
      <div className="row">
        {data && data.length === 0 && (
          <p className="error-text text-center">
            You do not have any invoices yet.
          </p>
        )}
        {!data && (
          <p lassName="error-text text-center">
            Opps! Something went wrong. We could not load the data. Either
            refresh page of try later
          </p>
        )}
        {data &&
          data.length > 0 &&
          data.map((item) => (
            <PaymentItem
              key={item.id}
              id = {item.id}
              asset_name={item.asset_name}
              asset_type={item.asset_type}
              amount={item.amount}
              name = {item.seller_name}
              email = {item.seller_email}
              start = {item.created_at}
              due = {item.due_date}
              status = {item.status}
              credentials = {item.credentials}
              asset_transfer_status = {item.asset_transfer_status}
              submitHandler={submitHandler}
            />
          ))}
      </div>
    </div>
    {showConfirmation && (
        <Modal onClick={handleCancelClick}>
          {!message ?
          (<>
            <div className="d-block p-3 text-center">
            <h5>Enter Your Asset Credentials</h5>
          </div>
          <form>
            <div className="mb-3">
              <label htmlFor="cardNumber" className="form-label">Enter Credentials</label>
              <textarea row={10} maxLength={255} minLength={10} type="text" className="form-control" ref={credentials} required/>
            </div>
          </form>
          </>) : 
          <div className="d-block p-3 text-center"><h5>{message}</h5></div>
          }

          <div className="d-block d-flex justify-content-end">
            {!message && <Button 
                type='submit' 
                text = 'Send'
                onClick={handleYesClick} 
            /> }
            <div className='me-2'></div>
            <Button type='button' text = {message ? 'Close' : 'Cancel'} onClick={handleCancelClick}/>
          </div>
          
        </Modal>)}
    </>
  );
}

export default Payments;

const PaymentItem = (props) => {
  return (
    <div className="col-lg-4 col-md-6 col-sm-12 mt-4">
      <div className="card h-100">
      {/* top image */}
        <div className="card-header mx-4 p-3 text-center">
          <div className="icon icon-shape icon-xl bg-gradient-primary shadow text-center border-radius-lg m-auto mb-3">
            <i className="bi bi-currency-pound opacity-10"></i>
          </div>
        </div>
        {/* details */}
        <div className="card-body pt-0 p-3 text-center">
          <h5 className="text-center mb-0">{props.asset_name}</h5>
          <span className="text-lg">
            {props.asset_type.charAt(0).toUpperCase() +
              props.asset_type.slice(1)}
          </span>

          <hr className="horizontal dark my-3 m-auto" />

          <h5 className="mb-0">PKR {props.amount}</h5>
            {/* sub details */}
          <div className="mx-auto mt-4">
          <div className="d-flex flex-column col-md-12 col-lg-9 mx-auto">

            <div className="mb-2 text-sm d-flex justify-content-between">
              <span>Transaction Status:</span>
              <span className="text-dark ms-sm-2 font-weight-bold">{props.status}</span>
            </div>
            <div className="mb-2 text-sm d-flex justify-content-between">
              <span>Transaction Started Date:</span>
              <span className="text-dark ms-sm-2 font-weight-bold">
              {new Date(props.start).toLocaleDateString("en-US", {month: "numeric",day: "numeric",year: "numeric",})}
              </span>
            </div>
            <div className="mb-2 text-sm d-flex justify-content-between">
              <span>Transaction Due Date:</span>
              <span className="text-dark ms-sm-2 font-weight-bold">
              {new Date(props.due).toLocaleDateString("en-US", {month: "numeric",day: "numeric",year: "numeric",})}</span>
            </div>
            <div className="mb-2 text-sm d-flex justify-content-between">
              <span>Seller Name:</span>
              <span className="text-dark ms-sm-2 font-weight-bold">{props.name}</span>
            </div>
            <div className="mb-2 text-sm d-flex justify-content-between">
              <span>Seller Email:</span>
              <span className="text-dark ms-sm-2 font-weight-bold">{props.email}</span>
            </div>

          </div>
          </div>

          <hr className="horizontal dark my-3 m-auto" />

          <div className="mx-auto mt-4">
            <div className="d-flex flex-column col-md-12 col-lg-9 mx-auto">
              {props.status === 'created' && 
                <p className="text-center">Waiting for Payment.</p>
              }

              {props.status === 'paid' && !props.credentials && 
                <div className='mt-3 list-group-item d-flex justify-content-center align-items-center'>
                  <Button text='Send Credentials' onClick={() => props.submitHandler(props.id)}/>
                </div>
              }

              {props.status === 'paid' && props.credentials && props.asset_transfer_status === 'in_process' && (
                <>
               
                <div className="mx-auto">
                  <div className="d-flex flex-column mx-auto">
                    <div className="mb-2 text-sm d-flex justify-content-between">
                      <span>Credentials:</span>
                      <span className="text-dark ms-sm-2 font-weight-bold">{props.credentials}</span>
                    </div>
                  </div>
                </div>
                <hr className="horizontal dark my-3 m-auto" />
                <p className="text-center">Waiting for Acceptance from Buyer.</p>
                </>
              )}
              
              {props.status === 'sent'  && props.asset_transfer_status === 'transferred' &&<>
               <div className="mx-auto">
                  <div className="d-flex flex-column mx-auto">
                    <div className="mb-2 text-sm d-flex justify-content-between">
                      <span>Credentials:</span>
                      <span className="text-dark ms-sm-2 font-weight-bold">{props.credentials}</span>
                    </div>
                  </div>
                </div>
                <hr className="horizontal dark my-3 m-auto" />
               <p className="text-center accepted">Asset sold out successfully.</p>
              </>}

              {props.status === 'reverted' && <p className="text-center text-info">The payment has been reverted to buyer.</p>}
              {props.status === 'over_due' && <p className="text-center error-text">Invoice is overdue. Transaction is cancelled</p>}
              {props.status === 'paid' && props.asset_transfer_status === 'in_dispute' && 
                <p className="text-center error-text">
                Transaction is in dispute. Please try to resolve the issue with mutual consensus. 
                </p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};



const sendCredentials = async (data) =>{
  const token = localStorage.getItem('token')
  const response = await fetch('https://api.flipshop.tech/api/credentials/send' , {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer ' + token,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(data)
  });

  const responseData = await response.json()
  if (!responseData.success) {
      return responseData.message;
  }
  if (!response.ok) {
      throw Error('Sorry! Could not Load the Customer Data')
      // throw json({message: 'Data you are looking for is either not available or removed from sources!'}, {status: 500});
  }
  return responseData.message;

}
