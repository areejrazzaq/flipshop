import React from 'react'
import { useLoaderData, useNavigate } from 'react-router-dom'
import AuctionTable from '../UI/Tables/AuctionTable'
import { useState, useEffect } from 'react';
import Modal from '../UI/Modal/Modal';
import Button from '../UI/Button/Button2';
import { useParams } from "react-router-dom";
import {loader} from '../../pages/Seller/SellerListingDetailsPage'

function ListingsDetails() {
  const loadedData = useLoaderData(); 
  const params = useParams();
  const [data, setData] = useState(loadedData[0])
  // console.log('loaded data')
  // console.log(data)

  const navigate = useNavigate(); 

  const [showConfirmation, setShowConfirmation] = useState(false);
  const [reqData, setReqData] = useState({id: '', option: ''})

  const handleYesClick = async () => {
    // send request to backend here
    try {
      if(reqData.option === 'accept'){
        await updateStatus(reqData.id)
        setShowConfirmation(false);
        //  window.location.reload();
      }
      else{
        await deleteAsset(reqData.id)
        navigate('/seller/listing', {replace: true})
      }
      
    } catch (error) {
      console.log(error);
    }

  };

  const handleCancelClick = () => {
    setShowConfirmation(false);
    setReqData({id: '', option: ''})
  };

  const submitHandler = (id,option) => {
    setReqData({id:id, option:option})
    setShowConfirmation(true);
  };

  useEffect(() => {
    async function fun(){
    if(!showConfirmation) {
      const response = await loader({params})
      setData(response[0]);
    }
    }
    fun(); 
  }, [showConfirmation,params])

  return (
    <>
    {showConfirmation && (
      <Modal onClick={handleCancelClick}>
        <div className="d-block p-3 text-center">
          {reqData.option !== 'accept' ? <><h5>Are you sure you want to Delete?</h5>
          <p className='text-center error-text'>Once the asset is deleted, it can not be reverted!</p></>
          :
          <><h5>Are you sure you want to Accept?</h5>
          <p className='text-center error-text'>Once the offer is accepted, it can not be reverted!</p></>
        }</div>
        <div className="d-block d-flex justify-content-end">
          <Button type='button' text = 'Yes' onClick={handleYesClick} /> <div className='me-2'></div>
          <Button type='button' text = 'Cancel' onClick={handleCancelClick}/>
        </div>
      </Modal>)}

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
                      src={data.picture}
                      alt="asset_image"
                      className="w-100 border-radius-lg shadow-sm"
                    />
                  </div>
                </div>
                <div className="col-auto my-auto">
                  <div className="h-100">
                    <h5 className="mb-1">{data.title}</h5>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 my-sm-auto ms-sm-auto me-sm-0 mx-auto mt-3">
                  <div className="nav-wrapper position-relative end-0 d-flex justify-content-center fw-bold ">
                    {data.asset_type.charAt(0).toUpperCase() + data.asset_type.slice(1)}
                  </div>
                </div>
                {data.status === 'new' && <div className="col-lg-3 col-md-6 my-sm-auto ms-sm-auto me-sm-0 mx-auto mt-3">
                  <div className="nav-wrapper position-relative end-0 d-flex justify-content-center">
                  <button className="btn text-danger" onClick={() => submitHandler(data.id,'delete')}>
                    <i class="bi bi-trash-fill"> </i>Delete
                  </button>
                  </div>
                </div>}
                <div className="col-lg-3 col-md-6 my-sm-auto ms-sm-auto me-sm-0 mx-auto mt-3">
                  <div className="nav-wrapper position-relative end-0 d-flex justify-content-center">
                  <span className="badge badge-sm bg-gradient-danger">
                        {data.status}
                      </span>
                  </div>
                </div>
               
              </div>
              {/* new row */}
              <div className="row gx-4">
                <div className="col-auto my-auto">
                  <div className="h-100">
                    <h5>About</h5>
                    <p className="mb-0 font-weight-bold text-sm text-secondary">
                      {data.description}
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
                      {data.days}
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 my-6 pt-5">
                  <div className="h-100">
                    <h5 className="mb-1">Price</h5>
                    <p className="mb-0 font-weight-bold text-sm pt-3 text-secondary">
                      {data.price}
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 my-6 pt-5">
                  <div className="h-100">
                    <h5 className="mb-1">Model</h5>
                    <p className="mb-0 font-weight-bold text-sm pt-3 text-secondary">
                      {data.price_model_type.charAt(0).toUpperCase() + data.price_model_type.slice(1)}
                    </p>
                  </div>
                </div>
               
              </div>
            </div>
          </div>

          {/* second card */}
          
            <div className="mx-4 mt-3 ">
              <AuctionTable data = {data.offers} model={data.price_model_type} status={data.status} action={submitHandler}/>
            </div>
        
        </div>
        {/* column ends here  */}

        <div className="col-lg-4 col-md-12 mt-sm-3">
          {data.asset_type === 'daraz' ? 
              <DarazDetails data={data.sub_asset}/> :
              <BlogDetails data={data.sub_asset}/>
              }
        </div>
      </div>
    </>

  )
}

