import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Menu from "../pages/Menu/Menu/Menu";
import Order from "../pages/Order/Order/Order";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Dashboard from "../Layout/Dashboard";
import MyCart from "../components/MyCart/MyCart";
import AllUsers from "../components/AllUsers/AllUsers";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'menu',
        element: <Menu></Menu>
      },
      {
        path: 'order/:category',
        element: <Order></Order>
      }
    ],

  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/register",
    element: <Register />
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "/dashboard/myCart",
        element: <MyCart />
      },
      // admin routes
      {
        path: "/dashboard/allUsers",
        element: <AllUsers />
      }
    ]
  }
]);