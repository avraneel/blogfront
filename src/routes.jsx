import App from "./components/App";
import Topbar from "./components/Topbar";
import SignUp from "./components/Signup";
import Login from "./components/Login";
import List from "./components/List";

const routes = [
  {
    path: "/",
    Component: App,
    children: [
      { path: "/", Component: List },
      { path: "signup", Component: SignUp },
      { path: "login", Component: Login },
    ],
  },
];

export default routes;
