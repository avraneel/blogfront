import { Link } from "react-router";
import { useEffect } from "react";

export default function List() {
  const list = [1, 2, 3, 4];
  const listElements = list.map((item) => (
    <li>
      <Link to="">{item}</Link>
    </li>
  ));

  return (
    <div className="postList">
      <ul>{listElements}</ul>
    </div>
  );
}
