import SignUp from "../Components/Signup/SignUp";
import { redirect } from "react-router-dom";
import { useEffect } from "react";

const SignUpPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

    return <SignUp/>
}

export default SignUpPage; 

export async function action({request,params}){
    const data = await request.formData();
    const authData = {
      email: data.get('email'),
      password: data.get('password'),
      password_confirmation: data.get('password_confirmation'),
      name: data.get('name'),
      role: data.get('role'),
    }
    console.log(authData)
    const url = 'https://api.flipshop.tech/api/register';
  
    const response = await fetch(url,{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(authData),
      });
  
      const responseData = await response.json()
      console.log('response')
      console.log(response)
      console.log('response json')
      console.log(responseData.success)
  
      if (!responseData.success) {
        console.log(responseData.errors)
        return responseData.errors;
      }
    
      if (!response.ok) {
        console.log('error')
        throw Error('Something Went Wrong')
      }
  
      const token = responseData.data.token; 
      const role = authData.role; 
      const name = authData.name;
  
      localStorage.setItem('token', token)
      localStorage.setItem('name', name)
      localStorage.setItem('role', role)
      const expiration = new Date(); 
      expiration.setHours(expiration.getHours() + 1)
      localStorage.setItem('expiration', expiration.toISOString())
      //handling the data token
      return redirect('/')
  
  }
