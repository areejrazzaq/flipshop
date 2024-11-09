import { useState, useEffect } from "react";
import Sidebar from "../UI/SideBar.js/SideBar";


const SideBar = () => {

  const [count, setCount] = useState({});
  useEffect(() => {
    async function calling() {
      const response = await fetchData()
      setCount(response)
    }
    calling()
  }, []); 
  // console.log(count)
  const DUMMY = [
    {
      name: "Go Back to Home",
      link: "/",
      icon: "bi-house",
      number: null,
    },
    {
      name: "Dashboard",
      link: "/admin",
      icon: "bi-speedometer2",
      number: null,
    },
    {
      name: "Listings",
      link: "listing",
      icon: "bi-table",
      number: count.assets_new,
    },
    {
      name: "Customers",
      link: "customers",
      icon: "bi-people",
      number: null,
    },
    
    {
      name: "Transaction",
      link: "transaction",
      icon: "bi-arrow-left-right",
      number: count.transactions_new,
    },
    {
      name: "Seller",
      link: "seller",
      icon: "bi-currency-dollar",
      number: null,
    },
    {
      name: "Disputes",
      link: "dispute",
      icon: "bi-radioactive",
      number: null,
    },
    {
      name: "Queries",
      link: "reviews",
      icon: "bi-database-fill-exclamation",
      number: count.messages_not_replied,
    },
    
  ];
  return <Sidebar name={localStorage.getItem("name")} DUMMY={DUMMY} />;
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