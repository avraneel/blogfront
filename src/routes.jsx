import App from "./components/App";
import PostList from "./components/PostList";
import SignUp from "./components/Signup";
import Login from "./components/Login";
import Post from "./components/Post";
import User from "./components/User";
import Edit from "./components/Edit";

const routes = [
  {
    path: "/",
    Component: App,
    children: [
      { path: "/", Component: PostList },
      { path: "signup", Component: SignUp },
      { path: "login", Component: Login },
      { path: "posts/:postId", Component: Post },
      { path: "users/:userId", Component: User },
      { path: "edit/:commentId", Component: Edit },
    ],
  },
];

export default routes;
