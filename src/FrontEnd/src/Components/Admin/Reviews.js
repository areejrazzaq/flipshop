import React from "react";
import Title from "../UI/Title/Title";
import './Admin.css'
import { useState, useEffect } from "react";
import Modal from '../UI/Modal/Modal';
import { useLoaderData } from "react-router-dom";
import { ReviewDetails, ReviewItem, SideItem } from "./ReviewItem";
import {loader as reviewsLoader} from '../../pages/Admin/ReviewsPage'

function ReviewsComponent(props) {
  // getting all the data 
  const loadedData = useLoaderData(); 
  const [data, setData] = useState(loadedData)
  // filter un replied data 
  const notRepliedData = data.filter(item => item.has_replied === 'no')
 
  // filter replied data and sort them with date
  const repliedData = data.filter(item => item.has_replied === 'yes');
  repliedData.sort((a, b) => new Date(b.date) - new Date(a.date));
  //  filter todays data
  const newestData = data.filter(
    (item) =>
      new Date(item.created_at).toLocaleDateString() ===
      new Date().toLocaleDateString()
  );

  // filter yesterdays data 
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  const yesterdayData = data.filter(
    (item) => new Date(item.date).getDate() === yesterday.getDate()
  );


  // managing the modal data state
  const [selectedItem , setSelectedItem] = useState({}); 
  //managing modal state
  const [showDetails, setShowDetails] = useState(false);

  // this function will use to mark the modal as read
  const handleYesClick = async (id) => {
    console.log(id)
    // send request to backend here
    try {
      await markAsReplied(id);
      setShowDetails(false);
      // window.location.reload();
    } catch (error) {
      console.log(error);
    }

  };
  // this function will hide the modal 
  const handleCancelClick = () => {
    setShowDetails(false);
  };
  // this function will render the modal 
  const submitHandler = (id) => {
    console.log()
    setShowDetails(true);
    setSelectedItem(data.filter(item => item.id === id)[0])
  };

  useEffect(() => {
    async function fun(){
    if(!showDetails) {
      const response = await reviewsLoader();
      setData(response);
    }
    }
    fun(); 
  }, [showDetails])

  return (
    <>
    {showDetails && (
        <Modal onClick={handleCancelClick}>
          <ReviewDetails 
            id={selectedItem.id} 
            key={selectedItem.id} 
            name={selectedItem.name} 
            email={selectedItem.email} 
            date={selectedItem.created_at} 
            subject={selectedItem.subject} 
            message={selectedItem.message} 
            has_replied={selectedItem.has_replied} 
            handleCancelClick={handleCancelClick} 
            handleYesClick={handleYesClick} />
        </Modal>)}

      <Title page="Customers" />
      <div className="container-fluid py-4">

      <div className="row">
      {/* unreplyed data */}
        <div className="col-lg-7 mt-4">
          <div className="card">
            <div className="card-header pb-0 px-3">
              <h4 className="mb-0">Unreplied Queries</h4>
            </div>
            <div className="card-body pt-4 p-3">
              <ul className="list-group">
              {notRepliedData && notRepliedData.length > 0 && notRepliedData.map(item => <ReviewItem  
                                                            submitHandler={submitHandler} 
                                                            subject = {item.subject} 
                                                            name= {item.name} 
                                                            email={item.email} 
                                                            date={item.created_at} 
                                                            id={item.id} 
                                                            key={item.id} />)}
              {notRepliedData && notRepliedData.length === 0 && <p className="error-text text-center">No new message</p>}
              </ul>
            </div>
          </div>
        </div>
        {/* side bar */}
        <div className="col-lg-5 mt-4">
          <div className="card mb-4">
            <div className="card-header pb-0 px-3">
              <div className="row">
                <div className="col-md-6">
                  <h4 className="mb-0">Your Messages's</h4>
                </div>
                <div className="col-md-6 d-flex justify-content-end align-items-center">
                  <i className="bi bi-calendar2-minus me-2 fs-5"></i>
                  <small className="text-lg">{new Date().toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })}</small>
                </div>
              </div>
            </div>
            
            <div className="card-body pt-4 p-3">
              <h6 className="text-uppercase text-body text-sm font-weight-bolder mb-3">Newest</h6>
              <ul className="list-group">
              {newestData &&
               newestData.length > 0 
               ? 
               newestData.map(item => <SideItem  submitHandler={submitHandler} has_replied={item.has_replied} name= {item.name} date={item.created_at} id={item.id} key={item.id} />)
               :
                <p className="error-text text-center">You do not have any message today.</p>
              }
              </ul>
              <h6 className="text-uppercase text-body text-sm font-weight-bolder my-3">Yesterday</h6>
              <ul className="list-group">
              {yesterdayData &&
               yesterdayData.length > 0 
               ? 
               yesterdayData.map(item => <SideItem has_replied={item.has_replied}  submitHandler={submitHandler}  name= {item.name} date={item.created_at} id={item.id} key={item.id} />)
               :
                <p className="error-text text-center">You did not have any message yesterday.</p>
              }
              </ul>
            </div>
          </div>
          {/* second side tab */}
          <div className="card mb-4">
            <div className="card-header pb-0 px-3">
              <div className="row">
                  <h4 className="mb-0">Previous Replied Messages</h4>
              </div>
            </div>
            <div className="card-body pt-4 p-3">
              <h6 className="text-uppercase text-body text-sm font-weight-bolder mb-3">From Newest to Oldest</h6>
              <ul className="list-group">
              {repliedData &&
               repliedData.length > 0 
               ? 
               repliedData.map(item => <SideItem  
                                submitHandler={submitHandler} 
                                has_replied={item.has_replied} 
                                name= {item.name} 
                                date={item.created_at} 
                                id={item.id} 
                                key={item.id} 
                                previous='yes'
                             />)
               :
                <p className="error-text text-center">You do not have any previous replied message.</p>
              }
              </ul>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default ReviewsComponent;


export async function markAsReplied(id) {
  const token = localStorage.getItem('token'); 

  const response = fetch( "https://api.flipshop.tech/api/contact_us/" + id, {
    method: "POST",
    headers: {
      Authorization: "Bearer " + token,
      "Content-Type": "application/json",
    },
  })

  const responseData = await response;
  responseData.json()
  console.log(responseData)

  if (!responseData.success) {
    console.log(responseData.message);
    return responseData.message;
  }

  if (!response.ok) {
    throw Error("Sorry! Could not Load the Customer Data");
  }
  const data = responseData.message;
  console.log('response data')
  console.log(data);
  return data;
}
