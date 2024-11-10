import Button from "../UI/Button/Button2";
// import React, { useState } from "react";
import useInput from "../hooks/use-input2";
import useInput3 from "../hooks/use-input3";

export const BlogStep2 = ({ data, onPrevious, onNext }) => {
    //managing input states
    const {value: enteredCategoryName, isValid: enteredCategoryNameIsValid, hasError: categoryInputIsInvalid, onChangeHandler: categoryChangeHandler, onBlurHandler: onCategoryBlurHandler} = useInput(data.main_category_name, (name) => name.trim() !== ''); 
    const {value: enteredName, isValid: enteredNameIsValid, hasError: nameInputIsInvalid, onChangeHandler: nameChangeHandler, onBlurHandler: onNameBlurHandler} = useInput(data.store_name, (name) => name.trim() !== ''); 
    const {value: enteredSellerRating, isValid: enteredSellerRatingIsValid, hasError: sellerRatingInputIsInvalid, onChangeHandler: sellerRatingChangeHandler, onBlurHandler: onSellerRatingBlurHandler} = useInput(data.positive_seller_rating, (sellerRating) => sellerRating.trim() !== ''); 
    const {value: enteredShipTime, isValid: enteredShipTimeIsValid, hasError: shipTimeInputIsInvalid, onChangeHandler: shipTimeChangeHandler, onBlurHandler: onShipTimeBlurHandler} = useInput(data.ship_on_time, (ShipTime) => ShipTime.trim() !== ''); 
    const {value: enteredMonth, isValid: enteredMonthIsValid, hasError: monthInputIsInvalid, onChangeHandler: monthChangeHandler, onBlurHandler: onMonthBlurHandler} = useInput3(data.months, (month) => month > 0); 
    const {value: enteredProfit, isValid: enteredProfitIsValid, hasError: profitInputIsInvalid, onChangeHandler: profitChangeHandler, onBlurHandler: onProfitBlurHandler} = useInput3(data.avg_profit, (profit) => profit > 0); 

  
    const handleNext = () => {
      onNext({
        main_category_name: enteredCategoryName, 
        store_name: enteredName,
        positive_seller_rating: enteredSellerRating,
        ship_on_time: enteredShipTime,
        avg_profit: enteredProfit,
        months: enteredMonth,
      });
    };

    const handlePrevious = () => {
      onPrevious({
        store_name: enteredName,
        main_category_name: enteredCategoryName, 
        positive_seller_rating: enteredSellerRating,
        ship_on_time: enteredShipTime,
        avg_profit: enteredProfit,
        months: enteredMonth,
        products_list: enteredName
      });
    };
  
    // calculating classes 
    const categoryInputClassNames = !categoryInputIsInvalid ? 'form-control': 'invalid form-control'
    const nameInputClassNames = !nameInputIsInvalid ? 'form-control': 'invalid form-control'
    const shipTimeInputClassNames = !shipTimeInputIsInvalid ? 'form-control': 'invalid form-control'
    const sellerRatingInputClassNames = !sellerRatingInputIsInvalid ? 'form-control': 'invalid form-control'
    const profitInputClassNames = !profitInputIsInvalid ? 'form-control': 'invalid form-control'
    const monthInputClassNames = !monthInputIsInvalid ? 'form-control': 'invalid form-control'



  return (
    <div>
      <h2 className="text-center">Step 2</h2>
      <h3 className="pt-2">About Store</h3>
      <div className="row">
        <div className="col-md-6 mb-4">
          <div className="form-outline">
            <label className="form-label" htmlFor="name">Blog Name</label>
            <input autoComplete="off" type="text" name='name' id="name" className={nameInputClassNames} onChange={nameChangeHandler} onBlur={onNameBlurHandler} value={enteredName}/>
            {nameInputIsInvalid && <p className='error-text'>Name field cannot be empty.</p>}
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="form-outline">
            <label className="form-label" htmlFor="name">Industry</label>
            {/* <input type="text" name='name' id="name" className={categoryInputClassNames} onChange={categoryChangeHandler} onBlur={onCategoryBlurHandler} value={enteredCategoryName}/> */}
            <select name="name" id="name" className={categoryInputClassNames} onChange={categoryChangeHandler} onBlur={onCategoryBlurHandler} value={enteredCategoryName}>
              <option value="">Select an option</option>
              <option value="Home and Garden">Home and Garden</option>
              <option value="Business">Business</option>
              <option value="Health and Beauty">Health and Beauty</option>
              <option value="Internet">Internet</option>
              <option value="Entertainment">Entertainment</option>
              <option value="General Knowledge">General Knowledge</option>
              <option value="Electronics">Electronics</option>
              <option value="Sports and Outdoor">Sports and Outdoor</option>
              <option value="Hobbies and Games">Hobbies and Games</option>
              <option value="Lifestyle">Lifestyle</option>
              <option value="Design and Style">Design and Style</option>
              <option value="Food and Drink">Food and Drink</option>
              <option value="Travel">Travel</option>
              <option value="Education">Education</option>
              <option value="Automotive">Automotive</option>
            </select>
            {categoryInputIsInvalid && <p className='error-text'>Industry field cannot be empty.</p>}
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6 mb-4">
          <div className="form-outline">
            <label className="form-label" htmlFor="name">Net Profit Per Month</label>
            <input autoComplete="off" type="text" name='name' id="name" className={profitInputClassNames} onChange={profitChangeHandler} onBlur={onProfitBlurHandler} value={enteredProfit}/>
            {profitInputIsInvalid && <p className='error-text'>Enter a Valid Number.</p>}
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="form-outline">
            <label className="form-label" htmlFor="name">Site Age in Years</label>
            <input autoComplete="off" type="text" name='name' id="name" className={monthInputClassNames} onChange={monthChangeHandler} onBlur={onMonthBlurHandler} value={enteredMonth}/>
            {monthInputIsInvalid && <p className='error-text'>Enter a Valid Number.</p>}
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6 mb-4">
          <div className="form-outline">
            <label className="form-label" htmlFor="name">Monetization Method</label>
            <select type="text" name='name' id="name" className={shipTimeInputClassNames} onChange={shipTimeChangeHandler} onBlur={onShipTimeBlurHandler} value={enteredShipTime}>
              <option value="">Select an option</option>
              <option value="ads">Ads</option>
              <option value="affiliate_sales">Affiliate Sales</option>
              <option value="others">Others</option>
            </select>
            {shipTimeInputIsInvalid && <p className='error-text'>Choose a valid method.</p>}
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="form-outline">
            <label className="form-label" htmlFor="name">Type</label>
            <select type="text" name='name' id="name" className={sellerRatingInputClassNames} onChange={sellerRatingChangeHandler} onBlur={onSellerRatingBlurHandler} value={enteredSellerRating}>
              <option value="">Select an option</option>
              <option value="content">Content</option>
              <option value="others">Others</option>
            </select>
            {sellerRatingInputIsInvalid && <p className='error-text'>Choose a valid type.</p>}
          </div>
        </div>
      </div>



      

      <div className="d-flex justify-content-center mb-4 pt-3">
        <Button text="Back" onClick={handlePrevious} type='button'/> <div className="m-2"></div>
        <Button text="Next" disabled={!enteredNameIsValid || !enteredCategoryNameIsValid || !enteredMonthIsValid  || !enteredProfitIsValid || !enteredShipTimeIsValid || !enteredSellerRatingIsValid} onClick={handleNext} type='button' />
      </div>

    </div>
  );
};



