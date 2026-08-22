import { CommentSection } from "./CommentSection";
import { useState, useEffect } from "react";
import { useParams } from "react-router";

export default function Post() {
  const { postId } = useParams();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);

  useEffect(() => {
    async function getPosts(postId) {
      const response = await fetch(`http://localhost:3000/posts/${postId}`);
      const data = await response.json();

      // post 6 has no comments !!
      const commentsResponse = await fetch(
        `http://localhost:3000/comments?postId=${postId}`,
      );
      const comments = await commentsResponse.json();
      console.log(data);
      console.log(comments);
      setPost(data);
      setComments(comments);
    }

    getPosts(postId);
  }, []);

  return (
    <article className="post">
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <h3>Comments</h3>
      <CommentSection comments={comments} />
    </article>
  );
}
