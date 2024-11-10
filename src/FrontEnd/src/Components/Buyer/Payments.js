import React from "react";
import { useLoaderData } from "react-router-dom";
import Button from '../UI/Button/Button2';
import { useState, useEffect } from "react";
import Modal from '../UI/Modal/Modal';
import {loader} from '../../pages/Buyer/BuyerPayments'
import useInput from "../hooks/use-input";


function Payments() {
  const loadedData = useLoaderData();
  const [data, setData] = useState(loadedData)

  const [showConfirmation, setShowConfirmation] = useState(false);
  const [reqData, setReqData] = useState({id: '' , status: ''})
  const [message, setMessage] = useState('')

  const {value: enteredName, isValid: enteredNameIsValid, hasError: nameInputIsInvalid, onChangeHandler: nameChangeHandler, onBlurHandler: onNameBlurHandler, reset: nameReset} = useInput((name) => name.trim() !== ''); 
  const {value: enteredNumber, isValid: enteredNumberIsValid, hasError: numberInputIsInvalid, onChangeHandler: numberChangeHandler, onBlurHandler: onNumberBlurHandler, reset: numberReset} = useInput((number) => number.trim().length === 16); 
  const {value: enteredCvc, isValid: enteredCvcIsValid, hasError: cvcInputIsInvalid, onChangeHandler: cvcChangeHandler, onBlurHandler: onCvcBlurHandler, reset: cvcReset} = useInput((cvc) => cvc.trim().length === 3); 
  const {value: enteredExpirey, isValid: enteredExpireyisValid, hasError: expireyInputIsInvalid, onChangeHandler: expireyChangeHandler, onBlurHandler: onExpireyBlurHandler, reset: expireyReset} = useInput((expiry) => expiry.trim().length === 5); 


  const handleYesClick = async () => {
    // send request to backend here
    try {
      if(reqData.status === 'pay') {
        const formData = {
          card_name: enteredName,
          card_number: enteredNumber,
          cvc: enteredCvc,
          expiry_date: enteredExpirey,
          invoice_id: reqData.id
        }
        const response = await pay(formData);
        setMessage(response)
        reset()
      }else{
        const response = await changeStatus(reqData.id, reqData.status);
        setMessage(response)
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleCancelClick = () => {
    setShowConfirmation(false);
    setReqData({id: '' , status: ''});
    setMessage('')
  };

  const submitHandler = (id,status) => {
    setReqData({id:id, status:status})
    setShowConfirmation(true);
  };

  const reset = () => {
    nameReset();
    numberReset()
    cvcReset()
    expireyReset()
  }

  useEffect(() => {
    async function fun(){
      const response = await loader()
      setData(response);
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
          {!message && (reqData.status !== 'pay' ? <>
          <div className="d-block p-3 text-center">
            <h5>Are you sure you want to {reqData.status === 'approve' ? 'Approve' : 'Reject'}?</h5>
            <p className='error-text text-center'>
            You can not change the status once submitted. 
            Rejecting the credentials means that you are claiming that the data send by seller
            is wrong and you need your payment back. And accepting means that you verify that the 
            credentials are fine.  
            </p>
          </div>
          <div className="d-block d-flex justify-content-end">
            <Button 
                type='button' 
                text = {reqData.status === 'approve' ? 'Approve' : 'Reject'}
                onClick={handleYesClick} 
            /> 
            <div className='me-2'></div>
            <Button type='button' text = 'Cancel' onClick={handleCancelClick}/>
          </div>
          </>
          :
          <>
          <div className="d-block p-3 text-center">
            <h5>Make Payment</h5>
          </div>
          <form>
            <div className="mb-3">
              <label htmlFor="cardNumber" className="form-label">Card Number</label>
              <input type="number" 
                    className={numberInputIsInvalid ? 'form-control invalid' : 'form-control'} 
                    id="cardNumber" name="cardNumber" 
                    value={enteredNumber} 
                    onChange={numberChangeHandler} 
                    onBlur={onNumberBlurHandler} 
                  
                />
              {numberInputIsInvalid && <p className='error-text'>Number is invalid</p>}
            </div>
            <div className="mb-3">
              <label htmlFor="cardName" className="form-label">Cardholder Name</label>
              <input type="text" className={nameInputIsInvalid ? 'form-control invalid' : 'form-control'} 
                        id="cardName" name="cardName" 
                        value={enteredName} 
                        onChange={nameChangeHandler} 
                        onBlur={onNameBlurHandler} />
              {nameInputIsInvalid && <p className='error-text'>Name is invalid</p>}
            </div>
            <div className="row">
              <div className="col">
                <div className="mb-3">
                  <label htmlFor="expirationDate" className="form-label">Expiration Date</label>
                  <input type="text" className={expireyInputIsInvalid ? 'form-control invalid' : 'form-control'} placeholder="MM / YY" 
                    value={enteredExpirey} 
                    onChange={expireyChangeHandler} 
                    onBlur={onExpireyBlurHandler} />
                  {expireyInputIsInvalid && <p className='error-text'>Expirey date is invalid</p>}
                </div>
              </div>
              <div className="col">
                <div className="mb-3">
                  <label htmlFor="cvv" className="form-label">CVC</label>
                  <input type="number" className={cvcInputIsInvalid ? 'form-control invalid' : 'form-control'} id="cvv" name="cvv" 
                  value={enteredCvc} onChange={cvcChangeHandler} onBlur={onCvcBlurHandler}/>
                  {cvcInputIsInvalid && <p className='error-text'>CVC is invalid</p>}
                </div>
              </div>
            </div>
          
          </form>


          <div className="d-block d-flex justify-content-end">
            <Button 
                type='submit' 
                text = 'Pay'
                onClick={handleYesClick} 
                disabled = {!enteredNumberIsValid ||
                            !enteredNameIsValid ||
                            !enteredCvcIsValid || 
                            !enteredExpireyisValid
                            }
            /> 
            <div className='me-2'></div>
            <Button type='button' text = 'Cancel' onClick={handleCancelClick}/>
          </div>
          </>)
          }
          {message && <>
            <h5 className="text-center">{message}</h5>
            <div className="d-block d-flex justify-content-end">
            <Button type='button' text = 'Cancel' onClick={handleCancelClick}/>
          </div>
          </>}
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
              {props.status === 'created' && (
                <>
                {/* <p className="text-center error-text">Pay Now</p> */}
                <div className='mt-3 list-group-item d-flex justify-content-center align-items-center'>
                  <Button text='Pay Now' onClick={() => props.submitHandler(props.id,'pay')}/>
                </div>
                </>
                )}
              {props.status === 'paid' && !props.credentials && <p className="text-center">Waiting for credentials.</p>}
              {props.status === 'paid' && props.credentials && props.asset_transfer_status === 'in_process' && (
                <>
                {/* <p className="text-center error-text">Approve or Reject Credentials.Show Credentials</p> */}
                <div className="mx-auto">
                  <div className="d-flex flex-column mx-auto">
                    <div className="mb-2 text-sm d-flex justify-content-between">
                      <span>Credentials:</span>
                      <span className="text-dark ms-sm-2 font-weight-bold">{props.credentials}</span>
                    </div>
                  </div>
                </div>
                <hr className="horizontal dark my-3 m-auto" />
                <div className='mt-3 list-group-item d-flex justify-content-center align-items-center'>
                  <Button text='Approve' onClick={() => props.submitHandler(props.id,'approve')}/> <div className='mx-1'></div>
                  <Button text='Reject' onClick={() => props.submitHandler(props.id,'reject')}/>
                </div>
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
               <p className="text-center accepted">Asset bought successfully.</p>
              </>}

              {props.status === 'reverted' && <p className="text-center text-info">Your payment has been reverted.</p>}
              {props.status === 'over_due' && <p className="text-center error-text">Invoice is overdue.</p>}
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


const changeStatus = async (id, status) =>{
  const token = localStorage.getItem('token')
  const response = await fetch('https://api.flipshop.tech/api/credentials/status' , {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer ' + token,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({invoice_id:id,status: status})
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

const pay = async (data) =>{
  const token = localStorage.getItem('token')
  const response = await fetch('https://api.flipshop.tech/api/invoices/make_payment' , {
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
