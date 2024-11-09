import React from 'react'

function CommentReply(props) {
    return  (<div className='comment comment-reply'>
        <div className="d-flex">
                <div className="comment-img">
                <i className="bi bi-people fs-1"></i>
                </div>
                <div>
                <h5>
                    {props.name}
                    
                </h5>
                <time>{props.date}</time>
                <p>{props.description}</p>
                </div>
            </div>
    </div>)
}

export default CommentReply