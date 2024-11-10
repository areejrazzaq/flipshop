import { useLoaderData } from "react-router-dom";
// import image from "../../assets/img/blog/blog-4.jpg";
import '../SellerForm/stage.css'
import Button from '../UI/Button/Button2'
import '../Admin/Admin.css'
import { useState, useEffect } from "react";
import Modal from '../UI/Modal/Modal';
import {loader as profileLoader} from '../../pages/Buyer/BuyerProfilePage';


function BuyerProfile(props) {
  const loadedData = useLoaderData();
  const [data, setData] = useState(loadedData)

  const role = localStorage.getItem('role')
  // progress bar classes 
  let progressClasses = "progress-bar ";
  if (data.prof_status >= 80) {
    progressClasses = "progress-bar bg-gradient-success";
  } else if (data.prof_status >= 40) {
    progressClasses = "progress-bar bg-gradient-primary";
  } else if (data.prof_status >= 25) {
    progressClasses = "progress-bar bg-gradient-info";
  } else if (data.prof_status < 25) {
    progressClasses = "progress-bar bg-gradient-danger";
  }
  // code ref 
  const [codeState, setCodeState] = useState('');  
  // verify response
  const [verifyEmailResponse, setVerifyEmailResponse] = useState(''); 
  // managing modal state
  const [showConfirmation, setShowConfirmation] = useState(false);
  // update response 
  const [updateMessage, setUpdateMessage] = useState({})

  const handleYesClick = async (code) => {
    // send request to backend here
    try {
      const response = await verifyEmailCode(code);
      setVerifyEmailResponse(response.message);

      } catch (error) {
      console.log(error);
    }

  };

  const handleCancelClick = () => {
    setShowConfirmation(false);
  };

  const submitHandler = (event) => {
    getEmailCode();
    setShowConfirmation(true);
  };

  // managing input states 
  const [facebook, setFacebook] =  useState(data.facebook); 
  const [instagram, setInstagram] =  useState(data.instagram); 
  const [twitter, setTwitter] =  useState(data.twitter); 
  const [about, setAbout] =  useState(data.about); 
  const [mobile, setMobile] =  useState(data.mobile); 
  const [picture, setPicture] =  useState(data.picture); 
  const [location, setLocation] =  useState(data.location); 
 


  const handleUpdate = async () => {
    const data = {
      location: location, 
      information: about, 
      mobile: mobile,
      twitter: twitter, 
      instagram: instagram, 
      facebook: facebook,
      picture: picture,
    }
    try {
      let updateResponse = await updateProfile(data)
      setUpdateMessage(updateResponse)
      } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    async function fun(){
    console.log('data Loaded')
      const response = await profileLoader()
      setData(response);
    
    }
    fun(); 
  }, [updateMessage,verifyEmailResponse])

  return (
    <div className="container-fluid mb-4">
     {showConfirmation && (
        <Modal onClick={handleCancelClick}>
          {!verifyEmailResponse ? <>
            <div className="d-block p-3 text-center">
            <h4>Please check your email for verification code.</h4>
            <p>Enter the email code that has been sent to you email.</p>
          </div>
          <div className="d-block p-3  mb-4">
            <label htmlFor="code" className="form-control-label fw-bold text-sm pb-2">
              Verification Code
            </label>
            <input
              autoComplete="off"
              className="form-control"
              type="text"
              name='code'
              id = 'code'
              value={codeState}
              onChange={(e) => {setCodeState(e.target.value)}}
              />
            </div>
          </> : 
          <div className="d-block p-3 text-center">
            <h4>{verifyEmailResponse}</h4>
          </div>
          }
          <div className="d-block d-flex justify-content-end">
            <Button type='button' text = {verifyEmailResponse ? 'Close' : 'Cancel'} onClick={handleCancelClick}/> <div className='me-2'></div>
            {!verifyEmailResponse && <Button type='button' text = 'Verify' onClick={() => handleYesClick(codeState)} /> }
          </div>
        </Modal>)}

      <div className="card shadow-lg mx-4 card-profile-bottom">
        <div className="card-body p-3">
          <div className="row gx-4">
            <div className="col-auto">
              <div className="avatar avatar-xl position-relative mt-4">
                <img
                  src={data.picture}
                  alt="profile_image"
                  className="w-100 rounded shadow-sm"
                />
              </div>
            </div>
            <div className="col-auto my-auto">
              <div className="h-100">
                <h5 className="mb-1">{data.name}</h5>
                <p className="mb-0 font-weight-bold text-sm">{data.email}</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 my-sm-auto ms-sm-auto me-sm-0 mx-auto mt-3">
              <div className="nav-wrapper position-relative end-0 d-flex justify-content-center">
                {data.email_verify_status !== 1 ? (
                  <span className="badge badge-sm bg-gradient-danger">
                    Not Verified
                  </span>
                ) : (
                  <span className="badge badge-sm bg-gradient-success">
                    Verified
                  </span>
                )}
              </div>
            </div>

          </div>
        </div>
      </div>
      {/* new row */}
      <div className="row">
        <div className="mt-4 col-lg-8">
          <div className="card shadow-lg mx-4 card-profile-bottom">
            <div className="card-header pb-0">
              <div className="d-flex align-items-center row">

                <p className="mb-0 fw-light text-lg text-secondary col-lg-4">Edit Profile</p>

                <div className="m-auto col-lg-4">
                  <div className="d-flex align-items-center justify-content-center">
                    <span className="me-2 text-sm font-weight-bold">
                      {data.prof_status}% Complete
                    </span>
                    <div>
                      <div className="progress progress-bar-sm" style={{ height: '5px', width: '100px' }}>
                        <div
                          className={progressClasses + " w-" + data.prof_status}
                          role="progressbar"
                          aria-valuenow={data.prof_status}
                          aria-valuemin="0"
                          aria-valuemax="100"
                          style={{ width: `${data.prof_status}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>

              <div className="col-lg-4 ms-auto d-flex justify-content-end">
                <Button text='Update' onClick={handleUpdate}/>
              </div>

              </div>
            </div>
              {updateMessage.message && <p className="error-text text-center">{updateMessage.message}</p>}
            <div className="card-body">
            {/* new section */}
              <p className="text-uppercase text-lg text-secondary">User Information</p>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="example-text-input" className="form-control-label fw-bold text-sm pb-2">
                      Name
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      value={data.name}
                      required
                      readOnly
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="example-text-input" className="form-control-label fw-bold text-sm pb-2">
                      Email address
                    </label>
                    <input
                      required
                      className="form-control"
                      type="email"
                      value={data.email}
                      readOnly
                    />
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="example-text-input" className="form-control-label">
                      Picture
                    </label>
                    <input
                      className="form-control"
                      // src={URL.createObjectURL(picture)}
                      type="file"
                      accept="image/*"
                      // value = {picture}
                      onChange={e => setPicture(e.target.files[0])}
                    />
                  </div>
                </div>

              </div>
                  {/* section break */}
              <div className="d-flex justify-content-center">
                <hr />
              </div>
                {/* new section */}
              <p className="text-uppercase text-lg text-secondary">Contact Information</p>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="example-text-input" className="form-control-label">
                      Mobile Number
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      value={mobile}
                      onChange={e => setMobile(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="example-text-input" className="form-control-label">
                      Location
                    </label>
                    <input className="form-control" type="text" value={location} 
                       onChange={e => setLocation(e.target.value)}                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <label htmlFor="example-text-input" className="form-control-label">
                      Instagram
                    </label>
                    <input className="form-control" type="text" value={instagram} onChange={e => setInstagram(e.target.value)} />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <label htmlFor="example-text-input" className="form-control-label">
                      Facebook
                    </label>
                    <input className="form-control" type="text" value={facebook} onChange={e => setFacebook(e.target.value)} />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <label htmlFor="example-text-input" className="form-control-label">
                      Twitter
                    </label>
                    <input className="form-control" type="text" value={twitter} onChange={e => setTwitter(e.target.value)} />
                  </div>
                </div>
              </div>

              {/* section break */}
              <div className="d-flex justify-content-center">
                <hr />
              </div>
              {/* new section */}
              <p className="text-uppercase text-lg text-secondary">About me</p>
              <div className="row">
                <div className="col-md-12">
                  <div className="form-group">
                    <label htmlFor="example-text-input" className="form-control-label">
                      About me
                    </label>
                    <textarea
                      rows='3'
                      className="form-control"
                      type="text"
                      value={about}
                      onChange={e => setAbout(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 col-lg-4">
         <div className="card shadow-lg mx-4 card-profile">

            <div className="mx-4 row justify-content-center my-4">
              <div className="col-4 avatar avatar-xl position-relative mt-4">
                    <img src={data.picture} className="shadow-sm rounded-circle img-fluid" alt="profile_image"/>
              </div>
              
            </div>

            <div className="card-body pt-0">

              <div className="row">
                <div className="col">
                  <div className="d-flex justify-content-center">
                    <div className="d-grid text-center">
                      <span className="text-lg fs-2 font-weight-bolder">{role === 'seller' ? data.total_listings : data.total_contracts}</span>
                      <span className="text-secondary text-lg opacity-8">{role === 'seller' ? 'Listings' : 'Contracts'}</span>
                    </div>
                    <div className="d-grid text-center mx-4">
                      <span className="text-lg fs-2 font-weight-bolder">{data.reviews_count}</span>
                      <span className="text-secondary text-lg opacity-8">Reviews</span>
                    </div>
                    <div className="d-grid text-center">
                      <span className="text-lg fs-2 font-weight-bolder">{role === 'seller' ? data.total_sales : data.total_purchases}</span>
                      <span className="text-secondary text-lg opacity-8">{role === 'seller' ? 'Sales' : 'Purchases'}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center mt-4">
                <div className="m-4">
                <h4>
                {data.name}
                {/* <span className="font-weight-light">, 35</span> */}
                </h4>
                <div className="h6 text-secondary">
                  Created At : 
                  {new Date(data.created_at).toLocaleDateString("en-US", {
                    month: "numeric",
                    day: "numeric",
                    year: "numeric",
                  })}
                </div>
                </div>
                
                <div className="text-center">
                  <div className="social-links d-flex mt-4 justify-content-center">
                    <a href={data.twitter} className="twitter mx-3"><i className="bi bi-twitter"></i></a>
                    <a href={data.facebook} className="facebook mx-3"><i className="bi bi-facebook"></i></a>
                    <a href={data.instagram} className="instagram mx-3"><i className="bi bi-instagram"></i></a>
                  </div>
                </div>
                <div className="m-4">
                <div className="h6 mt-4">
                  <i className="ni business_briefcase-24 mr-2"></i>{role !== 'seller' ? 'Buyer' : 'Seller'} at - Flip Shop 
                </div>
                <div className="text-secondary">
                  <i className="ni education_hat mr-2"></i>Cras fermentum odio eu feugiat lide par.
                </div>
                </div>
              </div>

            </div>

          </div>
          <div className="mx-4 my-4 d-flex align-items-center justify-content-center">
          {data.email_verify_status !== 1  && <Button onClick={submitHandler} text='Get Verification code'/>} 
        </div>
        </div>
        
      </div>
    </div>
  );
}

export default BuyerProfile;

const getEmailCode = async () => {
  const token = localStorage.getItem('token')
  const response = await fetch('https://api.flipshop.tech/api/profile/verify_email', {
    method: 'GET',
    headers: {
      'Authorization': 'Bearer ' + token,
      'Content-Type': 'application/json'
    }
  });
  const responseData = await response.json()
  console.log(responseData)

  if (!responseData.success) {
    console.log(responseData.error)
    return responseData.error;
  }

  if (!response.ok) {
    throw Error('Sorry! Could not Load the Customer Data')
  }

  return responseData;
}

const verifyEmailCode = async (code) => {

  const token = localStorage.getItem('token')
  const response = await fetch('https://api.flipshop.tech/api/profile/verify_email', {
    method: 'POST',
    headers: {
      'Authorization': 'Bearer ' + token,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({code: code})
  });

  const responseData = await response.json()
  console.log(responseData)

  if (!responseData.success) {
    return responseData;
  }

  if (!response.ok) {
    throw Error('Sorry! Could not Load the Customer Data')
  }

  return responseData;
}

const updateProfile = async (data) => {
  const token = localStorage.getItem('token')
  console.log(data)
  const response = await fetch('https://api.flipshop.tech/api/profile', {
    method: 'PUT',
    headers: {
      'Authorization': 'Bearer ' + token,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });

  const responseData = await response.json()

  console.log(responseData)

  if (!responseData.success) {
    return responseData;
  }

  if (!response.ok) {
    throw Error('Sorry! Could not Load the Customer Data')
  }

  return responseData;
}