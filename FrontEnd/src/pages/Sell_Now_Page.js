import SellerFrom from "../Components/SellerForm/DarazSellerForm";
import '../Components/SellerForm/stage.css'
import Hero from "../Components/UI/Hero/Hero";
import { useEffect } from "react";

const SellNowPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

    return <>
      <Hero
        title="Sell Your Asset"
        description="We provide you the easiest way to create the listing and sell your asset. Fill out the form and start selling you business"
        page="Sell Asset"
      />
      <div className="px-4 py-5 px-md-5 text-center text-lg-start">
      <div className="container-fluid">
      
      <SellerFrom/>
      </div>
      </div>
    </>
}

export default SellNowPage; 


export async function action({request,params}){

    const token = localStorage.getItem('token')
    const data = await request.formData();
    let enteredData;

    if(data.get('type') === 'daraz'){
     enteredData = {
        title: data.get('name'), 
        description: data.get('description'), 
        asset_type: data.get('type'),
        main_category_name: data.get('main_category_name'),
        store_name: data.get('store_name'),
        positive_seller_rating: data.get('positive_seller_rating'),
        ship_on_time: data.get('ship_on_time'),
        response_time:data.get('response_time'),
        response_rate:data.get('response_rate'),
        products_num:data.get('products_num'),
        avg_profit:data.get('avg_profit'),
        months: data.get('months'),
        products_list: data.get('products_list'),
        price: data.get('price'), 
        model_name: data.get('model'),
        month_first: data.get('month_first'),
        month_second: data.get('month_second'),
        month_third: data.get('month_third'), 
      }
    }else if(data.get('type') === 'blog'){
      enteredData = {

        title: data.get('name'), 
        description: data.get('description'), 
        asset_type: data.get('type'),

        price: data.get('price'), 
        model_name: data.get('model'),

        blog_name: data.get('store_name'),
        //hh
        industry: data.get('main_category_name'),
        type: data.get('positive_seller_rating'),
        monitization: data.get('ship_on_time'),
        site_age: data.get('months'),
        net_profit_per_month: data.get('avg_profit'),

        main_category_name: data.get('main_category_name'),
        store_name: data.get('store_name'),
        positive_seller_rating: data.get('positive_seller_rating'),
        ship_on_time: data.get('ship_on_time'),
        response_time:data.get('response_time'),
        response_rate:data.get('response_rate'),
        products_num:data.get('products_num'),
        avg_profit:data.get('avg_profit'),
        months: data.get('months'),
        products_list: data.get('products_list'),
        month_first: data.get('month_first'),
        month_second: data.get('month_second'),
        month_third: data.get('month_third'), 
      }
    }

    console.log(enteredData)
    const url = 'https://api.flipshop.tech/api/asset';
  
    const response = await fetch(url,{
        method: 'POST',
        headers: {
        'Authorization': 'Bearer ' + token,
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(enteredData),
      });
  
      const responseData = await response.json()
      console.log('action response')
      console.log(responseData)
      console.log('response success')
      console.log(responseData.success)
  
      if (!responseData.success) {
        console.log(responseData.errors)
        return responseData;
      }
    
      if (!response.ok) {
        console.log('error')
        throw Error('Something Went Wrong')
      }

      return responseData  
  }
