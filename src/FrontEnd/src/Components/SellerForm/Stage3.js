import Button from "../UI/Button/Button2";
import React, { useState } from "react";
import useInput3 from "../hooks/use-input3";

export const Step3 = ({ data, onPrevious, onNext, predicted_price }) => {

      //managing input states
      const {value: enteredPrice, isValid: enteredPriceIsValid, hasError: priceInputIsInvalid, onChangeHandler: priceChangeHandler, onBlurHandler: onPriceBlurHandler} = useInput3(data.price, (price) => price > 0); 
     //Managing the state of radio buttons 
     const [selectedModel, setSelectedModel] = useState(data.model || '');
     const handleOptionChange = (event) => {setSelectedModel(event.target.value);};
     
  
    const handleNext = () => {
      onNext({price: enteredPrice, model: selectedModel});
    };

    const handlePrevious = () => {
      onPrevious({price: enteredPrice, model: selectedModel});
    };
  
    // calculating classes 
    const priceInputClassNames = !priceInputIsInvalid ? 'form-control': 'invalid form-control'

  return (
    <div>
      <h2 className="text-center">Step 3</h2>
      <br/>
      <div className="row">
      <h5 className="text-center">Estimated Price of your asset is <span className="accepted">PKR {predicted_price}</span>.</h5>
        <div className="col-md-6 mb-4">
          <div className="form-outline">
            <label className="form-label" htmlFor="name">Price in Rupees</label>
            <input type="number" name='name' id="name" className={priceInputClassNames} onChange={priceChangeHandler} onBlur={onPriceBlurHandler} value={enteredPrice}/>
            {priceInputIsInvalid && <p className='error-text'>Price cannot be empty or less than 0.</p>}
          </div>
        </div>
        <div className="d-md-flex justify-content-start align-items-center mb-4 py-2">
        <h6 className="mb-0 me-4">Pricing Model: </h6>

        <div className="form-check form-check-inline mb-0 me-4">
          <label className="form-check-label" htmlFor="auction">Auction</label>
          <input className="form-check-input" type="radio" name="auction" id="auction" value="auction" checked={selectedModel === 'auction'} onChange={handleOptionChange}/>
        </div>

        <div className="form-check form-check-inline mb-0 me-4">
          <label className="form-check-label" htmlFor="fixed">Fixed</label>
          <input className="form-check-input" type="radio" name="fixed" id="fixed" value="fixed" checked={selectedModel === 'fixed'} onChange={handleOptionChange}/>
        </div>

      </div>
      </div>

      <div className="d-flex justify-content-center mb-4 pt-3">
        <Button text="Back" onClick={handlePrevious} type='button'/> <div className="m-2"></div>
        <Button text="Next" disabled={!enteredPriceIsValid  || !selectedModel} onClick={handleNext} type='button' />
      </div>

    </div>
  );
};



