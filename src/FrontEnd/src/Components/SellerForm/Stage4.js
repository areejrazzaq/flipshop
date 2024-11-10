import Button from "../UI/Button/Button2";
import React, { useState } from "react";
// import useInput from "../hooks/use-input2";

export const Step4 = ({ data, onPrevious, onNext, onSubmit }) => {
    const [file1, setFile1] = useState(null); 
    const [file2, setFile2] = useState(null); 
    const [file3, setFile3] = useState(null); 

    const handleChange = (event) => {
      console.log(event.target.files[0])
      setFile1(event.target.files[0]);
    };

    const handleChange1 = (event) => {
        console.log(event.target.files)
        setFile1(event.target.files[0]);
      };

      const handleChange2 = (event) => {
        setFile2(event.target.files[0]);
      };

      const handleChange3 = (event) => {
        setFile3(event.target.files[0]);
      };

    

    const handleSubmit = async () => {
      console.log(file1)
      console.log(file2)
      console.log(file3)
      return await onSubmit({month_first: file1, month_second: file2, month_third: file3, });
    };

    const handlePrevious = () => {
        onPrevious({month_first: file1, month_second: file2, month_third: file3, });
    };
    
  return (
    <div>
      <h2 className="text-center">Step 4</h2><br/>
      <div className="row">

        <div className="col-md-6 mb-4">
          <div className="form-outline">
            <label className="form-label" htmlFor="image">Upload Picture For Asset</label>
            <input  className="form-control" type="file" accept="image/*" name='image' id="image" onChange={e => handleChange(e)}/>
          </div>
        </div>

        {data.type==='daraz' && <div className="col-md-6 mb-4">
          <div className="form-outline form-file">
            <label className="form-label" htmlFor="file1">First Month Profit Data</label>
            <input type="file" className="form-control" name='file1' id="file1" onChange={handleChange1} accept=".xlsx, .xls"/>
          </div>
        </div>}

      </div>

      {data.type==='daraz' && <div className="row">

        <div className="col-md-6 mb-4">
          <div className="form-outline">
            <label className="form-label" htmlFor="file2">Second Month Profit Data</label>
            <input type="file" name='file2' id="file2" className="form-control" onChange={handleChange2} accept=".xlsx, .xls"/>
          </div>
        </div>

        <div className="col-md-6 mb-4">
          <div className="form-outline">
            <label className="form-label" htmlFor="file3">Third Month Profit Data</label>
            <input type="file" className="form-control" name='file3' id="file3" onChange={handleChange3} accept=".xlsx, .xls"/>
          </div>
        </div>
      </div>}

      <div className="d-flex justify-content-center mb-4 pt-3">
      <Button text="Back" onClick={handlePrevious} type='button'/> <div className="m-2"></div>
      <Button text="Submit"  onClick={handleSubmit} type='button' />
      </div>

    </div>
  );
};



