// // import React, { useState } from "react";
// import useInput from "../hooks/use-input2";
// import Button from "../UI/Button/Button2";
import { useActionData, useNavigation } from "react-router-dom";

export const Submit = ({ data, onPrevious}) => {
  // managing submitting state
  const navigation =  useNavigation();
  const isSubmitting = navigation.state === 'submitting'; 
  // getting action reply
  const response = useActionData();
  console.log(response)
  return (
    <div className="text-center">
    {/* Render the circle or tick based on the isSubmitting variable */}
    {isSubmitting ? (
        <div className="spinner-border text-secondary" role="status">
          <span className="visually-hidden">Submitting...</span>
        </div>
      ) : (
        response.success ? 
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" className="bi bi-check-circle" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M8 0a8 8 0 1 0 8 8A8 8 0 0 0 8 0zm3.28 5.53L7.15 9.47a.5.5 0 0 1-.7 0L4.72 7.3a.5.5 0 0 1 .7-.7l1.26 1.27 3.12-3.1a.5.5 0 0 1 .7.7z"/>
        </svg> : <p className="error-test">Sorry</p>
      )}
      {isSubmitting ? <div><br/>Submitting...</div> : <div><br/>{response.message}</div>}
      {/* <Button text="Back" onClick={onPrevious} type='button'/>  */}
    </div>
  );
};



