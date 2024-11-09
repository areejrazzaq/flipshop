import useInput from "../hooks/use-input";
import '../../index.css'
import { useState } from "react";
// import useHttp from "../hooks/use-http";
import { useActionData, useNavigation, useSubmit } from "react-router-dom";


const SignUp = props => {
  const actionData = useActionData();
  const navigation =  useNavigation();
  const submit = useSubmit();

  // const { isLoading, error, sendRequest, data: response } = useHttp();

  //Managing the state of radio buttons 
  const [selectedRole, setSelectedRole] = useState("");
  const handleOptionChange = (event) => {setSelectedRole(event.target.value);};

  // Managing policies 
  const [policy, setPolicy] = useState(false)

  // managing the state of input elements 
  const {value: enteredName, isValid: enteredNameIsValid, hasError: nameInputIsInvalid, onChangeHandler: nameChangeHandler, onBlurHandler: onNameBlurHandler, reset: nameReset} = useInput((name) => name.trim() !== ''); 
  const {value: enteredEmail, isValid: enteredEmailIsValid, hasError: emailInputIsInvalid, onChangeHandler: emailChangeHandler, onBlurHandler: onEmailBlurHandler, reset: emailReset} = useInput((email) => email.includes('@')); 
  const {value: enteredPassword, isValid: enteredPasswordIsValid, hasError: passwordInputIsInvalid, onChangeHandler: passwordChangeHandler, onBlurHandler: onpasswordBlurHandler, reset: passwordReset} = useInput((pass) => pass.trim().length >= 6); 
  const {value: confirmPassword, isValid: confirmPasswordIsValid, hasError: confirmPasswordInputIsInvalid, onChangeHandler: confirmPasswordChangeHandler, onBlurHandler: onconfirmPasswordBlurHandler, reset: confirmPasswordReset} = useInput((pass) => pass===enteredPassword); 


  let formIsValid = false; 

  if(enteredNameIsValid && enteredEmailIsValid && enteredPasswordIsValid && confirmPasswordIsValid && selectedRole && policy){
    formIsValid = true; 
  }



  const formSubmitHandler = (event) => {
      event.preventDefault(); 

      if(!formIsValid){
        return; 
      }

      submit({email: enteredEmail, name: enteredName, password: enteredPassword, role: selectedRole, password_confirmation: confirmPassword},{method:'POST'})

      // sendRequest({
      //   url: 'https://api.flipshop.tech/api/register',
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: {email: enteredEmail, name: enteredName, password: enteredPassword, role: selectedRole, password_confirmation: confirmPassword},
      // },);

      // console.log(response);
      // const { email, token } = response; 
      // console.log(email)
      // console.log(token)

      nameReset();
      emailReset();
      passwordReset();
      confirmPasswordReset();
      setSelectedRole('')
  }


  const nameInputClassNames = !nameInputIsInvalid ? 'form-control form-control-lg': 'invalid form-control form-control-lg'
  const emailInputClassName = !emailInputIsInvalid ? 'form-control form-control-lg': 'invalid form-control form-control-lg'
  const passwordInputClassNames = !passwordInputIsInvalid ? 'form-control form-control-lg': 'invalid form-control form-control-lg'
  const confirmPasswordInputClassNames = !confirmPasswordInputIsInvalid ? 'form-control form-control-lg': 'invalid form-control form-control-lg'



  const image = 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img4.webp'
    return(
    <section className="h-100">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-50">
          <div className="col">
            <div className="card card-registration my-4">
              <div className="row g-0">
                <div className="col-xl-6 d-none d-xl-block">
                  <img src={image}  alt = '' className="img-fluid" />
                </div>
                
                <div className="col-xl-6">
                <form onSubmit={formSubmitHandler}>
                  <div className="card-body p-md-5 text-black">
                    <h3 className="mb-5 text-uppercase">Sign Up</h3>

                    <div className="form-outline mb-4">
                      <label className="form-label" htmlFor="form3Example8">Name</label>
                      <input type="text" name='name' id="Name" className={nameInputClassNames} onChange={nameChangeHandler} onBlur={onNameBlurHandler} value={enteredName}/>
                      {nameInputIsInvalid && <p className='error-text'>Name is invalid</p>}
                    </div>

                    <div className="form-outline mb-4">
                      <label className="form-label" htmlFor="form3Example97">Email ID</label>
                      <input type="text" name='email' id="Email" className={emailInputClassName} onChange={emailChangeHandler} onBlur={onEmailBlurHandler} value={enteredEmail}/>
                      {emailInputIsInvalid && <p className='error-text'>Email is invalid</p>}
                    </div>

                    <div className="form-outline mb-4">
                      <label className="form-label" htmlFor="form3Example90">Password</label>
                        <input type="password" name='password' id="Password" className={passwordInputClassNames} onChange={passwordChangeHandler} onBlur={onpasswordBlurHandler} value={enteredPassword}/>
                        {passwordInputIsInvalid && <p className='error-text'>Password should be have at least 6 characters.</p>}
                    </div>

                    <div className="form-outline mb-4">
                      <label className="form-label" htmlFor="form3Example90">Confirm Password</label>
                        <input type="password" name='confirmation' id="Confirmation" className={confirmPasswordInputClassNames} onChange={confirmPasswordChangeHandler} onBlur={onconfirmPasswordBlurHandler} value={confirmPassword} disabled={passwordInputIsInvalid}/>
                        {confirmPasswordInputIsInvalid && <p className='error-text'>Password does not match.</p>}
                    </div>


                    <div className="d-md-flex justify-content-start align-items-center mb-4 py-2">

                      <h6 className="mb-0 me-4">Role: </h6>

                      <div className="form-check form-check-inline mb-0 me-4">
                          <label className="form-check-label" htmlFor="Buyer">Buyer</label>
                          <input className="form-check-input" type="radio" name="Buyer" id="Buyer" value="buyer" checked={selectedRole === 'buyer'} onChange={handleOptionChange}/>
                      </div>

                      <div className="form-check form-check-inline mb-0 me-4">
                        <label className="form-check-label" htmlFor="Seller">Seller</label>
                        <input className="form-check-input" type="radio" name="Seller" id="Seller" value="seller" checked={selectedRole === 'seller'} onChange={handleOptionChange}/>
                      </div>


                    </div>

                    <div className="form-check d-flex justify-content-center mb-4">
                        <input className="form-check-input me-2" type="checkbox" id="conditions" name='conditions' checked={policy} onChange={e => {setPolicy(e.target.checked)}}/>
                        <label className="form-check-label" htmlFor="conditions">
                          Agree with our terms and conditions.
                        </label>
                    </div>

                    {actionData && actionData.error && <p className='error-text d-flex justify-content-center'>{actionData.error}</p>}
                    {actionData && actionData.email && <p className='error-text d-flex justify-content-center'>{actionData.email}</p>}
                    <div className="d-flex justify-content-center justify-content-lg-end"><button className = ' button btn' type='submit' disabled={!formIsValid || navigation.state === 'submitting'}>Submit</button></div>
                    {/* {error && <p>{error}</p>} */}
                  </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    )
}

export default SignUp; 