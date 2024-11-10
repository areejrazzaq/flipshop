import "../../index.css";
import CommentReply from "./CommentReply";
import "./Listing.css";

const CommentItem = (props) => {
 
  return (<div className="comment">
    <div className="d-flex">
          <div className="comment-img">
            <i className="bi bi-people fs-1"></i>
          </div>
          <div>
            <h5>
              {props.name}
              <a href="#commentForm" className="reply">
                <i className="bi bi-reply-fill"></i> Reply
              </a>
            </h5>
            <time>{props.date}</time>
            <p>{props.description}</p>
          </div>
        </div>
        {props.replyCount > 0 && props.replies.map((comment) => (
        <CommentReply
          key={comment.id}
          name={comment.reply_by_name}
          description={comment.content}
          date={new Date(comment.created_at).toLocaleDateString("en-US", {month: "numeric",day: "numeric", year: "numeric",})}
          replyCount={comment.replies_count}
          replies={comment.replies}
        />
      ))}
  </div>)
};

export default CommentItem;
