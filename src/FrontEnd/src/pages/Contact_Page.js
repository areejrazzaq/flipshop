import React from 'react'
import Contact from '../Components/Contact/Contact'
import Hero from '../Components/UI/Hero/Hero'
// import { redirect } from 'react-router-dom'
import { useEffect } from 'react';

function ContactPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
   <>
      <Hero
        title="Contact"
        description="Send us email and we will reach back to you as soon as possible"
        page="Contact"
      />
      <Contact/>
      </>
   
  )
}

export default ContactPage

export async function action({request, params}) {
  console.log('action function called')
  const inputData = await request.formData(); 
  const eventData = {
    name:inputData.get('name'),
    email:inputData.get('email'), 
    subject: inputData.get('subject'), 
    message: inputData.get('message')
  }
  console.log(eventData)
  const response = await fetch('https://api.flipshop.tech/api/contact_us', {
    method: 'POST', 
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(eventData),
  });
  
  const responseData = await response.json();
  console.log("response");
  console.log(response);

  if (!responseData.success) {
    console.log(responseData.error)
    return responseData.error;
  }

  if (!response.ok) {
    throw new Error('Something Went wrong');
}

  console.log(responseData.message)
  return responseData.message;
}