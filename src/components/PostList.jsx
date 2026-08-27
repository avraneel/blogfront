import { Link } from "react-router";
import { useState, useEffect } from "react";
import url from "../../url";

export default function PostList() {
  const [postTitles, setPostTitles] = useState([]);
  useEffect(() => {
    async function getData() {
      const response = await fetch(`${url}/posts?published=true`);
      const data = await response.json();

      setPostTitles(data);
    }

    getData();
  }, []);

  const listElements = postTitles.map((post) => (
    <li key={post.id}>
      <Link to={`posts/${post.id}`}>{post.title}</Link>
    </li>
  ));

  return (
    <div className="postList">
      <ul>{listElements}</ul>
    </div>
  );
}