export default ListingsDetails

export const DarazDetails = (props) => {
  return(
    <div className="card shadow-lg mx-4 card-profile-bottom">
      <div className="card-body p-3">
      <div className="d-flex flex-column">
        <h6 className="mb-3 text-lg">Details</h6>
        <span className="mb-2 text-sm">
          store Name:
          <span className="text-dark font-weight-bold ms-sm-2">
            {props.data.store_name}
          </span>
        </span>
        <span className="mb-2 text-sm">
          Main Category Name:
          <span className="text-dark font-weight-bold ms-sm-2">
            {props.data.main_category_name}
          </span>
        </span>
        <span className="mb-2 text-sm">
          Ship on Time:
          <span className="text-dark font-weight-bold ms-sm-2">
            {props.data.ship_on_time}
          </span>
        </span>
        <span className="mb-2 text-sm">
          Positive Seller Rating:
          <span className="text-dark font-weight-bold ms-sm-2">
            {props.data.positive_seller_rating}
          </span>
        </span>
        <span className="mb-2 text-sm">
          Response Time:
          <span className="text-dark font-weight-bold ms-sm-2">
            {props.data.response_time}
          </span>
        </span>
        <span className="mb-2 text-sm">
          Response Rate:
          <span className="text-dark font-weight-bold ms-sm-2">
            {props.data.response_rate}
          </span>
        </span>
        <span className="mb-2 text-sm">
          Number of Products:
          <span className="text-dark font-weight-bold ms-sm-2">
            {props.data.products_num}
          </span>
        </span>
        <span className="mb-2 text-sm">
          Average Profit:
          <span className="text-dark ms-sm-2 font-weight-bold">
            {props.data.avg_profit} p/{props.months}m
          </span>
        </span>
        </div>
      </div>
  </div>
  )
}

export const BlogDetails = (props) => {
  return(
    <div className="card shadow-lg mx-4 card-profile-bottom">
      <div className="card-body p-3">
      <div className="d-flex flex-column">
        <h6 className="mb-3 text-lg">Details</h6>
        <span className="mb-2 text-sm">
          Blog Name:
          <span className="text-dark font-weight-bold ms-sm-2">
            {props.data.blog_name}
          </span>
        </span>
        <span className="mb-2 text-sm">
          Industry:
          <span className="text-dark font-weight-bold ms-sm-2">
            {props.data.industry}
          </span>
        </span>
        <span className="mb-2 text-sm">
          Type:
          <span className="text-dark font-weight-bold ms-sm-2">
            {props.data.type}
          </span>
        </span>
        <span className="mb-2 text-sm">
          Monetization Method:
          <span className="text-dark font-weight-bold ms-sm-2">
            {props.data.monitization}
          </span>
        </span>
        <span className="mb-2 text-sm">
          Site Age:
          <span className="text-dark font-weight-bold ms-sm-2">
            {props.data.site_age}
          </span>
        </span>
        <span className="mb-2 text-sm">
          Net profit Per Month:
          <span className="text-dark font-weight-bold ms-sm-2">
            {props.data.net_profit_per_month}
          </span>
        </span>
        </div>
      </div>
  </div>
  )
}

const updateStatus = async (id) => {
  const token = localStorage.getItem('token')
  const response = await fetch('https://api.flipshop.tech/api/offers/status/' + id, {
    method: 'POST',
    headers: {
      'Authorization': 'Bearer ' + token,
      'Content-Type': 'application/json'
    }, 
    body: JSON.stringify({status: 'accepted'})
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

const deleteAsset = async (id) => {
  const token = localStorage.getItem('token')
  const response = await fetch('https://api.flipshop.tech/api/asset/' + id, {
    method: 'DELETE',
    headers: {
      'Authorization': 'Bearer ' + token,
      'Content-Type': 'application/json'
    }
  });

  const responseData = await response.json()
  if(!responseData.success){
    return responseData.message
  }

  if (!response.ok) {
    throw Error('Sorry! Could not Delete')
  }

  return responseData.message
}