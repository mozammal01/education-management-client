import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home/Home";
import Root from "../Layout/Root";
import AllClasses from "../pages/AllClasses/AllClasses";
import TeachOn from "../pages/TeachOn/TeachOn";
import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/SignUp/SignUp";
import TeachSignUp from "../pages/TeachSignUp/TeachSignUp";
import Dashboard from "../Layout/Dashboard";
import Allusers from "../pages/Dashboard/AllUsers/Allusers";
import PrivateRoutes from "./PrivateRoutes";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <div className="text-5xl text-center">Fuck You</div>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/allClasses',
        element: <PrivateRoutes><AllClasses></AllClasses></PrivateRoutes>
      },
      {
        path: '/teachOn',
        element: <TeachOn></TeachOn>
      },
      {
        path: '/signIn',
        element: <SignIn></SignIn>
      },
      {
        path: '/signUp',
        element: <SignUp></SignUp>,
      },
      {
        path: '/teachSignUp',
        element: <TeachSignUp></TeachSignUp>
      }
    ]
  },
  {
    path: '/dashboard',
    element: <PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>,
    children: [
      {
        path: 'allUsers',
        element: <Allusers></Allusers>
      }
    ]
  }
]);

export default router