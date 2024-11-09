import React from 'react'
import '../../../index.css'
import './Table.css'
// import image from '../../../assets/img/blog/blog-1.jpg'
import { Table2Row } from './TableRow'

function Table2(props) {
  return (
    <div className="row">
    <div className="col-12">
      <div className="card mb-4">
        <div className="card-header pb-0">
          <h6>Projects table</h6>
        </div>
        <div className="card-body px-0 pt-0 pb-2">
          <div className="table-responsive p-0">
            <table className="table align-items-center justify-content-center mb-0">
              <thead>
                <tr>
                  <th className="text-uppercase text-secondary text-sm font-weight-bolder opacity-7">
                    Project
                  </th>
                  <th className="text-uppercase text-secondary text-sm font-weight-bolder opacity-7 ps-2">
                    Budget
                  </th>
                  <th className="text-uppercase text-secondary text-sm font-weight-bolder opacity-7 ps-2">
                    Status
                  </th>
                  <th className="text-uppercase text-secondary text-sm font-weight-bolder text-center opacity-7 ps-2">
                    Seller
                  </th>
                  <th className="text-uppercase text-secondary text-sm font-weight-bolder text-center opacity-7 ps-2">
                    Starting Date
                  </th>
                </tr>
              </thead>
              <tbody>
              {props.data.map(item => <Table2Row
                          key = {item.id}
                          name = {item.asset_name}
                          price = {item.amount}
                          status={item.status}
                          seller = {item.seller_name}
                          email={item.seller_email}
                          date = {item.created_at}
                          picture = {item.picture}
              />)}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Table2