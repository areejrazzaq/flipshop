// import React, { useState, useEffect, useCallback } from 'react';
import { useState } from 'react';
import DarazListItem from './DarazListItem';
import ListItem from './ListItem'
import { useLoaderData } from 'react-router-dom';

const AvailableListing = (props) => {
    const data = useLoaderData();
    // console.log(data)
    const [option, setOption] = useState('');

    let filterData;
    if(option === 'daraz'){
        filterData = data.filter(item => item.asset_type === 'daraz')
    } else if(option === 'blog'){
        filterData = data.filter(item => item.asset_type === 'blog')
    }else if(option === 'fixed'){
        filterData = data.filter(item => item.price_model_type === 'fixed')
    }else if(option === 'auction'){
        filterData = data.filter(item => item.price_model_type === 'auction')
    }else if(option === 'new'){
        filterData = data.filter(item => item.status === 'new')
    }else{
        filterData = data;
    }

    if(props.isHome){
        filterData=filterData.slice(0, 10)
    }

    return(
    <div className="container" data-aos="fade-up">

<div className="social pt-3">
  <div className="filter-tabs d-flex flex-wrap">
    <button className={`btn post-author ${option === '' ? 'active' : ''}`} onClick={() => setOption('')}>All</button>
    <button className={`btn post-author ${option === 'daraz' ? 'active' : ''}`} onClick={() => setOption('daraz')}>Daraz</button>
    <button className={`btn post-author ${option === 'blog' ? 'active' : ''}`} onClick={() => setOption('blog')}>Blog</button>
    <button className={`btn post-author ${option === 'new' ? 'active' : ''}`} onClick={() => setOption('new')}>New</button>
    <button className={`btn post-author ${option === 'fixed' ? 'active' : ''}`} onClick={() => setOption('fixed')}>Fixed</button>
    <button className={`btn post-author ${option === 'auction' ? 'active' : ''}`} onClick={() => setOption('auction')}>Auction</button>
  </div>
</div>



    <ul className='ps-0'>
        {filterData && filterData.length > 0 && 
            filterData.map(list => { 
                if(list.asset_type === 'blog'){
                    return(<ListItem 
                            id = {list.id} 
                            key = {list.id} 
                            name = {list.sub_asset.blog_name} 
                            description={list.description} 
                            price_model_type={list.price_model_type}
                            status={list.status}
                            model = {list.price_model_type}
                            price={list.price} 
                            picture={list.picture}
                            type={list.asset_type} 
                            industry={list.sub_asset.industry} 
                            monetization={list.sub_asset.monitization} 
                            age={list.sub_asset.site_age} 
                            profit={list.sub_asset.net_profit_per_month} />)
                }else{
                    return(<DarazListItem
                            id = {list.id} 
                            key = {list.id} 
                            name = {list.title} 
                            description={list.description} 
                            price_model_type={list.price_model_type}
                            status={list.status}
                            model = {list.price_model_type}
                            price={list.price} 
                            picture={list.picture}
                            SellerRating={list.sub_asset.positive_seller_rating} 
                            responseRate={list.sub_asset.response_rate} 
                            ship={list.sub_asset.ship_on_time} 
                            responseTime={list.sub_asset.response_time} 
                            profit={list.sub_asset.avg_profit} 
                            months={list.sub_asset.months}
                    />)
                }
            })
        } 
        {filterData && filterData.length === 0 && <div className="row post-author pt-3"><p className='error-text text-center'>No Listings Available</p></div>}
        {!data && <div className="row post-author "><p className='error-text text-center'>Could not load the data</p></div>}
        </ul>
    </div>)
}

export default AvailableListing; 
