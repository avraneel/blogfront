import { Outlet } from "react-router";
import Topbar from "./Topbar";

export default function App() {
  return (
    <>
      <div className="content">
        <Topbar />
        <Outlet />
      </div>
    </>
  );
}
