import React from 'react'
import '../../../index.css'
import './Table.css'
import { Table1Row } from './TableRow'
function Table1(props) {
  return (<main>
    <div className="row">
          <div className="col-12">
            <div className="card rounded mb-4">
              <div className="card-header pb-0">
                <h6>Buyers List</h6>
              </div>
              <div className="card-body px-0 pt-0 pb-2">
                <div className="table-responsive p-0">
                  <table className="table align-items-center mb-0">
                    <thead>
                      <tr>
                        <th className="text-uppercase text-secondary text-xs font-weight-bolder opacity-7">
                          Buyer
                        </th>
                        <th className="text-center text-uppercase text-secondary text-xs font-weight-bolder opacity-7 ps-2">
                          Transactions
                        </th>
                        <th className="text-center text-uppercase text-secondary text-xs font-weight-bolder opacity-7">
                          Interest
                        </th>
                        <th className="text-center text-uppercase text-secondary text-xs font-weight-bolder opacity-7">
                          Status
                        </th>
                        <th className="text-center text-uppercase text-secondary text-xs font-weight-bolder opacity-7">
                          Created At
                        </th>
                        <th className="text-secondary opacity-7"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {props.data.map(item => <Table1Row 
                                                    key={item.id} 
                                                    id={item.id} 
                                                    name={item.name} 
                                                    email={item.email} 
                                                    transactions={item.transactions} 
                                                    interest={item.interests}                         
                                                    picture = {item.picture}
                                                    status={item.status} 
                                                    date={item.created_at} /> )}                 
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div></main>
  )
}

export default Table1