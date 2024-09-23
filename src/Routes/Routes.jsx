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
import AdminRoutes from "./AdminRoutes";
import Teachers from "../pages/Dashboard/Teachers/Teachers";
import Students from "../pages/Dashboard/Students/Students";
import RequestForTeacher from "../pages/Dashboard/RequestForTeacher/RequestForTeacher";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <div className="text-5xl text-center">There is a Error Here</div>,
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
        element: <PrivateRoutes><TeachOn></TeachOn></PrivateRoutes>
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
        element: <PrivateRoutes><TeachSignUp></TeachSignUp></PrivateRoutes>
      }
    ]
  },
  {
    path: '/dashboard',
    element: <PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>,
    children: [
      {
        path: 'allUsers',
        element: <AdminRoutes><Allusers></Allusers></AdminRoutes>
      },
      {
        path: 'requestForTeacher',
        element: <AdminRoutes><RequestForTeacher></RequestForTeacher></AdminRoutes>
      },
      {
        path: 'teachers',
        element: <AdminRoutes><Teachers></Teachers></AdminRoutes>
      },
      {
        path: 'students',
        element: <AdminRoutes><Students></Students></AdminRoutes>
      }
    ]
  }
]);

export default router