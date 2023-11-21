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
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import AdminRoute from "../PrivateRoute/AdminRoute";
import AddItems from './../components/AddItems/AddItems';
import ManageItems from "../components/ManageItems/ManageItems";
import UpdateMenuItem from "../components/UpdateMenuItem/UpdateMenuItem";
import Payment from "../components/Payment/Payment";


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
    element: <PrivateRoute><Dashboard /></PrivateRoute>,
    children: [
      {
        path: "/dashboard/myCart",
        element: <MyCart />
      },
      {
        path: "/dashboard/payment",
        element: <Payment />
      },
      // admin routes
      {
        path: "/dashboard/addItems",
        element: <AdminRoute><AddItems /></AdminRoute>
      },
      {
        path: "/dashboard/allUsers",
        element: <AdminRoute><AllUsers /></AdminRoute>
      },
      {
        path: "/dashboard/manageItems",
        element: <AdminRoute><ManageItems /></AdminRoute>
      },
      {
        path: "/dashboard/updateMenuItem/:id",
        loader: ({ params }) => fetch(`http://localhost:3000/api/v1/${params.id}/menu`),
        element: <AdminRoute><UpdateMenuItem /></AdminRoute>
      }
    ]
  }
]);