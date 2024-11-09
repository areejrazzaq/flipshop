import AvailableListing from "../Components/Listing/AvailableListing";
import Hero from "../Components/UI/Hero/Hero";
import "../index.css";
import { useEffect } from "react";

const AssetPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Hero title="Assets" 
      description="Cras fermentum odio eu feugiat lide par naso tierra. Justo eget nada terra videa magna derita valies darta donna mare fermentum iaculis eu non diam phasellus." 
      page="Assets" />
      <section id="blog" className="blog assets">
        <AvailableListing />
      </section>
    </>
  );
};

export default AssetPage;


export async function loader(){
    const response = await fetch('https://api.flipshop.tech/api/listings', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const responseData = await response.json()
    console.log('response data')
    console.log(responseData)  
    if (!responseData.success) {
      return responseData.message;
    }
  
    if (!response.ok) {
      throw Error('Sorry! Could not Load the Customer Data')
    }

    const data = responseData.data
    console.log(data)
    return data;
  }
