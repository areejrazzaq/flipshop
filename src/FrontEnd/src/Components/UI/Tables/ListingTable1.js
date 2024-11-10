import React from 'react'
import '../../../index.css'
import './Table.css'
import { ListingTableRow } from './TableRow'
function Table(props) {
  return (<main>
    <div className="row">
          <div className="col-12">
            <div className="card rounded mb-4">
              <div className="card-header pb-0">
                <h6>Asset List</h6>
              </div>
              <div className="card-body px-0 pt-0 pb-2">
                <div className="table-responsive p-0">
                  <table className="table align-items-center mb-0">
                    <thead>
                      <tr>
                        <th className="text-uppercase text-secondary text-xs font-weight-bolder opacity-7">
                          Asset Name
                        </th>
                        <th className="text-center text-uppercase text-secondary text-xs font-weight-bolder opacity-7 ps-2">
                          Type
                        </th>
                        <th className="text-center text-uppercase text-secondary text-xs font-weight-bolder opacity-7">
                          Pricing Model
                        </th>
                        <th className="text-center text-uppercase text-secondary text-xs font-weight-bolder opacity-7">
                          Price
                        </th>
                        <th className="text-center text-uppercase text-secondary text-xs font-weight-bolder opacity-7">
                          Seller
                        </th>
                        <th className="text-center text-uppercase text-secondary text-xs font-weight-bolder opacity-7">
                          Days Created
                        </th>
                        <th className="text-secondary opacity-7"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {props.data.map(item => <ListingTableRow key={item.id} id={item.id} title={item.title} name={item.seller_name} email={item.seller_email} description={item.description} price={item.price} picture={item.picture} days={item.days} type={item.asset_type} model={item.price_model_type}/> )}                 
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div></main>
  )
}

export default Table