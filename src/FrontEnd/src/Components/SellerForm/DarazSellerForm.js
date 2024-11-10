import { Step1 } from "./Stage1";
import { Step2 } from "./Stage2";
import { Step3 } from "./Stage3";
import { Step4 } from "./Stage4";
import { Submit } from "./submit";
import { useState } from "react";
import { useSubmit } from "react-router-dom";
import { BlogStep2 } from "./BlogStage2";

const steps = [
  { label: "Step 1", component: <Step1 /> },
  { label: "Step 2", component: <Step2 /> },
  { label: "Step 3", component: <Step3 /> },
  { label: "Step 4", component: <Step2 /> },
];

const SellerFrom = () => {
  const submit = useSubmit(); 
  const [predictedPrice, setPredictedPrice] = useState()

  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    name: null, 
    description: null, 
    main_category_name: null, 
    store_name: null,
    positive_seller_rating: null,
    ship_on_time: null,
    response_time:0,
    response_rate:0,
    products_num:0,
    avg_profit:0,
    months: 0,
    products_list: '',
    type: null,
    price: 0, 
    model: null, 
    month_first: null, 
    month_second: null, 
    month_third: null, 
  });

  const handleNext = async (data) => {
    setFormData(prevFormData => {return { ...prevFormData, ...data }});
    if(step === 1) {
      if(formData.type === 'daraz'){
        setPredictedPrice(data.avg_profit * data.months);
        console.log(predictedPrice)
      }
      if(formData.type === 'blog'){
        try{
          const prediction_data = {
            "Industry" : formData.main_category_name,
            "Age" : formData.months,
            "Profit" : formData.avg_profit
          }
          const response = await getPrice(prediction_data)
          // setPredictedPrice(Math.round(response));
          if(response) {
            setPredictedPrice(Math.round(response));
          }else{
            setPredictedPrice(null)
          }
        }catch(e){
          console.log(e)
        }
      }
    }
    setStep(prev => prev + 1);
  };

  const handlePrevious = (data) => {
    setFormData(prevFormData => {return { ...prevFormData, ...data }});
    setStep(prev => prev-1);
  };

  const handleSubmit = async (event, data) => {
    setFormData(prevFormData => {return { ...prevFormData, ...data }});
    setStep(prev => prev + 1);
    // submit data to backend
    submit(formData, {method: 'POST'})
  };

  const progress = ((step + 1) / steps.length) * 100;
  console.log(progress)

  return (
    <>
      <h5 className="error-text text-center mb-3">Only verified Sellers can create Listing.</h5>
        <div className="mb-3">
          <div className="row gx-lg-5 align-items-center justify-content-center">
            {/* form text */}
            <div className="col-md-8 mb-5 pt-2 mb-lg-0 col-sm-12">
              <div className="card">
                <div className="card-body py-5">
                  {/* top text */}
                  <div className="text-center">
                    <h2 className="display-8 fw-bold ls-tight"> CREATE A NEW LISTING </h2>
                    <p>Fill all form field to go to next step</p>
                  </div>
                  <form id="msform">
                    <ul id="progressbar" className="text-center">
                      <li className='active' id="basic"><strong className="d-none d-lg-block">Basic</strong></li>
                      <li id="specifications" className={step > 0  ? 'active' : ''}><strong className="d-none d-lg-block">Specifications</strong></li>
                      <li id="profits" className={step > 1 ? 'active' : ''}><strong className="d-none d-lg-block">Profits</strong></li>
                      <li id="price" className={step > 2 ? 'active' : ''}><strong className="d-none d-lg-block">Price</strong></li>
                    </ul>
                    <div className="progress">
                      <div
                        className="progress-bar progress-bar-striped progress-bar-animated"
                        role="progressbar"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        aria-valuenow={progress}
                      style={{ width: `${progress}%` }}
                      ></div>
                    </div>
                    <br />

                    {step === 0 && <Step1 onNext={handleNext} data = {formData}/>}
                    {step === 1 && formData.type === 'daraz' && (<Step2 data = {formData} onPrevious={handlePrevious} onNext={handleNext} /> )}
                    {step === 1 && formData.type === 'blog' && (<BlogStep2 data = {formData} onPrevious={handlePrevious} onNext={handleNext} /> )}
                    {step === 2 && (<Step3 data = {formData} onPrevious={handlePrevious} onNext={handleNext} predicted_price={predictedPrice} />  )}
                    {step === 3 && (<Step4 data = {formData} onPrevious={handlePrevious} onNext={handleSubmit} onSubmit = {handleSubmit} predicted_price={predictedPrice}/> )}
                    {step === 4 && (<Submit data = {formData} onPrevious={handlePrevious}/> )}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

    </>
  );
};

export default SellerFrom;

const getPrice = async (data) => {
  console.log('getting price')
  const url = await getUrl()
  console.log(url)
  if(url.success){
  const response = await fetch(url.data.url ,{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
      },
      body: JSON.stringify(data), 
  })

  const responseData = await response.json();
  console.log('response')
  console.log(responseData)
  return responseData;
}

  if(!url.success){
    return null
  }

}

const getUrl = async () => {
  const token = localStorage.getItem('token')
  const response = await fetch('https://api.flipshop.tech/api/ngrok_url' ,{
    headers: {
      'Authorization': 'Bearer ' + token,
      'Content-Type': 'application/json'
    }
  })

  const responseData = await response.json();
  console.log('getting url')
  console.log(responseData)

  if(!responseData.success){
    return responseData
  }

  if(!response.ok){
    // throw Error('Sorry! Could not Load the Data')
    return {success: false}
  }

  return responseData;
}
