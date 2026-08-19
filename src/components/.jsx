import { Link } from "react-router";

export default function Post() {
  return (
    <article className="post">
      <h2>
        <Link>A random post title</Link>
      </h2>
    </article>
  );
}
