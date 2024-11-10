import React from 'react'
import { Link } from 'react-router-dom'

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
                          Offers
                        </th>
                        <th className="text-center text-uppercase text-secondary text-xs font-weight-bolder opacity-7">
                          Days Created
                        </th>
                        <th className="text-secondary opacity-7"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {props.data.map(item => <ListingTableRow 
                                            key={item.id} 
                                            id={item.id} 
                                            title={item.title}  
                                            price={item.price} 
                                            offers={item.offers_count}
                                            image={item.picture} 
                                            days={item.days} 
                                            type={item.asset_type} 
                                            model={item.price_model_type}/> )}                 
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

function ListingTableRow(props) {
    return (
      <tr>
        <td>
          <div className="d-flex px-2 py-1">
            <div>
              <img src={props.image} className="avatar avatar-lg me-3" alt="user1" />
            </div>
            <div className="d-flex flex-column justify-content-center">
              <h6 className="mb-0 text-lg">{props.title}</h6>
            </div>
          </div>
        </td>
        <td>
          <p className="align-middle text-center text-sm font-weight-bold mb-0">
            {props.type.charAt(0).toUpperCase() + props.type.slice(1)}
          </p>
          {/* <p className="text-sm text-secondary mb-0">
                              Organization
                            </p> */}
        </td>
        <td>
          <p className="align-middle text-center text-sm font-weight-bold mb-0">
            {props.model.charAt(0).toUpperCase() + props.model.slice(1)}
          </p>
        </td>
        <td>
          <p className="align-middle text-center text-sm font-weight-bold mb-0">
            {props.price}
          </p>
        </td>
        <td>
        <p className="align-middle text-center text-sm font-weight-bold mb-0">
          {props.offers}
        </p>
        </td>
        <td className="align-middle text-center">
          <span className="text-secondary text-sm font-weight-bold">
            {props.days}
          </span>
        </td>
        <td className="align-middle">
          <Link
            to={`${props.id}`}
            className="text-secondary font-weight-bold text-sm"
            data-toggle="tooltip"
            data-original-title="Edit user"
          >
            View
          </Link>
        </td>
      </tr>
    );
  }