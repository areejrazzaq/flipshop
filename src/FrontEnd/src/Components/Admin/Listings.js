import React, { useRef } from "react";
import Title from "../UI/Title/Title";
import Table from "../UI/Tables/ListingTable1";
import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import Modal from '../UI/Modal/Modal';
import Button from '../UI/Button/Button2';


function Listing() {
  const data = useLoaderData();
  
  //this state is used to handle the drop down value change
  // this will contain the value such as blocked or active user
  const [filter, setFilter] = useState("All");
  function handleFilterChange(event) {
    setFilter(event.target.value);
  }

  //this state will manage search
  const [searchQuery, setSearchQuery] = useState("");

  const filteredData = data.filter((item) => {
    if (filter === "All") {
      return data;
    } else if (filter === "Daraz") {
      return item.asset_type === 'daraz';
    } else if (filter === "Blogs") {
      return item.asset_type === 'blog';
    } else return [];
  }).filter((item) => {
    return item.title.toLowerCase().includes(searchQuery.toLowerCase());
  });

  // url change div 
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [message, setMessage] = useState('')
  const url = useRef();

  const handleYesClick = async () => {
    // send request to backend here
    try {
      const response =  await UpdateURL(url.current.value);
      setMessage(response)
    } catch (error) {
      console.log(error);
    }

  };

  const handleCancelClick = () => {
    setShowConfirmation(false);
    setMessage('')
  };

  const submitHandler = (event) => {
    setShowConfirmation(true);
  };



  return (
    <>
      <Title page="Listings" />

      {showConfirmation && (
        <Modal onClick={handleCancelClick}>
          <div className="d-block p-3 text-center">
            {message ? <h5>{message}</h5>:<>
            <h5>Enter URL.</h5>
            <form>
            <div className="mb-3">
              <input type="url" className="form-control" ref={url} required/>
            </div>
          </form>
            </>}
          </div>

          <div className="d-block d-flex justify-content-end">
            {!message && <Button type='submit' text = 'Update' onClick={handleYesClick} /> }
            <div className='me-2'></div>
            <Button type='button' text = {message ? 'Close' : 'Cancel'} onClick={handleCancelClick}/>
          </div>
        </Modal>)}

      <div className="container-fluid d-flex ">
          <div className=" d-flex">
            <div className="input-group me-3 col-auto">
                <span className="input-group-text text-body"><i className="bi bi-search" aria-hidden="true"></i></span>
                <input className= 'form-control' type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder="Search By Name..."/>
            </div>
          <select value={filter} onChange={handleFilterChange} className= 'form-control col-auto' placeholder="Search By Status...">
            <option className="text-body" value="All">Select Type</option>
            <option value="Daraz">Daraz</option>
            <option value="Blogs">Blogs</option>
          </select>
          </div>
      </div>

      <div className="container-fluid d-flex mt-4 justify-content-end">
         <Button type='button' text='Update URL' onClick={submitHandler}></Button>
      </div>

      <div className="container-fluid py-4">
        {data && data.error && (
          <p className="error-text d-flex justify-content-center">
            {data.error}
          </p>
        )}
        {filteredData && filteredData.length > 0 && <Table data={filteredData} />}
        {filteredData && filteredData.length === 0 && (
          <p className="error-text d-flex justify-content-center align-items-center">
            Sorry! No Asset Found.
          </p>
        )}
      </div>
    </>
  );
}

export default Listing;


const UpdateURL = async (url) =>{
  console.log(url)
  const token = localStorage.getItem('token')
  const response = await fetch('https://api.flipshop.tech/api/ngrok_url' , {
  method: 'PUT',
  headers: {
    'Authorization': 'Bearer ' + token,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({url: url})
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