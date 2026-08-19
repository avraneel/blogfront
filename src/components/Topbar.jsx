import { Link } from "react-router";

export default function Topbar() {
  const topBar = (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="login">Login</Link>
          </li>
          <li>
            <Link to="signup">Sign Up</Link>
          </li>
        </ul>
      </nav>
    </>
  );
  return topBar;
}
