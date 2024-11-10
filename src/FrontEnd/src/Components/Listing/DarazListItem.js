import React from 'react'
import Button from '../UI/Button/Button'

function DarazListItem(props) {
  // console.log(props.model)
  return (
        <div className="row post-author d-flex pt-3">
          <div className="d-flex justify-content-center align-items-center col-lg-3 col-md-12 flex-column pt-2">
            {props.picture ?
              <img id="img" src={props.picture} className="flex-shrink-0 shadow-lg" alt="" />
              :
              <div className='shadow-lg mb-4' style={{'min-height': '150px', minWidth: '250px'}}></div>
              }
          </div>
         
          <div className="col-lg-9 col-md-12">
  
            <div className="row">
  
              <div className="flex-shrink-0 col-lg-9">
                <h4>{props.name}</h4>
                <table className="table table-borderless">
                  <tbody>
                    <tr className="table-social-links">
                    
                      <td scope="col">Seller Rating</td>
                      <td scope="col">Response Rate</td>
                      <td scope="col">Response Time</td>
                      {/* <td scope="col">Ship on Time</td> */}
                      <td scope="col">Net Profit</td>
                    </tr>
                    <tr className="social-links2 table-social-links2">
                      <td scope="col">{props.SellerRating}</td>
                      <td scope="col">{props.responseRate}</td>
                      {/* <td scope="col">{props.responseTime}</td> */}
                      <td scope="col">{props.ship}</td>
                      <td scope="col">PKR {props.profit} p/{props.months}</td>
                    </tr>
                  </tbody>
                </table>
                <br></br>
                <p>
                  {props.description}
                </p>
                <div className="mx-4 my-3 ms-auto">
                <span className="badge badge-sm bg-gradient-danger mx-3">{props.status === 'in_progress' ? 'In Progress' : props.status}</span>
                <span className="badge badge-sm bg-gradient-success">{props.price_model_type}</span>
                </div>
              </div>
  
              <div className="flex-shrink-0 col-lg-3 align-items-right">
                <table className="table table-borderless mt-2">
                  <tbody>
                    <tr className="social-links">
                      <td scope="col">Asking Price</td>
                    </tr>
                    <tr className="social-links2">
                      <td scope="col">PKR {props.price}</td>
                    </tr>
                    <tr className="social-links2">
                      <td scope="col">{props.model}</td>
                    </tr>
                  </tbody>
                </table>
                <div className="">
                  <div className="d-flex justify-content-right justify-content-lg-end">
                  </div>
                </div>
              </div>
  
            </div>
  
  
            <div className="row">
  
              <div className="flex-shrink-0 col-9">
              </div>
  
              <div className="flex-shrink-0 col-3">
                <Button text='View' link = {`/assets/${props.id}`}/>
              </div>
  
            </div>
          </div>

        </div> 
  )
}

export default DarazListItem