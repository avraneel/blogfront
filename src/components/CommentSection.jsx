import Comment from "./Comment";
import CommentBox from "./CommentBox";

export function CommentSection({ postId, comments }) {
  const commentComponents = comments.map((comment) => (
    <Comment
      key={comment.id}
      authorId={comment.authorId}
      date={comment.createdAt}
      content={comment.content}
    />
  ));
  return (
    <div className="commentSection">
      <CommentBox postId={postId} />
      <div className="comments">{commentComponents}</div>
    </div>
  );
}
