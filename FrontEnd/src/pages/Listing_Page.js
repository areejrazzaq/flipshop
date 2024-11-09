import Listing from "../Components/ListingDescription/Listing";
import '../index.css'
import { useEffect } from "react";

const ListingPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

    return <>
    <Listing/>
    </>
}

export default ListingPage; 

export async function ListingLoader({request, params}){
    const id = params.listId; 
    const response = await fetch('https://api.flipshop.tech/api/listings/' + id,{
        method:'GET'
    });

    const responseData = await response.json()
    // console.log('response')
    // console.log(response)
    // console.log('response json')
    // console.log(responseData.success)

    if (!responseData.success) {
      console.log(responseData.errors)
      return responseData.message;
    }
  
    if (!response.ok) {
      throw new Error('Something Went Wrong')
    }

    return responseData.data[0]

}

