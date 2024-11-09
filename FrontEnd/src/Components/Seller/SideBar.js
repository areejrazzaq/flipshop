import Sidebar from "../UI/SideBar.js/SideBar";
import { useState, useEffect } from "react";

const SideBar = () => {
  const [count, setCount] = useState({});
  useEffect(() => {
    async function calling() {
      const response = await fetchData()
      setCount(response)
    }
    calling()
  }, []); 

  const DUMMY = [{
    name: 'Go Back to Home', 
    link: '/',
    icon: 'bi-house',
    number: null
  },{
    name: 'Dashboard', 
    link: '/seller', 
    icon: 'bi-speedometer2', 
    number: null
  },{
    name: 'Profile', 
    link: 'profile',
    icon: 'bi-people',
    number: null
    },{
    name: 'Create New asset', 
    link: 'new',
    icon: 'bi-table',
    number: null
    }, {
  name: 'Listings', 
  link: 'listing',
  icon: 'bi-bar-chart-steps',
  number: null
  },{
    name: 'Transactions', 
    link: 'transaction',
    icon: 'bi-people',
    number: count.transactions_new,
  },{
    name: 'Payments', 
    link: 'payments',
    icon: 'bi-currency-dollar',
    number: count.invoices_new
  },{
    name: 'Disputes', 
    link: 'disputes',
    icon: 'bi-radioactive',
    number: null
  },{
    name: 'Under Review', 
    link: 'overdue',
    icon: 'bi-database-fill-exclamation',
    number: null
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