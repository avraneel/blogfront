import { Link } from "react-router";
import styles from "../styles/topBar.module.css";

export default function Topbar() {
  const topBar = (
    <>
      <nav>
        <ul className={styles.topBar}>
          <li>
            <Link to="/" className={styles.topBarItem}>
              Home
            </Link>
          </li>
          <li>
            <Link to="login" className={styles.topBarItem}>
              Login
            </Link>
          </li>
          <li>
            <Link to="signup" className={styles.topBarItem}>
              Sign Up
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
  return topBar;
}
