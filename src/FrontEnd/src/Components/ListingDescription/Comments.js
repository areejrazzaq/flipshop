import { useState, useEffect } from "react";
import CommentFrom from "./CommentForm";
import CommentItem from "./CommentItem";
import { useLoaderData } from "react-router-dom";

const Comments = (props) => {
  const [comments, setComments] = useState([]);
  const data = useLoaderData();
  
  const [isChanged, setIsChanged] = useState(false);

  useEffect(() => {
    async function fetchComment() {
      const fetchedComment = await getComment(data.id); // Call the getComment function with the comment ID
      setComments(fetchedComment);
      if(comments.success){setIsChanged(false)}
    }

    fetchComment();
  }, [comments.success, data.id, isChanged]);
 
  return (
    <div className="comments">
      <h4 className="comments-count py-4">Comments</h4>
      {comments.data && comments.data.length>0 && comments.data.map((comment) => (
        <CommentItem
          key={comment.id}
          name={comment.comment_by_name}
          description={comment.content}
          date={new Date(comment.created_at).toLocaleDateString("en-US", {month: "numeric",day: "numeric", year: "numeric",})}
          replyCount={comment.replies_count}
          replies={comment.replies}
        />
      ))}
      {comments.data && comments.data.length === 0 && <p className="error-text text-center">No Comments yet.</p>}
      {!comments.data && <p className="error-text text-center">{comments.message}</p>}
      
      <CommentFrom changed={() => setIsChanged(true)}/>
    </div>
  );
};

export default Comments;

const getComment = async (id) => {
  const response = await fetch(
    "https://api.flipshop.tech/api/asset/comment/" + id,
    {
      method: "GET",
    }
  );

  const responseData = await response.json();
  console.log(responseData)

  if (!responseData.success) {
    return responseData;
  }

  if (!response.ok) {
    throw new Error("Something Went Wrong");
  }
  return responseData;
};
