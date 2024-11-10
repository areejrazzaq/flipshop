import React, { useState } from "react";
import Button from "../UI/Button/Button2";
import useInput from "../hooks/use-input2";

export const Step1 = ({ data, onNext }) => {
    //managing input states
  const {value: enteredName, isValid: enteredNameIsValid, hasError: nameInputIsInvalid, onChangeHandler: nameChangeHandler, onBlurHandler: onNameBlurHandler,} = useInput(data.name, (name) => name.trim() !== ''); 
  const {value: enteredDescription, isValid: enteredDescriptionIsValid, hasError: descriptionInputIsInvalid, onChangeHandler: descriptionChangeHandler, onBlurHandler: onDescriptionBlurHandler, } = useInput(data.description, (description) => description.trim().length >= 50); 
   //Managing the state of radio buttons 
   const [selectedType, setSelectedType] = useState(data.type);
   const handleOptionChange = (event) => {setSelectedType(event.target.value);};
   

  const handleNext = () => {
    onNext({name: enteredName, description: enteredDescription, type: selectedType});
  };

  // calculating classes 
  const nameInputClassNames = !nameInputIsInvalid ? 'form-control': 'invalid form-control'
  const descriptionInputClassNames = !descriptionInputIsInvalid ? 'form-control': 'invalid form-control'

  return (
    <div>
      <h2 className="text-center">Step 1</h2>
      <div className="form-outline mb-4">
        <label className="form-label" htmlFor="name">Asset Name</label>
        <input autoComplete="off" type="text" name='name' id="name" className={nameInputClassNames} onChange={nameChangeHandler} onBlur={onNameBlurHandler} value={enteredName}/>
        {nameInputIsInvalid && <p className='error-text'>Name field cannot be empty.</p>}
      </div>

      <div className="d-md-flex justify-content-start align-items-center mb-4 py-2">
        <h6 className="mb-0 me-4">Asset Type: </h6>

        <div className="form-check form-check-inline mb-0 me-4">
          <label className="form-check-label" htmlFor="daraz">Daraz Seller Account</label>
          <input className="form-check-input" type="radio" name="daraz" id="daraz" value="daraz" checked={selectedType === 'daraz'} onChange={handleOptionChange}/>
        </div>

        <div className="form-check form-check-inline mb-0 me-4">
          <label className="form-check-label" htmlFor="blog">Blog</label>
          <input className="form-check-input" type="radio" name="blog" id="blog" value="blog" checked={selectedType === 'blog'} onChange={handleOptionChange}/>
        </div>

      </div>

      <div className="form-outline mb-4">
        <label className="form-label" htmlFor="form3Example3">
          Description
        </label>
        <textarea type="text" id="description" name = 'description' 
        className={descriptionInputClassNames} 
        rows="7" onChange={descriptionChangeHandler} 
        onBlur={onDescriptionBlurHandler} 
        value={enteredDescription}
        minLength={5}
        maxLength={500}
        />
        {descriptionInputIsInvalid && <p className='error-text'>Description Should be at least 50 characters long.</p>}
      </div>

      <div className="d-flex justify-content-center mb-4 pt-3">
        <Button text="Next" disabled={!enteredDescriptionIsValid || !enteredNameIsValid || !selectedType} onClick={handleNext} type='button' />
      </div>

      
    </div>
  );
};
