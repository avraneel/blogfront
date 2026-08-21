import { Link } from "react-router";

export function Comment({ name, date, content }) {
  const localeDate = date.toLocaleString();
  return (
    <div className="comment">
      <p>
        <Link to="/user/1">{name}</Link> {localeDate}
      </p>
      <p>{content}</p>
    </div>
  );
}
