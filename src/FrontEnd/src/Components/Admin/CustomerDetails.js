import React from "react";
import { useState, useEffect } from "react";
import Modal from '../UI/Modal/Modal';
import Button from '../UI/Button/Button2'
import {loader as profileLoader} from '../../pages/Admin/CustomerDetailPage'
import { useParams } from "react-router-dom";

function CustomerDetails(props) {
  const params = useParams();
  const [data, setData] = useState(props.data)
  
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [message, setMessage] = useState('')

  const handleYesClick = async () => {
    // send request to backend here
    try {
      const response = await blockRequest(data.id);
      setMessage(response)
      // setShowConfirmation(false);
      // window.location.reload();
    } catch (error) {
      console.log(error);
    }

  };

  const handleCancelClick = () => {
    setShowConfirmation(false);
    setMessage('');
  };

  const submitHandler = (event) => {
    setShowConfirmation(true);
  };

  useEffect(() => {
    async function fun(){
      const response = await profileLoader({params})
      setData(response);
    }
    fun(); 
  }, [message, params])

  return (
    <>
      <div className="container-fluid">
        <div className="mx-4 mb-4 d-flex justify-content-end">
          <form>
            <div onClick={submitHandler}>
              {data.status === 0 ? (
                <span className="badge badge-sm bg-gradient-danger">Block</span>
              ) : (
                <span className="badge badge-sm bg-gradient-success">
                  Unblock
                </span>
              )}
            </div>
          </form>
        </div>
      </div>

      {showConfirmation && (
        <Modal onClick={handleCancelClick}>
          <div className="d-block p-3 text-center">
           {!message ? <h5>Are you sure you want to {data.status === 1 ? 'Unblock' : 'Block'}?</h5> :
           <h5>{message}</h5>
           }
          </div>
          <div className="d-block d-flex justify-content-end">
            {!message && <Button type='button' text = 'Yes' onClick={handleYesClick} />} <div className='me-2'></div>
            <Button type='button' text = {message ? 'Close' : 'Cancel'} onClick={handleCancelClick}/>
          </div>
        </Modal>)
      }

      <div className="card shadow-lg mx-4 card-profile-bottom">
        <div className="card-body p-3">
          <div className="row gx-4">
            <div className="col-auto">
              <div className="avatar avatar-xl position-relative">
                <img
                  src={data.picture}
                  alt="profile_image"
                  className="w-100 h-100 border-radius-lg shadow-sm"
                />
              </div>
            </div>
            <div className="col-auto my-auto">
              <div className="h-100">
                <h5 className="mb-1">{data.name}</h5>
                <p className="mb-0 font-weight-bold text-sm">{data.email}</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 my-sm-auto ms-sm-auto me-sm-0 mx-auto mt-3 d-flex end-0 justify-content-center align-items-center">
              <div className="d-flex flex-column me-3">
                {data.status === 1 ? (
                  <span className="badge badge-sm bg-gradient-danger">
                    Blocked
                  </span>
                ) : (
                  <span className="badge badge-sm bg-gradient-success">
                    Active
                  </span>
                )}
              </div>
              <div className="">
                {data.email_verify_status === 1 ? (
                  <span className="badge badge-sm bg-gradient-success">
                    Verified
                  </span>
                ) : (
                  <span className="badge badge-sm bg-gradient-danger">
                    No Verified
                  </span>
                )}
              </div>
            </div>
           
          </div>

          <div className="row gx-4 my-2">
          <h5 className="mb-1">About</h5>
          <p>{data.about}</p>
          </div>

          <div className="row gx-4">
            <div className="col-lg-3 col-md-6 my-6 pt-2">
              <div className="h-100">
                <h5 className="mb-1">Contact</h5>
                <p className="mb-0 font-weight-bold text-sm my-2">
                  {data.mobile}
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 my-6 pt-2">
              <div className="h-100">
                <h5 className="mb-1">Location</h5>
                <p className="mb-0 font-weight-bold text-sm my-2">
                  {data.location}
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 my-6 pt-2">
              <div className="h-100">
                <h5 className="mb-1">Profile Statue</h5>
                <p className="mb-0 font-weight-bold text-sm my-2">
                  {data.prof_status}% Complete
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 my-6 pt-2">
              <div className="h-100">
                <h5 className="mb-1">Created At</h5>
                <p className="mb-0 font-weight-bold text-sm my-2">
                  {new Date(data.created_at).toLocaleDateString("en-US", {
                    month: "numeric",
                    day: "numeric",
                    year: "numeric",
                  })}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-4 col-md-6 col-sm-12">
          <div className="card shadow-lg mx-4 my-4 card-profile-bottom">
            <div className="card-body p-3">
              <div className="h-100">
                <h5 className="mb-1">Transactions</h5>
                <p className="mb-0 font-weight-bold text-sm  pt-3">
                  {data.transactions}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
          <div className="card shadow-lg mx-4 my-4 card-profile-bottom">
            <div className="card-body p-3">
              <div className="h-100">
                <h5 className="mb-1">Interest</h5>
                <p className="mb-0 font-weight-bold text-sm pt-3">
                  {data.interests}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
          <div className="card shadow-lg mx-4 my-4 card-profile-bottom">
            <div className="card-body p-3">
              <div className="h-100">
                <h5 className="mb-1">Purchases</h5>
                <p className="mb-0 font-weight-bold text-sm pt-3">
                 {data.total_purchases}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CustomerDetails;


export async function blockRequest(id) {
    const token = localStorage.getItem('token'); 

    const response = fetch( "https://api.flipshop.tech/api/users/block/" + id, {
      method: "POST",
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      },
    })

    const responseData = await response;
    responseData.json()

    if (!responseData.success) {
      // console.log(responseData.error);
      return responseData.message;
    }
  
    if (!response.ok) {
      throw Error("Sorry! Could not Load the Customer Data");
      // throw json({message: 'Data you are looking for is either not available or removed from sources!'}, {status: 500});
    }
    const data = responseData.data;
    console.log(data);
  
    return responseData.message;
}


