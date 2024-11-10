import Sidebar from "../UI/SideBar.js/SideBar";
import { useState, useEffect } from "react";

const DUMMY = [
  {
    name: 'Back to Home Page', 
    link: '/',
    icon: 'bi-house',
    number: null
  },{
    name: 'Dashboard', 
    link: '/buyer', 
    icon: 'bi-speedometer2', 
    number: null
  }, {
    name: 'Profile', 
    link: 'profile', 
    icon: 'bi-person', 
    number: null
  },{
    name: 'Interest', 
    link: 'interests',
    icon: 'bi-heart-fill',
    number: null
  },{
    name: 'Offers', 
    link: 'offers',
    icon: 'bi-table',
    number: null
  },{
    name: 'Transaction', 
    link: 'transactions',
    icon: 'bi-arrow-left-right',
    number: null
  }
  ,{
    name: 'Payments', 
    link: 'payments',
    icon: 'bi-currency-dollar',
    number: null
  }
]
const SideBar = () => {
  const [count, setCount] = useState({});
  useEffect(() => {
    async function calling() {
      const response = await fetchData()
      setCount(response)
    }
    calling()
  }, []); 

  const DUMMY = [
    {
      name: 'Back to Home Page', 
      link: '/',
      icon: 'bi-house',
      number: null
    },{
      name: 'Dashboard', 
      link: '/buyer', 
      icon: 'bi-speedometer2', 
      number: null
    }, {
      name: 'Profile', 
      link: 'profile', 
      icon: 'bi-person', 
      number: null
    },{
      name: 'Interest', 
      link: 'interests',
      icon: 'bi-heart-fill',
      number: null
    },{
      name: 'Offers', 
      link: 'offers',
      icon: 'bi-table',
      number: null
    },{
      name: 'Transaction', 
      link: 'transactions',
      icon: 'bi-arrow-left-right',
      number: count.transactions_new
    }
    ,{
      name: 'Payments', 
      link: 'payments',
      icon: 'bi-currency-dollar',
      number: count.invoices_new
    },{
      name: "Disputes",
      link: "disputes",
      icon: "bi-radioactive",
      number: null,
    },
  ]
  return (
    <Sidebar name = {localStorage.getItem('name')} DUMMY = {DUMMY} />
  );
};

export default SideBar;


export async function fetchData(){
  const token = localStorage.getItem('token')
  const response = await fetch('https://api.flipshop.tech/api/dashboard', {
    method: 'GET',
    headers: {
      'Authorization': 'Bearer ' + token,
      'Content-Type': 'application/json'
    }
  });
  const responseData = await response.json()
  if (!responseData.success) {
    return responseData.message;
  }
  if (!response.ok) {
    throw Error('Sorry! Could not Load the Customer Data')
  }
  const data = responseData.data
 
    return data;
}