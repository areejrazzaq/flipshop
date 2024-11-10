import '../../index.css';
import './Listing.css';
import { useRef, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';


const CommentFrom = (props) => {

  const data = useLoaderData();
  const name = useRef(null);
  const email = useRef(null);
  const message = useRef(null);

  const [responseMessage, setResponseMessage] = useState('')

  const submitHandler = async () => {
    const response = await postComment(data.id, {name: name.current.value, email: email.current.value, content: message.current.value})
    setResponseMessage(response.message)
    if(response.success){props.changed()}
  }

  if(responseMessage){
    name.current.value = ''
    email.current.value = ''
    message.current.value = ''
  }



    return(
      <div className="reply-form" id='commentForm'>

      <h4>Leave a Reply</h4>
      <p>Login to leave a comment.</p>
      <p>Your email address will not be published. Required fields are marked * </p>
      <form action="">
        <div className="row">
          <div className="col-md-6 form-group">
            <input name="name" type="text" className="form-control" placeholder="Your Name*" required ref={name}/>
          </div>
          <div className="col-md-6 form-group">
            <input name="email" type="text" className="form-control" placeholder="Your Email*" required ref={email}/>
          </div>
        </div>
        
        <div className="row">
          <div className="col form-group">
            <textarea name="comment" className="form-control" rows='5' placeholder="Your Comment*" maxLength="255" required ref={message}></textarea>
          </div>
        </div>

        {responseMessage && <div className="text-center pt-3 accepted">{responseMessage}</div>}

        <button type="button" className="btn btn-primary" onClick={submitHandler}>Post Comment</button>

      </form>

    </div>
    )
}

export default CommentFrom; 

const postComment = async (id, data) => {

  const token = localStorage.getItem('token')
  const response = await fetch(
    "https://api.flipshop.tech/api/asset/comment/" + id,
    {
      method: "POST",
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data)
    }
  );

  const responseData = await response.json();

  if(response){
    return responseData
  }

  if (!response.ok) {
    throw new Error("Something Went Wrong");
  }
  
}
