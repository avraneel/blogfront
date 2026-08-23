import Comment from "./Comment";
import CommentBox from "./CommentBox";
import { useState, useEffect } from "react";

export function CommentSection({ postId }) {
  const [postComments, setPostComments] = useState([]);
  const [updateFlag, setUpdateFlag] = useState(false);

  useEffect(() => {
    async function getComments(postId) {
      const response = await fetch(
        `http://localhost:3000/comments?postId=${postId}`,
      );
      const receivedComments = await response.json();
      setPostComments(receivedComments);
    }
    getComments(postId);
  }, [updateFlag]);

  const commentComponents = postComments.map((comment) => (
    <Comment
      key={comment.id}
      authorId={comment.authorId}
      date={comment.createdAt}
      content={comment.content}
    />
  ));
  return (
    <div className="commentSection">
      <CommentBox
        postId={postId}
        updateFlag={updateFlag}
        setUpdateFlag={setUpdateFlag}
      />
      <div className="comments">{commentComponents}</div>
    </div>
  );
}
