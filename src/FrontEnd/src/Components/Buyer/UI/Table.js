import React from 'react'
import '../../UI/Tables/Table.css'

function Table(props) {
  return (
    <div className="row">
    <div className="col-12">
      <div className="card mb-4">
        <div className="card-header pb-0">
          <h6>{props.data.price_model_type === "auction" ? 'Bidding' : 'Offers'} Details</h6>
        </div>
        <div className="card-body px-4 pt-0 pb-2">
          <div className="table-responsive">
          {props.data.length === 0 && <p className='error-text text-center pt-3'>Sorry! No offers yet.</p>}
            {props.data.length > 0 && <table className="table align-items-center justify-content-center mb-0">
              <thead>
                <tr>
                  <th className="text-uppercase text-secondary text-sm font-weight-bolder opacity-7 ps-2">
                    Asset Name
                  </th>
                  <th className="text-uppercase text-secondary text-sm font-weight-bolder opacity-7 ps-2">
                    Actual Price
                  </th>
                  <th className="text-uppercase text-secondary text-sm font-weight-bolder opacity-7 ps-2">
                    Offer
                  </th>
                  <th className="text-uppercase text-secondary text-sm font-weight-bolder opacity-7 ps-2">
                    Price Model
                  </th>
                  <th className="text-uppercase text-secondary text-sm font-weight-bolder opacity-7 ps-2">
                    Seller
                  </th>
                  <th className="text-uppercase text-secondary text-sm font-weight-bolder opacity-7 ps-2">
                    Status
                  </th>
                  <th className="text-uppercase text-secondary text-sm font-weight-bolder opacity-7 ps-2">
                    Date
                  </th>
                  <th className="text-uppercase text-secondary text-sm font-weight-bolder opacity-7 ps-2">
                    
                  </th>

                </tr>
              </thead>
              <tbody>
              {props.data.map(item => <TableRow 
                                    name={item.asset_name} 
                                    id={item.id}
                                    asset_id={item.asset_id}
                                    key={item.id}
                                    seller= {item.asset_by_name}
                                    email={item.asset_by_email} 
                                    price={item.original_price} 
                                    offer={item.amount}
                                    status={item.status} 
                                    date = {item.created_at}
                                    model={item.price_model_type}
                                    submitHandler={props.submitHandler}
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

export default Table


const TableRow = (props) => {
 return(
    <tr>
      <td>
        <p className="text-sm font-weight-bold mb-0">{props.name}</p>
      </td>
      
      <td>
        <p className="text-sm font-weight-bold mb-0">PKR {props.price}</p>
      </td>

      <td>
        <p className="text-sm font-weight-bold mb-0">PKR {props.offer}</p>
      </td>

      <td>
        <p className="text-sm font-weight-bold mb-0">{props.model.charAt(0).toUpperCase() + props.model.slice(1)}</p>
      </td>

      <td>
        <div className="d-flex flex-column justify-content-center">
          <h6 className="text-lg mb-0">{props.seller}</h6>
          <p className="text-sm text-secondary mb-0">{props.email}</p>
        </div>
      </td>

      <td>
        <span
          className={
            props.status === "accepted"
              ? "text-sm font-weight-bold accepted"
              : props.status === "rejected" ? "text-sm font-weight-bold rejected" : 'text-sm font-weight-bold process'
          }
        >
          {props.status === 'in_process' ? 'In Process' :
          props.status.charAt(0).toUpperCase() + props.status.slice(1)}
        </span>
      </td>

      <td className="align-middle">
        <p className="text-sm font-weight-bold mb-0">
          {new Date(props.date).toLocaleDateString("en-US", {
            month: "numeric",
            day: "numeric",
            year: "numeric",
          })}
        </p>
      </td>
        <td>
        {props.status !== 'in_process' ? 
        (props.status === 'accepted' ? 
        <button
            data-bs-toggle="tooltip" data-bs-placement="top" title="View Listing"
            className="btn btn-link text-success text-gradient px-3 mb-0 fw-bold text-decoration-none"
            onClick={() => window.location.href = '/buyer/transactions/'}
          >
            <i className="bi bi-eye-fill me-2"></i>
          </button> 
          :
          <button
            data-bs-toggle="tooltip" data-bs-placement="top" title="In Process"
            className="btn btn-link text-success text-gradient px-3 mb-0 fw-bold text-decoration-none"
          >
            <i className="bi bi-exclamation-lg text-warning me-2"></i>
          </button> )
         :
         <>
         <button
            data-bs-toggle="tooltip" data-bs-placement="top" title="Delete"
            className="btn btn-link text-warning text-gradient px-3 mb-0 fw-bold text-decoration-none"
            onClick={() => {props.submitHandler(props.id,props.asset_id,'DELETE')}}
          >
            <i className="bi bi-trash3"></i>
          </button>
          <button
            data-bs-toggle="tooltip" data-bs-placement="top" title="Edit"
            className="btn btn-link text-info text-gradient px-3 mb-0 fw-bold text-decoration-none"
            onClick={() => {props.submitHandler(props.id,props.asset_id,'PUT')}}
          >
            <i className="bi bi-pencil"></i>
          </button>
         </>
          }
        </td>
    </tr>
 )
}
