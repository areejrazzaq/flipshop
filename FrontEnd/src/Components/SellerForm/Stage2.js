import Button from "../UI/Button/Button2";
// import React, { useState } from "react";
import useInput from "../hooks/use-input2";
import useInput3 from "../hooks/use-input3";

export const Step2 = ({ data, onPrevious, onNext }) => {
    //managing input states
    const {value: enteredCategoryName, isValid: enteredCategoryNameIsValid, hasError: categoryInputIsInvalid, onChangeHandler: categoryChangeHandler, onBlurHandler: onCategoryBlurHandler} = useInput(data.main_category_name, (name) => name.trim() !== ''); 
    const {value: enteredName, isValid: enteredNameIsValid, hasError: nameInputIsInvalid, onChangeHandler: nameChangeHandler, onBlurHandler: onNameBlurHandler} = useInput(data.store_name, (name) => name.trim() !== ''); 
    const {value: enteredSellerRating, isValid: enteredSellerRatingIsValid, hasError: sellerRatingInputIsInvalid, onChangeHandler: sellerRatingChangeHandler, onBlurHandler: onSellerRatingBlurHandler} = useInput3(data.positive_seller_rating, (sellerRating) => sellerRating >= 0 & sellerRating <= 100); 
    const {value: enteredResponseRate, isValid: enteredResponseRateIsValid, hasError: responseRateInputIsInvalid, onChangeHandler: responseRateChangeHandler, onBlurHandler: onResponseRateBlurHandler} = useInput3(data.response_rate, (ResponseRate) => ResponseRate >= 0 & ResponseRate <= 100); 
    const {value: enteredResponseTime, isValid: enteredResponseTimeIsValid, hasError: responseTimeInputIsInvalid, onChangeHandler: responseTimeChangeHandler, onBlurHandler: onResponseTimeBlurHandler} = useInput3(data.response_time, (responseTime) => responseTime >= 0 & responseTime <=100 ); 
    const {value: enteredShipTime, isValid: enteredShipTimeIsValid, hasError: shipTimeInputIsInvalid, onChangeHandler: shipTimeChangeHandler, onBlurHandler: onShipTimeBlurHandler} = useInput3(data.ship_on_time, (ShipTime) => ShipTime >= 0 & ShipTime <= 100); 
    const {value: enteredMonth, isValid: enteredMonthIsValid, hasError: monthInputIsInvalid, onChangeHandler: monthChangeHandler, onBlurHandler: onMonthBlurHandler} = useInput3(data.months, (month) => month > 0); 
    const {value: enteredProfit, isValid: enteredProfitIsValid, hasError: profitInputIsInvalid, onChangeHandler: profitChangeHandler, onBlurHandler: onProfitBlurHandler} = useInput3(data.avg_profit, (profit) => profit > 0); 
    const {value: enteredProduct, isValid: enteredProductIsValid, hasError: productInputIsInvalid, onChangeHandler: productChangeHandler, onBlurHandler: onProductBlurHandler} = useInput3(data.products_num, (product) => product > 0); 

  
    const handleNext = () => {
      onNext({
        main_category_name: enteredCategoryName, 
        store_name: enteredName,
        positive_seller_rating: enteredSellerRating,
        ship_on_time: enteredShipTime,
        response_time:enteredResponseTime,
        response_rate: enteredResponseRate,
        products_num: enteredProduct,
        avg_profit: enteredProfit,
        months: enteredMonth,
        products_list: {}
      });
    };

    const handlePrevious = () => {
      onPrevious({
        main_category_name: enteredCategoryName, 
        store_name: enteredName,
        positive_seller_rating: enteredSellerRating,
        ship_on_time: enteredShipTime,
        response_time:enteredResponseTime,
        response_rate: enteredResponseRate,
        products_num: enteredProduct,
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
    const responseTimeInputClassNames = !responseRateInputIsInvalid ? 'form-control': 'invalid form-control'
    const responseRateInputClassNames = !responseRateInputIsInvalid ? 'form-control': 'invalid form-control'
    const productsInputClassNames = !productInputIsInvalid ? 'form-control': 'invalid form-control'
    const profitInputClassNames = !profitInputIsInvalid ? 'form-control': 'invalid form-control'
    const monthInputClassNames = !monthInputIsInvalid ? 'form-control': 'invalid form-control'



  return (
    <div>
      <h2 className="text-center">Step 2</h2>
      <h3 className="pt-2">About Store</h3>
      <div className="row">
        <div className="col-md-6 mb-4">
          <div className="form-outline">
            <label className="form-label" htmlFor="name">Store Name</label>
            <input autoComplete="off" type="text" name='name' id="name" className={nameInputClassNames} onChange={nameChangeHandler} onBlur={onNameBlurHandler} value={enteredName}/>
            {nameInputIsInvalid && <p className='error-text'>Name field cannot be empty.</p>}
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="form-outline">
            <label className="form-label" htmlFor="name">Main Category Name</label>
            <input autoComplete="off" type="text" name='name' id="name" className={categoryInputClassNames} onChange={categoryChangeHandler} onBlur={onCategoryBlurHandler} value={enteredCategoryName}/>
            {categoryInputIsInvalid && <p className='error-text'>Category field cannot be empty.</p>}
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6 mb-4">
          <div className="form-outline">
            <label className="form-label" htmlFor="name">Ship on Time</label>
            <input autoComplete="off" type="number" name='name' id="name" className={shipTimeInputClassNames} onChange={shipTimeChangeHandler} onBlur={onShipTimeBlurHandler} value={enteredShipTime}/>
            {shipTimeInputIsInvalid && <p className='error-text'>Enter a Valid Number.</p>}
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="form-outline">
            <label className="form-label" htmlFor="name">Positive Seller Rating</label>
            <input type="number" name='name' id="name" className={sellerRatingInputClassNames} onChange={sellerRatingChangeHandler} onBlur={onSellerRatingBlurHandler} value={enteredSellerRating}/>
            {sellerRatingInputIsInvalid && <p className='error-text'>Enter a Valid Number.</p>}
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6 mb-4">
          <div className="form-outline">
            <label className="form-label" htmlFor="name">Response Rate</label>
            <input type="number" name='name' id="name" className={responseRateInputClassNames} onChange={responseRateChangeHandler} onBlur={onResponseRateBlurHandler} value={enteredResponseRate}/>
            {responseRateInputIsInvalid && <p className='error-text'>Enter a Valid Number.</p>}
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="form-outline">
            <label className="form-label" htmlFor="name">Response Time</label>
            <input type="number" name='name' id="name" className={responseTimeInputClassNames} onChange={responseTimeChangeHandler} onBlur={onResponseTimeBlurHandler} value={enteredResponseTime}/>
            {responseTimeInputIsInvalid && <p className='error-text'>Enter a Valid Number.</p>}
          </div>
        </div>
      </div>

      <h3 className="pt-2">About Products</h3>
      <div className="row">
        <div className="col-md-6 mb-4">
          <div className="form-outline">
            <label className="form-label" htmlFor="name">Number of Products</label>
            <input  type="number" name='name' id="name" className={productsInputClassNames} onChange={productChangeHandler} onBlur={onProductBlurHandler} value={enteredProduct}/>
            {productInputIsInvalid && <p className='error-text'>Enter a Valid Number.</p>}
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="form-outline">
            <label className="form-label" htmlFor="name">Product List</label>
            <input autoComplete="off" type="text" name='name' id="name" className="form-control"/>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6 mb-4">
          <div className="form-outline">
            <label className="form-label" htmlFor="name">Average Profit per Month</label>
            <input autoComplete="off" type="number" name='name' id="name" className={profitInputClassNames} onChange={profitChangeHandler} onBlur={onProfitBlurHandler} value={enteredProfit}/>
            {profitInputIsInvalid && <p className='error-text'>Enter a Valid Number.</p>}
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="form-outline">
            <label className="form-label" htmlFor="name">Average Profit for Number of Months</label>
            <input autoComplete="off" type="number" name='name' id="name" className={monthInputClassNames} onChange={monthChangeHandler} onBlur={onMonthBlurHandler} value={enteredMonth}/>
            {monthInputIsInvalid && <p className='error-text'>Enter a Valid Number.</p>}
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-center mb-4 pt-3">
        <Button text="Back" onClick={handlePrevious} type='button'/> <div className="m-2"></div>
        <Button text="Next" disabled={!enteredNameIsValid || !enteredCategoryNameIsValid || !enteredMonthIsValid || !enteredProductIsValid || !enteredProfitIsValid || !enteredResponseRateIsValid || !enteredShipTimeIsValid || !enteredResponseTimeIsValid || !enteredSellerRatingIsValid} onClick={handleNext} type='button' />
      </div>

    </div>
  );
};



