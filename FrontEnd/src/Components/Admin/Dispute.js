import { useLoaderData } from 'react-router-dom'
import Button from '../UI/Button/Button2';
import { useState, useEffect } from "react";
import Modal from '../UI/Modal/Modal';
import {loader} from '../../pages/Admin/Admin_Dispute_Page'

function Dispute(props) {
    const loadedData = useLoaderData()
    const [data, setData] = useState(loadedData)

    const [showConfirmation, setShowConfirmation] = useState(false);
    const [reqData, setReqData] = useState({id: '' , status: ''})
    const [message, setMessage] = useState('')

    const handleYesClick = async () => {
      // send request to backend here
      try {
        // console.log(reqData)
        const response = await changeStatus(reqData.id, reqData.status);
        setMessage(response)
        // setMessage('request send')
        // setShowConfirmation(false);
        // window.location.reload();
      } catch (error) {
        console.log(error);
      }
  
    };
  
    const handleCancelClick = () => {
      setShowConfirmation(false);
    };
  
    const submitHandler = (id,status) => {
      setReqData({id:id, status:status})
      setShowConfirmation(true);
    };

    useEffect(() => {
      async function fun(){
        const response = await loader()
        console.log('data loaded')
        setData(response);
      }
      fun(); 
    }, [message])

  return (
    <>
      <div className="container-fluid py-4">
        <div className="row">
        {!data && <p className='error-test text-center'>Sorry!! We could not found the data. Either refresh the page or try again later. </p>}
        {data && data.length === 0 && <p className='error-test text-center'>Yay!! You do not have any disputes.</p>}
        {data && data.length > 0 && data.filter(item => item.is_admin_authorize === 'yes').map(item => <DisputeItem
            key = {item.id}
            id = {item.id}
            title = {item.asset_name}
            seller_name = {item.seller_name}
            seller_email = {item.seller_email}
            buyer_name = {item.buyer_name}
            buyer_email = {item.buyer_email}
            description = {item.asset_description}
            picture = {item.asset_picture}
            credentials = {item.credentials}
            dispute_status = {item.dispute_status}
            dispute_buyer_status ={item.dispute_buyer_status}
            dispute_seller_status = {item.dispute_seller_status}
            is_admin_authorize = {item.is_admin_authorize}
            submitHandler = {submitHandler}
        />)}
        </div>
    </div>
    {showConfirmation && (
        <Modal onClick={handleCancelClick}>
         <div className="d-block p-3 text-center">
          {!message ? <>
            <h5>Are you sure you want to {reqData.status === 'resolved_pay_buyer' ? 'release payment to buyer' : 'release payment to seller'}?</h5>
            <p className='error-text text-center'>You can not change the status once submitted.</p>
          </>: 
          <p>{message}</p>
          }
          </div>
          <div className="d-block d-flex justify-content-end">
            {!message && <Button 
                type='button' 
                // text = {reqData.status === 'resolved_pay_buyer' ? 'Approve' : 'Reject'}
                text = 'Submit'
                onClick={handleYesClick} 
            /> }
            <div className='me-2'></div>
            <Button type='button' text = {!message ? 'Cancel' : 'Close'} onClick={handleCancelClick}/>
          </div>
        </Modal>)
      }

    </>
  )
}

export default Dispute

