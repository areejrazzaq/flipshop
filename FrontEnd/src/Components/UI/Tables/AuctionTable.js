import React from 'react'
import '../../../index.css'
import './Table.css'
// import image from '../../../assets/img/blog/blog-1.jpg'
import { AuctionTableRow } from './TableRow'

function AuctionTable(props) {
  console.log(props.data)
  return (
    <div className="row">
    <div className="col-12">
      <div className="card mb-4">
        <div className="card-header pb-0">
          <h6>{props.model === "auction" ? 'Bidding' : 'Offers'} Details</h6>
        </div>
        <div className="card-body px-4 pt-0 pb-2">
          <div className="table-responsive">
          {props.data.length === 0 && <p className='error-text text-center pt-3'>There is no {props.model === "auction" ? 'bid' : 'offer'} on this asset yet.</p>}
            {props.data.length > 0 && <table className="table align-items-center justify-content-center mb-0">
              <thead>
                <tr>
                  <th className="text-uppercase text-secondary text-sm font-weight-bolder opacity-7 ps-2">
                    Buyer
                  </th>
                  <th className="text-uppercase text-secondary text-sm font-weight-bolder opacity-7 ps-2">
                    Budget
                  </th>
                  <th className="text-uppercase text-secondary text-sm font-weight-bolder opacity-7 ps-2">
                    Status
                  </th>
                  <th className="text-uppercase text-secondary text-sm font-weight-bolder opacity-7 ps-2">
                    Date
                  </th>
                  {props.status === 'new' &&  <th className="text-uppercase text-secondary text-sm font-weight-bolder opacity-7 ps-2">
                    
                  </th>}

                </tr>
              </thead>
              <tbody>
              {props.data.map(item => <AuctionTableRow 
                        picture = {item.picture}
                        id = {item.offer_id}
                        key = {item.offer_id}
                        name={item.offer_by_name} 
                        email={item.offer_by_email} 
                        price={item.offer_amount} 
                        status={item.offer_status} 
                        date = {item.created_at}
                        onClick={props.action}
                        asset_status = {props.status}
                        price_model = {props.model}
                        />)}
              </tbody>
            </table>}
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default AuctionTable