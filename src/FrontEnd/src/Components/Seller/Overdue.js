import React from 'react'
import { DarazDetails, BlogDetails } from './ListingsDetails'
import { useLoaderData } from 'react-router-dom'
import Button from '../UI/Button/Button2';
import { useState, useEffect } from "react";
import Modal from '../UI/Modal/Modal';
import {loader} from '../../pages/Seller/OverduePage'

function Overdue() {
  const loadedData = useLoaderData
    const [data, setData] = useState(loadedData);

    const [showConfirmation, setShowConfirmation] = useState(false);
    const [reqData, setReqData] = useState('')
    const [message, setMessage] = useState('')

    const handleYesClick = async () => {
      // send request to backend here
      try {
        // console.log(reqData)
        const response = await updateStatus(reqData);
        setMessage(response)
        // setMessage('request send')
        // setShowConfirmation(false);
        // window.location.reload();
      } catch (error) {
        console.log(error);
      }
  
    };
  
    const handleCancelClick = () => {
      setShowConfirmation(false);
      setReqData('')
    };
  
    const submitHandler = (id) => {
      setReqData(id)
      setShowConfirmation(true);
    };

    useEffect(() => {
      async function fun(){
        const response = await loader()
        console.log('data loaded')
        setData(response);
      }
      fun(); 
    }, [message])

  return (
    <>
    <div className="container-fluid py-4">
        {!data && <p className='error-test text-center'>Sorry!! We could not found the data. Either refresh the page or try again later. </p>}
        {data && data.length === 0 && <p className='error-test text-center'>Yay!! You do not have any outdated asset to review.</p>}
        {data && data.length > 0 && data.map(item => <OverdueItem
            key = {item.id}
            id = {item.id}
            title = {item.title}
            description = {item.description}
            picture = {item.picture}
            sub_asset = {item.sub_asset}
            asset_type = {item.asset_type}
            price = {item.price}
            days = {item.days}
            price_model_type = {item.price_model_type}
            submitHandler = {submitHandler}
        />)}
      </div>
       {showConfirmation && (
        <Modal onClick={handleCancelClick}>
         <div className="d-block p-3 text-center">
          {!message ? <>
            <h5>Are you sure you want to refresh?</h5>
            <p className='error-text text-center'>After refreshing you can list asset for sale again.</p>
          </>: 
          <p>{message}</p>
          }
          </div>
          <div className="d-block d-flex justify-content-end">
            {!message && <Button 
                type='button' 
                text = 'Refresh'
                onClick={handleYesClick} 
            /> }
            <div className='me-2'></div>
            <Button type='button' text = {!message ? 'Cancel' : 'Close'} onClick={handleCancelClick}/>
          </div>
        </Modal>)
      }
    </>
  )
}

export default Overdue

const OverdueItem = (props) => {
  return(
    <div className="row">
        <div className="col-lg-8">
          {/* first card */}
          <div className="px-3 card shadow-lg mx-4 card-profile-bottom">
            <div className="card-body p-3">
              {/* new row */}
              <div className="row gx-4">
                <div className="col-auto">
                  <div className="avatar avatar-xl position-relative">
                    <img
                      src={props.picture}
                      alt="asset_image"
                      className="w-100 border-radius-lg shadow-sm"
                    />
                  </div>
                </div>
                <div className="col-auto my-auto">
                  <div className="h-100">
                    <h5 className="mb-1">{props.title}</h5>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 my-sm-auto ms-sm-auto me-sm-0 mx-auto mt-3">
                  <div className="nav-wrapper position-relative end-0 d-flex justify-content-center fw-bold ">
                    {props.asset_type.charAt(0).toUpperCase() + props.asset_type.slice(1)}
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 my-sm-auto ms-sm-auto me-sm-0 mx-auto mt-3">
                  <div className="nav-wrapper position-relative end-0 d-flex justify-content-center">
                  <Button type='button' text = 'Refresh' onClick={() => props.submitHandler(props.id)}/>
                  </div>
                </div>
                
              </div>
              {/* new row */}
              <div className="row gx-4">
                <div className="col-auto my-auto">
                  <div className="h-100">
                    <h5>About</h5>
                    <p className="mb-0 font-weight-bold text-sm text-secondary">
                      {props.description}
                    </p>
                  </div>
                </div>
              </div>
              {/* new row */}
              <div className="row gx-4">
                <div className="col-lg-4 col-md-6 my-6 pt-5">
                  <div className="h-100">
                    <h5 className="mb-1">Days</h5>
                    <p className="mb-0 font-weight-bold text-sm  pt-3 text-secondary">
                      {props.days}
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 my-6 pt-5">
                  <div className="h-100">
                    <h5 className="mb-1">Price</h5>
                    <p className="mb-0 font-weight-bold text-sm pt-3 text-secondary">
                      {props.price}
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 my-6 pt-5">
                  <div className="h-100">
                    <h5 className="mb-1">Model</h5>
                    <p className="mb-0 font-weight-bold text-sm pt-3 text-secondary">
                      {props.price_model_type.charAt(0).toUpperCase() + props.price_model_type.slice(1)}
                    </p>
                  </div>
                </div>
               
              </div>
            </div>
          </div>

        </div>
        {/* column ends here  */}

        <div className="col-lg-4 col-md-12 mt-sm-3">
          {props.asset_type === 'daraz' ? 
              <DarazDetails data={props.sub_asset}/> :
              <BlogDetails data={props.sub_asset}/>
              }
        </div>
      </div>
  )
}

const updateStatus = async (id) => {
  const token = localStorage.getItem('token')
  const response = await fetch('https://api.flipshop.tech/api/listings/refresh/' + id, {
    method: 'GET',
    headers: {
      'Authorization': 'Bearer ' + token,
      'Content-Type': 'application/json'
    }, 
  });
  const responseData = await response.json()

  if(!responseData.success){
    return responseData.message
  }

  if (!response.ok) {
    throw Error('Sorry! Could not update the status.')
  }

  return responseData.message
}
