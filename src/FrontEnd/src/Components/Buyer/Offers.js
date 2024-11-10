import React from 'react'
import Table from './UI/Table'
import { useLoaderData } from 'react-router-dom'
import { useState, useEffect } from 'react';
import Modal from "../UI/Modal/Modal";
import Button from "../UI/Button/Button2";
import useInput from '../hooks/use-input';
import {loader} from '../../pages/Buyer/BuyerOffersPage'

function Offers() {
  const loadedData = useLoaderData();
  // console.log('datas')
  // console.log(loadedData) 
  const [data, setData] = useState(loadedData)
  // console.log(data)

  //this state is used to handle the drop down value change
  const [filter, setFilter] = useState("Any");
  function handleFilterChange(event) {
    setFilter(event.target.value);
  }
  //this state will manage search
  const [searchQuery, setSearchQuery] = useState("");
  const filteredData = data.filter((item) => {
    if (filter === "All") {
      return data;
    } else if (filter === "process") {
      return item.status === 'in_process';
    } else if (filter === "accepted") {
      return item.status === 'accepted';
    } else if (filter === "rejected") {
      return item.status === 'rejected';
    } else return [];
  }).filter((item) => {
    return item.asset_name.toLowerCase().includes(searchQuery.toLowerCase());
  });

  const [itemID, setItemID] = useState({id: '', asset: '', type: ''})
  const [showConfirmation, setShowConfirmation] = useState(false);
  const {value: enteredPrice, isValid: enteredPriceIsValid, hasError: priceInputIsInvalid, onChangeHandler: priceChangeHandler, onBlurHandler: onPriceBlurHandler, reset: priceReset} = useInput((price) => price > 0); 
  const [message, setMessage] = useState(''); 


  const handleYesClick = async () => {
    // console.log(itemID.type)
    // send request to backend here
    try {
      if(itemID.type === 'PUT') {
        // console.log(itemID.type)
        const response = await editOffer(itemID, enteredPrice)
        setMessage(response)
      } if(itemID.type === 'DELETE'){
        // console.log(itemID.type)
        const response = await editOffer(itemID, '')
        setMessage(response)
      }
      // setShowConfirmation(false)

    } catch (error) {
      console.log(error);
    }
  };

  const handleCancelClick = () => {
    setShowConfirmation(false);
    setMessage('')
    priceReset()
  };

  const submitHandler = (id,asset,type) => {
      setItemID({id:id,asset:asset, type:type});
      setShowConfirmation(true);
  };

  useEffect(() => {
    async function fun(){
    console.log('data Loaded')
      const response = await loader()
      setData(response);
    
    }
    fun(); 
  }, [message])


  return (
    <>
    
      
      <div className="container-fluid d-flex mb-3">
          <div className=" d-flex">
            <div className="input-group me-3 col-auto">
                <span className="input-group-text text-body"><i className="bi bi-search" aria-hidden="true"></i></span>
                <input className= 'form-control' type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder="Search By Name..."/>
            </div>
          <select value={filter} onChange={handleFilterChange} className= 'form-control col-auto' placeholder="Search By Status...">
            <option className="text-body" value="All">Select Status</option>
            <option value="process">In Process</option>
            <option value="accepted">Accepted</option>
            <option value="rejected">Rejected</option>
          </select>
          </div>
      </div>

      <Table data={filteredData} submitHandler={submitHandler}/>

      {showConfirmation && (
        <Modal onClick={handleCancelClick}>
          
            <div className="d-block p-3 text-center">
           {!message && <h4>{itemID.type === 'DELETE' ? 'Are you sure you want to delete?' :
                                            'Make an Offer.'
            }</h4>}
            {message && <h4 className='text-center text-primary'>{message}</h4> }
          </div>
          {!message && itemID.type === 'PUT' && <div className="d-block p-3  mb-4">
            <label htmlFor="code" className="form-control-label fw-bold text-sm pb-2">
              Amount
            </label>
            <input
              autoComplete="off"
              className={!priceInputIsInvalid ? "form-control" : "form-control invalid"}
              type="number"
              name='price'
              id = 'price'
              value={enteredPrice}
              onChange={priceChangeHandler}
              onBlur={onPriceBlurHandler}
              />
              {priceInputIsInvalid && <p className='error-text'>Price should be greater than 0.</p>}
            </div>}
            

          <div className="d-block d-flex justify-content-end">
            <Button type='button' text = 'Close' onClick={handleCancelClick}/> <div className='me-2'></div>
           {!message && itemID.type === 'PUT' &&
            <Button type='button' text = 'Offer'
            disabled = {!enteredPriceIsValid}
            onClick={handleYesClick} />}
             {!message && itemID.type === 'DELETE' &&
            <Button type='button' text = 'Delete'
            onClick={handleYesClick} />}
          </div>
        </Modal>)}
    </>
  )
}

export default Offers

const editOffer = async ({id,asset,type}, amount) => {

  const token = localStorage.getItem('token')
  const response = await fetch('https://api.flipshop.tech/api/offers/' + id , {
    method: type,
    headers: {
      'Authorization': 'Bearer ' + token,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({amount: amount, asset_id: asset})
  });
  const responseData = await response.json()

  if (!responseData.success) {
    console.log(responseData.error)
    return responseData.message;
  }
  if (!response.ok) {
    throw Error('Sorry! Could not Load the Customer Data')
      // throw json({message: 'Data you are looking for is either not available or removed from sources!'}, {status: 500});
  }
  
 console.log(responseData.message)
  return responseData.message;

}