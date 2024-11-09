import React from 'react'
import { useLoaderData } from 'react-router-dom'
import AuctionTable from '../UI/Tables/AuctionTable'

function ListingsDetails() {
  let data = useLoaderData(); 
  data = data[0]
  return (
    <>
    <div className="row">
        <div className="col-lg-8">
          {/* first card */}
          <div className="px-3 card shadow-lg mx-4 card-profile-bottom">
            <div className="card-body p-3">
              {/* new row */}
              <div className="row gx-4">
                <div className="col-auto">
                  <div className="avatar avatar-xl position-relative">
                    <img
                      src={data.picture}
                      alt="asset_image"
                      className="w-100 border-radius-lg shadow-sm"
                    />
                  </div>
                </div>
                <div className="col-auto my-auto">
                  <div className="h-100">
                    <h5 className="mb-1">{data.title}</h5>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 my-sm-auto ms-sm-auto me-sm-0 mx-auto mt-3">
                  <div className="nav-wrapper position-relative end-0 d-flex justify-content-center fw-bold ">
                    {data.asset_type.charAt(0).toUpperCase() + data.asset_type.slice(1)}
                  </div>
                </div>
              </div>
              {/* new row */}
              <div className="row gx-4">
                <div className="col-auto my-auto">
                  <div className="h-100">
                    <h5>About</h5>
                    <p className="mb-0 font-weight-bold text-sm text-secondary">
                      {data.description}
                    </p>
                  </div>
                </div>
              </div>
              {/* new row */}
              <div className="row gx-4">
                <div className="col-lg-4 col-md-6 my-6 pt-5">
                  <div className="h-100">
                    <h5 className="mb-1">Days</h5>
                    <p className="mb-0 font-weight-bold text-sm  pt-3 text-secondary">
                      {data.days}
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 my-6 pt-5">
                  <div className="h-100">
                    <h5 className="mb-1">Price</h5>
                    <p className="mb-0 font-weight-bold text-sm pt-3 text-secondary">
                      {data.price}
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 my-6 pt-5">
                  <div className="h-100">
                    <h5 className="mb-1">Model</h5>
                    <p className="mb-0 font-weight-bold text-sm pt-3 text-secondary">
                      {data.price_model_type.charAt(0).toUpperCase() + data.price_model_type.slice(1)}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* second card */}
          
            <div className="mx-4 mt-3 ">
              <AuctionTable data = {data.offers} model={data.price_model_type}/>
            </div>
        
        </div>
        {/* column ends here  */}

        <div className="col-lg-4 col-md-12 mt-sm-3">
        
          <div className="card shadow-lg mx-4 card-profile-bottom mb-3">
            <div className="card-body p-3">
              <div className="row gx-4">
                <div className="col-auto">
                  <div className="avatar avatar-xl position-relative">
                    <img
                      src={data.picture}
                      alt="profile_image"
                      className="w-100 border-radius-lg shadow-sm"
                    />
                  </div>
                </div>
                <div className="col-auto my-auto">
                  <div className="h-100">
                    <h5 className="mb-1">{data.seller_name}</h5>
                    <p className="mb-0 font-weight-bold text-sm">
                      {data.seller_email}
                    </p>
                  </div>
                </div>
                {/* <div className="col-lg-4 col-md-6 my-sm-auto ms-sm-auto me-sm-0 mx-auto mt-3">
                  <div className="nav-wrapper position-relative end-0 d-flex justify-content-center">
                    {props.data.status === 1 ? (
                      <span className="badge badge-sm bg-gradient-danger">
                        Blocked
                      </span>
                    ) : (
                      <span className="badge badge-sm bg-gradient-success">
                        Active
                      </span>
                    )}
                  </div>
                </div> */}
              </div>
            </div>
          </div>
          {data.asset_type === 'daraz' ? 
              <DarazDetails data={data.sub_asset}/> :
              <BlogDetails data={data.sub_asset}/>
              }
        </div>
      </div>
    </>

  )
}

export default ListingsDetails

const DarazDetails = (props) => {
  return(
    <div className="card shadow-lg mx-4 card-profile-bottom">
      <div className="card-body p-3">
      <div className="d-flex flex-column">
        <h6 className="mb-3 text-lg">Details</h6>
        <span className="mb-2 text-sm">
          store Name:
          <span className="text-dark font-weight-bold ms-sm-2">
            {props.data.store_name}
          </span>
        </span>
        <span className="mb-2 text-sm">
          Main Category Name:
          <span className="text-dark font-weight-bold ms-sm-2">
            {props.data.main_category_name}
          </span>
        </span>
        <span className="mb-2 text-sm">
          Ship on Time:
          <span className="text-dark font-weight-bold ms-sm-2">
            {props.data.ship_on_time}
          </span>
        </span>
        <span className="mb-2 text-sm">
          Positive Seller Rating:
          <span className="text-dark font-weight-bold ms-sm-2">
            {props.data.positive_seller_rating}
          </span>
        </span>
        <span className="mb-2 text-sm">
          Response Time:
          <span className="text-dark font-weight-bold ms-sm-2">
            {props.data.response_time}
          </span>
        </span>
        <span className="mb-2 text-sm">
          Response Rate:
          <span className="text-dark font-weight-bold ms-sm-2">
            {props.data.response_rate}
          </span>
        </span>
        <span className="mb-2 text-sm">
          Number of Products:
          <span className="text-dark font-weight-bold ms-sm-2">
            {props.data.products_num}
          </span>
        </span>
        <span className="mb-2 text-sm">
          Average Profit:
          <span className="text-dark ms-sm-2 font-weight-bold">
            {props.data.avg_profit} p/{props.months}m
          </span>
        </span>
        </div>
      </div>
  </div>
  )
}

const BlogDetails = (props) => {
  return(
    <div className="card shadow-lg mx-4 card-profile-bottom">
      <div className="card-body p-3">
      <div className="d-flex flex-column">
        <h6 className="mb-3 text-lg">Details</h6>
        <span className="mb-2 text-sm">
          Blog Name:
          <span className="text-dark font-weight-bold ms-sm-2">
            {props.data.blog_name}
          </span>
        </span>
        <span className="mb-2 text-sm">
          Industry:
          <span className="text-dark font-weight-bold ms-sm-2">
            {props.data.industry}
          </span>
        </span>
        <span className="mb-2 text-sm">
          Type:
          <span className="text-dark font-weight-bold ms-sm-2">
            {props.data.type}
          </span>
        </span>
        <span className="mb-2 text-sm">
          Monetization Method:
          <span className="text-dark font-weight-bold ms-sm-2">
            {props.data.monitization}
          </span>
        </span>
        <span className="mb-2 text-sm">
          Site Age:
          <span className="text-dark font-weight-bold ms-sm-2">
            {props.data.site_age}
          </span>
        </span>
        <span className="mb-2 text-sm">
          Net profit Per Month:
          <span className="text-dark font-weight-bold ms-sm-2">
            {props.data.net_profit_per_month}
          </span>
        </span>
        </div>
      </div>
  </div>
  )
}