const DisputeItem = props => {
    return(
        <div className="col-lg-8 m-auto mb-4">
          {/* first card */}
          <div className="px-3 card shadow-lg mx-4 card-profile-bottom">
            <div className="card-body p-3">
              {/* new row */}
              <div className="row gx-4">
                <div className="col-auto">
                  <div className="avatar avatar-xl position-relative">
                    <img
                      src={props.picture}
                      alt="asset_image"
                      className="w-100 border-radius-lg shadow-sm"
                    />
                  </div>
                </div>
                <div className="col-auto my-auto">
                  <div className="h-100">
                    <h5 className="mb-1">{props.title}</h5>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 my-sm-auto ms-sm-auto me-sm-0 mx-auto mt-3">
                  <div className="nav-wrapper position-relative end-0 d-flex justify-content-center fw-bold ">
                    {/* {props.asset_type.charAt(0).toUpperCase() + props.asset_type.slice(1)} */}
                  </div>
                </div>
              </div>
              {/* new row */}
              <div className="row gx-4">
                <div className="col-auto my-auto">
                  <div className="h-100">
                    <h5>About</h5>
                    <p className="mb-0 font-weight-bold text-sm text-secondary">
                      {props.description}
                    </p>
                    {/* <h5>{props.dispute_status}</h5>
                    <h5>{props.dispute_buyer_status}</h5>
                    <h5>{props.dispute_seller_status}</h5> */}
                  </div>
                </div>
              </div>

              {/* new row */}
              <div className="row gx-4">
                <div className="my-6 pt-5">
                  <div className="h-100">
                    <h5 className="mb-1">User Details</h5>
                    <div className='row d-flex'>
                        <div className='col-6'>
                            <p className="mb-0 font-weight-bold text-sm  pt-3 text-secondary">
                                Seller Name:  {props.seller_name}
                                </p>
                                <p className="mb-0 font-weight-bold text-sm  pt-3 text-secondary">
                                Seller Email: {props.seller_email}
                            </p>
                        </div>
                        <div className='col-6'>
                            <p className="mb-0 font-weight-bold text-sm  pt-3 text-secondary">
                                Buyer Name:  {props.seller_name}
                                </p>
                                <p className="mb-0 font-weight-bold text-sm  pt-3 text-secondary">
                                Buyer Email: {props.seller_email}
                            </p>
                        </div>
                        <h5 className="my-4">Credentials</h5>
                        <p>{props.credentials}</p>
                    </div>
                  </div>
                </div>
                
              </div>
              <hr className="horizontal dark m-auto" />
              
              {/* new row */}
              <div className="row gx-4">
                <div className="col-12 my-6 pt-5">
                  <div className="h-100">
                    <h5 className="mb-1">Dispute Status</h5>
                    <span className="mb-0 font-weight-bold text-sm  pt-3 text-secondary">

                    {props.dispute_status !== 'created' &&
                      (props.dispute_status === 'resolved_pay_buyer' ? 
                      <>
                        <p className='error-text'> Paid to buyer through admin.</p>
                        <p>Decision made the the buyer opened a right dispute and 
                        the payment has been sent back to him. 
                        </p>
                      </>
                      :
                      <>
                        <p className='error-text'> Paid to Seller through admin </p>
                        <p>Decision made that the buyer opened a wrong dispute and 
                        payment has released to the seller. 
                        </p>
                      </>
                      )}


                      {props.is_admin_authorize === 'yes' &&  props.dispute_status === 'created' &&
                        <>
                        <p className='error-text'>Users could not reach to a mutual conses. Please resolve the 
                        issue with in 7 working days. Approve if you verify that the credentials were wrong
                        and the buyer opened a right dispute, if so the payment will be reverted back to the buyer. 
                        Reject if you claim that the credentials were right
                        and buyer opened a wrong dispute. 
                        </p>
                        {
                        <div className='mt-3 list-group-item d-flex justify-content-center align-items-center'>
                            <Button text='Pay Buyer' onClick={() => props.submitHandler(props.id,'resolved_pay_buyer')}/> <div className='mx-1'></div>
                            <Button text='Pay Seller' onClick={() => props.submitHandler(props.id,'resolved_pay_seller')}/>
                        </div>
                        }
                        </>
                      }

                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          </div>
    )
}

const changeStatus = async (id, status) =>{
  const token = localStorage.getItem('token')
  const response = await fetch('https://api.flipshop.tech/api/disputes', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer ' + token,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({dispute_id:id, status: status})
  });

  const responseData = await response.json()
  if (!responseData.success) {
      return responseData.message;
  }
  if (!response.ok) {
      throw Error('Sorry! Could not Load the Customer Data')
  }
  return responseData.message;

}
