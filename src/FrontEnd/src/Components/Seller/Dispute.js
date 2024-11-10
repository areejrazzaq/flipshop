import { useLoaderData } from 'react-router-dom'
import Button from '../UI/Button/Button2';
import { useState, useEffect } from "react";
import Modal from '../UI/Modal/Modal';
import {loader} from '../../pages/Seller/SellerDisputePage'

function Dispute(props) {
    const loadedData = useLoaderData();
    const [data, setData] = useState(loadedData)

    const [showConfirmation, setShowConfirmation] = useState(false);
    const [reqData, setReqData] = useState({id: '' , status: ''})
    const [message, setMessage] = useState('')

    const handleYesClick = async () => {
      // send request to backend here
      try {
        console.log(reqData)
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
        // console.log(data)
      }
      fun(); 
    }, [message, showConfirmation])

  return (
    <>
      <div className="container-fluid py-4">
        <div className="row">
        {!data && <p className='error-test text-center'>Sorry!! We could not found the data. Either refresh the page or try again later. </p>}
        {data && data.length === 0 && <p className='error-test text-center'>Yay!! You do not have any disputes.</p>}
        {data && data.length > 0 && data.map(item => <DisputeItem
            key = {item.id}
            id = {item.id}
            title = {item.asset_name}
            name = {item.buyer_name}
            email = {item.buyer_email}
            description = {item.asset_description}
            picture = {item.asset_picture}
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
            <h5>Are you sure you want to {reqData.status === 'resolved_pay_buyer' ? 'release payment to buyer' : 'request to get the payment'}?</h5>
            <p className='error-text text-center'>You can not change the status once submitted.</p>
          </>: 
          <p>{message}</p>
          }
          </div>
          <div className="d-block d-flex justify-content-end">
            {!message && <Button 
                type='button' 
                // text = {reqData.status === 'resolved_pay_buyer' ? 'Pay Buyer' : 'Pay Seller'}
                text = 'Approve'
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
                  </div>
                </div>
              </div>

              {/* new row */}
              <div className="row gx-4">
                <div className="col-lg-4 col-md-6 my-6 pt-5">
                  <div className="h-100">
                    <h5 className="mb-1">Buyer Details</h5>
                    <p className="mb-0 font-weight-bold text-sm  pt-3 text-secondary">
                      Buyer Name:  {props.name}
                    </p>
                    <p className="mb-0 font-weight-bold text-sm  pt-3 text-secondary">
                      Buyer Email: {props.email}
                    </p>
                    {/* <p>dispute: {props.dispute_status}</p>
                    <p>buyer: {props.dispute_buyer_status}</p>
                    <p>seller: {props.dispute_seller_status}</p>
                    <p>admin: {props.is_admin_authorize}</p> */}
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

                    {props.is_admin_authorize === 'no' && props.dispute_status === 'created' && 
                    props.dispute_seller_status === 'in_dispute' &&
                    <>
                    <p>Buyer has opened a dispute that your credentials were wrong. 
                    and he wants his money back. Please approve if you accept that the credentials were wrong and 
                    reject if you claim that you sent the right credentials. 
                    </p>
                    <div className='mt-3 list-group-item d-flex justify-content-center align-items-center'>
                        <Button text='Revert Payment' onClick={() => props.submitHandler(props.id,'resolved_pay_buyer')} data-toggle="tooltip" data-placement="top" title="Pay Back to Buyer"/> 
                        <div className='mx-1'></div>
                        <Button text='Get Payment' onClick={() => props.submitHandler(props.id,'resolved_pay_seller')} data-toggle="tooltip" data-placement="top" title="Request to get Payment."/>
                    </div>
                    </>
                    }

                    {props.is_admin_authorize === 'no' && props.dispute_status === 'created' && 
                    props.dispute_buyer_status === 'in_dispute' &&
                    props.dispute_seller_status !== 'in_dispute' &&
                    <p className='error-text'>Waiting for the buyers reply!!</p>
                    }
                    
                    {props.is_admin_authorize === 'no' && props.dispute_status === 'resolved_pay_buyer' &&
                       <>
                        <p className='error-text'>Paid to buyer with mutual conses.</p>
                        <p>Since the you have accepted that you have send wrong credentials to the 
                          buyer, the payment is being reverted to buyer and your asset status is updated 
                          to new. Now you can accepts new offers on you asset. Good Luck. We hope that you will 
                          have a successful sale next time. </p>
                       </>
                    }

                    {props.is_admin_authorize === 'no' && props.dispute_status === 'resolved_pay_seller'&& 
                    <>
                      <p className='error-text'>Paid to seller with mutual conses.</p>
                      <p> Since both of you have agreed that the dispute was opened wrongly and the credentials
                      you sent were right. The dispute is resolved and payment has been released to you. 
                      Sorry for inconvenience. We hope a smooth transaction ahead. </p>
                    </>
                    }

                    {props.is_admin_authorize === 'yes' && props.dispute_status !== 'created' &&
                      (props.dispute_status === 'resolved_pay_buyer' ? 
                      <>
                        <p className='error-text'> Paid to buyer through admin </p>
                        <p>Since both you did no agreed on same choice. Based on the facts provided 
                        we decided that the buyer opened a right dispute and we reverted the payment to him. 
                        </p>
                      </>
                      :
                      <>
                        <p className='error-text'> Paid to Seller through admin </p>
                        <p>Since both you did no agreed on same choice. Based on the facts provided 
                        we decided that the buyer opened a wrong dispute and we send you the payment. 
                        </p>
                      </>
                      )}


                      {props.is_admin_authorize === 'yes' &&  props.dispute_status === 'created' &&
                        <>
                        <p className='error-text'>Decision is with admin. Please Wait.</p>
                        <p>
                          Since you could not reach a mutual decision, we have taken over the situation, 
                          Please wait for the decision.
                        </p>
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
  const response = await fetch('https://api.flipshop.tech/api/disputes/' + id, {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer ' + token,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({status: status})
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
