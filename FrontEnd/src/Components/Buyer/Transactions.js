import React from 'react'
import { useLoaderData } from 'react-router-dom'
import Button from '../UI/Button/Button2';
import { useState, useEffect } from "react";
import Modal from '../UI/Modal/Modal';
import {loader} from '../../pages/Buyer/BuyerTransactions'

function Transactions() {
    const loadedData = useLoaderData();
    const [data, setData] = useState(loadedData)
    // getting contract
    const getContract = async (id) => {
      const token = localStorage.getItem('token')
        const response = await fetch("https://api.flipshop.tech/api/contracts/content_pdf/" + id,{
          method: 'GET', 
          headers: {
            'Authorization': 'Bearer ' + token,
            'Content-Type': 'application/json'      
          }
        });
        const blob = await response.blob();
        const url = URL.createObjectURL(blob);
        window.open(url, "_blank");
    }

    const [showConfirmation, setShowConfirmation] = useState(false);
    const [reqData, setReqData] = useState({id: '' , status: ''})
    const [message, setMessage] = useState('')

    const handleYesClick = async () => {
      // send request to backend here
      try {
        const response = await changeStatus(reqData.id, reqData.status);
        setMessage(response)
        // setShowConfirmation(false);
        // window.location.reload();
      } catch (error) {
        console.log(error);
      }
  
    };
  
    const handleCancelClick = () => {
      setShowConfirmation(false);
      setMessage('')
    };
  
    const submitHandler = (id,status) => {
      setReqData({id:id, status:status})
      setShowConfirmation(true);
    };

    useEffect(() => {
      async function fun(){
        const response = await loader()
        setData(response);
      }

      fun(); 
    }, [message])

  return (
    <>
        <div className="mx-4 card-profile-bottom mt-3">
        <div className="card-body p-3">
            {/* <h3>Transactions</h3> */}
            {data && data.length > 0 && data.map(item => <TransItem
                    key={item.id}
                    name = {item.asset_name}
                    description = {item.asset_description}
                    seller = {item.seller_name}
                    email = {item.seller_email}
                    price = {item.amount}
                    status = {item.status}
                    contract_id = {item.contract_id}
                    contract_status = {item.contract_status}
                    open = {item.contract_open_date}
                    close = {item.contract_close_date}
                    viewContract = {getContract}
                    submitHandler = {submitHandler}
            />)}
            {data && data.length === 0 && <p className='error-text text-center'>Sorry! You do not have any transaction. </p>}
            {!data &&  <p className='error-text text-center'>Opps!! Something Went Wrong. We could not load the data. Refresh the page or try later.</p>}
        </div>
    </div>
    {showConfirmation && (
        <Modal onClick={handleCancelClick}>
          <div className="d-block p-3 text-center">
            {!message && <h5>Are you sure you want to {reqData.status === 'accepted' ? 'Accept' : 'Reject'}?</h5>}
            {!message && <p className='error-text text-center'>You can not change the status once submitted.</p>}
            {message && <h5>{message}</h5>}
          </div>
          <div className="d-block d-flex justify-content-end">
            {!message && <Button 
                type='button' 
                text = {reqData.status === 'accepted' ? 'Accept' : 'Reject'}
                onClick={handleYesClick} 
            />} 
            <div className='me-2'></div>
            <Button type='button' text = {message ? 'Close' : 'Cancel'} onClick={handleCancelClick}/>
          </div>
        </Modal>)}
    </>
  )
}

export default Transactions

const TransItem = props => {
    return <div className="card shadow-sm mx-4 card-profile-bottom mt-4 bg-light border">
    <div className="card-body p-3">
    <div className="row">
        <div className="col-lg-8">
          <div className="card shadow-sm my-1 card-profile-bottom  h-100">
            <div className="card-body p-3">
              <div className="">
                <h5 className="mt-1">{props.name}</h5>
                <p className="mb-0 font-weight-bold text-secondary text-sm pt-3">
                  {props.description}
                </p>
              </div>

              <div className='row mt-4'>

              <div className="h-100 col-lg-4 col-md-6">
                <h5 className="mb-1">Price</h5>
                <p className="mb-0 text-secondary font-weight-bold text-sm pt-3">
                  {props.price}
                </p>
              </div>

              <div className="h-100 col-lg-4 col-md-6">
                <h5 className="mb-1">Seller</h5>
                <p className="mb-0 text-secondary font-weight-bold text-sm pt-3">
                  {props.seller}
                </p>
              </div>

              <div className="h-100 col-lg-4 col-md-6">
                <h5 className="mb-1">Transaction Status</h5>
                <p className="mb-0 text-secondary font-weight-bold text-sm pt-3">
                {props.status === 'in_migration' ? 'In Migration' : 
                props.status.charAt(0).toUpperCase() + props.status.slice(1)
                }
                </p>
              </div>

              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 ">
          <div className="card shadow-sm my-1 card-profile-bottom  h-100">
            <div className="card-body p-3">
              <div className="h-100">
                <div className='list-group-item d-flex justify-content-between align-items-center'>
                <h5 className="mb-1">Contract</h5>
                {props.contract_id && (
                    <div className='list-group-item d-flex justify-content-between ms-auto ps-0 mb-2'>
                        <button
                            className="btn btn-link text-success text-gradient px-3 mb-0 fw-bold text-decoration-none"
                            onClick={() => props.viewContract(props.contract_id)}
                            >
                            <i className="bi bi-eye-fill me-2"></i>View
                        </button>
                    </div>
                )}
                </div>
                
                  {!props.contract_id && <p className='error-text text-center'>Waiting for contract</p> }
                  {props.contract_id && (
                    <div className="d-flex flex-column ">
                        <h6 className="mb-3 text-lg">{props.subject}</h6>
                        <span className="mb-2 text-sm">
                        Status:{" "}
                        <span 
                        className={props.contract_status === 'accepted' ? "font-weight-bold ms-sm-2 accepted" : (
                            props.contract_status === 'rejected' ? "rejected font-weight-bold ms-sm-2" :
                            "process font-weight-bold ms-sm-2"
                        )}
                        >
                            {props.contract_status.charAt(0).toUpperCase() + props.contract_status.slice(1)}
                        </span>
                        </span>
                        <span className="mb-2 text-sm">
                        Start Date:{" "}
                        <span className="text-dark ms-sm-2 font-weight-bold">
                        {new Date(props.open).toLocaleDateString("en-US", {
                            month: "numeric",
                            day: "numeric",
                            year: "numeric",
                            })}
                        </span>
                        </span>
                        <span className="text-sm">
                        End Date:{" "}
                        <span className="text-dark ms-sm-2 font-weight-bold">
                            {new Date(props.close).toLocaleDateString("en-US", {
                            month: "numeric",
                            day: "numeric",
                            year: "numeric",
                            })}
                        </span>
                        </span>
                    </div>
                  )}
                  {props.contract_status === 'in_process' && props.status=== 'in_process' && (
                    <div className='mt-3 list-group-item d-flex justify-content-center align-items-center'>
                        <Button text='Accept' onClick={() => props.submitHandler(props.contract_id,'accepted')}/> <div className='mx-1'></div>
                        <Button text='Reject' onClick={() => props.submitHandler(props.contract_id,'rejected')}/>
                    </div>
                  )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</div>
}

const changeStatus = async (id, status) =>{
    const token = localStorage.getItem('token')
    const response = await fetch('https://api.flipshop.tech/api/contracts/' + id, {
    method: 'POST',
    headers: {
      'Authorization': 'Bearer ' + token,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({status: status})
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

