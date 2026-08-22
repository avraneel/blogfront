import { Link } from "react-router";
import { useEffect } from "react";

const list = [
  {
    id: 33,
    title: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam, officia quisquam, eligendi veritatis labore optio aperiam facilis soluta doloribus dolores voluptas impedit! Iusto perspiciatis error consequuntur impedit officiis odio ipsum.",
  },
];

/**
 * @desc List of Post titles to be displayed in the home page
 */
export default function PostList() {
  const listElements = list.map((post) => (
    <li key={post.id}>
      <Link to="posts/1">{post.title}</Link>
    </li>
  ));

  return (
    <div className="postList">
      <ul>{listElements}</ul>
    </div>
  );
}
