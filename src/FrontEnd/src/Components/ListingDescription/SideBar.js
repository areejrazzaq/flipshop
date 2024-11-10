import { useLoaderData } from "react-router-dom";
import '../../index.css'
import { useRef, useState } from "react";
import Modal from "../UI/Modal/Modal";
import Button from "../UI/Button/Button2";
import useInput from "../hooks/use-input";

export default function SideBar(props) {
  const data = useLoaderData();

  const [interestResponse, setInterestResponse] = useState({})
  // interest handling function 
  const interestHandler = async () => {
    if(localStorage.getItem('role') === 'buyer'){
      const response = await showInterest(data.id)
      setInterestResponse(response);
    }
    else{
      setInterestResponse({message: 'You need to make buyers account to show interest.'})
    }
  }
  
  const [offerResponse, setOfferResponse] = useState({})
  // modal functions and states
  const [showConfirmation, setShowConfirmation] = useState(false);
  const {value: enteredPrice, isValid: enteredPriceIsValid, hasError: priceInputIsInvalid, onChangeHandler: priceChangeHandler, onBlurHandler: onPriceBlurHandler, reset: priceReset} = useInput((price) => price > 0); 


  const handleYesClick = async () => {
    // send request to backend here
    let response;
    try {
      response = await makeOffer(data.id,data.price_model_type, enteredPrice)
      setOfferResponse(response);
      setShowConfirmation(false)
    } 
    catch (error) {
      console.log(error)
    }

  };

  const handleCancelClick = () => {
    setShowConfirmation(false);
    priceReset(); 
  };

  const submitHandler = (event) => {
    if(localStorage.getItem('role') === 'buyer'){
      setShowConfirmation(true);
    }else{
      setOfferResponse({message: 'You need to make a buyer account to make offer.'})
    }
  };


  return (
    <div>
      <div className="sidebar w-100">
      <div className="pb-2">
        {data.picture ?
              <img src={data.picture} alt='asset' className="w-100 border-radius-lg shadow-sm"/>
              :
              <div className='shadow-lg mb-4 border-radius-lg' style={{'min-height': '150px', minWidth: '250px'}}></div>
        }
      </div>

        <div className="py-3 d-flex justify-content-center">
          <h3 className="sidebar-title me-auto">Asking Price</h3>
          <h6 className="sidebar-title fw-bold ms-auto">PKR {data.price}\-</h6>
        </div>

        <div className="py-3 d-flex flex-column align-items-center">
          {data.status === 'new' && <button 
              className="btn button interest-button"
              onClick={submitHandler}><i 
              className="bi bi-currency-dollar"
              > 
                </i>Make an {data.price_model_type==='auction'? 'Bid' : 'Offer'}
            </button>
          }
          {offerResponse.message && <p className="pt-3 error-text text-center">{offerResponse.message}</p>}
          <br/>
          <button className="btn button interest-button"  onClick={interestHandler}><i className="bi bi-heart-fill">   </i> Show Interest </button>
          {interestResponse.message && <p className="pt-3 error-text text-center">{interestResponse.message}</p>}
        </div>

        <div className="sidebar-item categories pt-3">
          <h3 className="sidebar-title">Details</h3>
          <ul className="mt-3">
            <li className="py-3 d-flex justify-content-center">
                Asset Type 
                <div className="ms-auto mx-3">{data.asset_type.charAt(0).toUpperCase() + data.asset_type.slice(1)}</div>
            </li>
            <li className="py-3 d-flex justify-content-center">
                Price Model 
                <div className="ms-auto mx-3">{data.price_model_type.charAt(0).toUpperCase() + data.price_model_type.slice(1)}</div>
            </li>
            <li className="py-3 d-flex justify-content-center">
                Days Created 
                <div className="ms-auto mx-3">{data.days}</div>
            </li>
          </ul>
        </div>
     

        <div className="sidebar-item tags">
          <h3 className="sidebar-title">Monetization</h3>
          <ul className="mt-3">
            <li>
              <a href="#comment">Ads</a>
            </li>
            <li>
              <a href="#comment">Affiliate Sales</a>
            </li>
            <li>
              <a href="#comment">Adn</a>
            </li>
            <li>
              <a href="#comment">Mac</a>
            </li>
            <li>
              <a href="#comment">Design</a>
            </li>
            <li>
              <a href="#comment">Office</a>
            </li>
            <li>
              <a href="#comment">Creative</a>
            </li>
            <li>
              <a href="#comment">Studio</a>
            </li>
            <li>
              <a href="#comment">Smart</a>
            </li>
            <li>
              <a href="#comment">Tips</a>
            </li>
            <li>
              <a href="#comment">Marketing</a>
            </li>
          </ul>
        </div>
      </div>
      {showConfirmation && (
        <Modal onClick={handleCancelClick}>
          
            <div className="d-block p-3 text-center">
            <h4>Make on {data.price_model_type === 'auction' ? 'Bid' : 'Offer'}</h4>
          </div>
          <div className="d-block p-3  mb-4">
          
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
            </div>

          <div className="d-block d-flex justify-content-end">
            <Button type='button' text = 'Close' onClick={handleCancelClick}/> <div className='me-2'></div>
            <Button type='button' text = {data.price_model_type === 'auction' ? 'Bid' : 'Offer'} disabled = {!enteredPriceIsValid} onClick={handleYesClick} />
          </div>
        </Modal>)}
    </div>
  );
}


const showInterest = async (id) => {
  const token = localStorage.getItem("token");
  const response = await fetch("https://api.flipshop.tech/api/interest", {
    method: "POST",
    headers: {
      Authorization: "Bearer " + token,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({asset_id: id, status: 'yes'})
  });
  const responseData = await response.json();


  if (!response.ok) {
    throw Error("Sorry! Could not Load the Customer Data");
  }
  return responseData;
}

const makeOffer = async (id,model, amount) => {
  const token = localStorage.getItem("token");
  const url = 'https://api.flipshop.tech/api/' +( model !== 'fixed' ? 'bid' : 'offers');

  const data = model === 'fixed' ? {amount:amount,asset_id:id} : {asset_id:id,quote:amount};
  console.log(data)
  const response = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: "Bearer " + token,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data)
  });
  const responseData = await response.json();
if(!response.success){
  return responseData
}

  if (!response.ok) {
    throw Error("Sorry! Could not Load the Customer Data");
  }
  return responseData;
}