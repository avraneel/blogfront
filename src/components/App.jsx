import { Outlet } from "react-router";
import Topbar from "./Topbar";
import styles from "../styles/content.module.css";

export default function App() {
  return (
    <>
      <div className={styles.content}>
        <Topbar />
        <Outlet />
      </div>
    </>
  );
}
