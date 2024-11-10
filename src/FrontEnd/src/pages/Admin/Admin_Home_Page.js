import Home from "../../Components/Admin/Home";

export default function AdminPage(){
    return <Home/>
}

export async function loader(){
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
  