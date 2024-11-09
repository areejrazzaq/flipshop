import '../../index.css'
import image from '../../assets/img/about.jpg'
import Button from '../UI/Button/Button'
// import { useParams } from 'react-router-dom'

const ListItem = (props)=> {
  // const params = useParams(); 
    return(
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
                    <tr className="social-links">
                      <td scope="col">Type</td>
                      <td scope="col">Industry</td>
                      <td scope="col">Monetization</td>
                      <td scope="col">Site Age</td>
                      <td scope="col">Net Profit</td>
                    </tr>
                    <tr className="social-links2">
                      <td scope="col">{props.type.charAt(0).toUpperCase() + props.type.slice(1)}</td>
                      <td scope="col">{props.industry.charAt(0).toUpperCase() + props.industry.slice(1)}</td>
                      <td scope="col">{props.monetization.charAt(0).toUpperCase() + props.monetization.slice(1)}</td>
                      <td scope="col">{props.age} years</td>
                      <td scope="col">PKR {props.profit} p/mo</td>
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

export default ListItem;