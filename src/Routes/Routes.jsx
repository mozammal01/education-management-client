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
import Students from "../pages/Dashboard/Students/Students";
import RequestForTeacher from "../pages/Dashboard/RequestForTeacher/RequestForTeacher";
import TotalClass from "../pages/Dashboard/TotalClass/TotalClass";
import PopularCourseDetails from "../pages/Home/PopularCourses/PopularCourseDetails/PopularCourseDetails";
import Payment from "../pages/Dashboard/Payment/Payment";
import MyEnroll from "../pages/Dashboard/MyEnroll/MyEnroll";
import PaymentHistory from "../pages/Dashboard/Payment/PaymentHistory";
import AllCourses from "../pages/AllCourses/AllCourses";
import Feedback from "../pages/Dashboard/Feedback/Feedback";
import TotalEnrollment from "../pages/Dashboard/totalEnrollment/totalEnrollment";
import MyProfile from "../pages/Dashboard/MyProfile/MyProfile";
import AddClass from "../pages/Dashboard/AddClass/AddClass";
import PendingClass from "../pages/Dashboard/PendingClass/PendingClass";
import YourClasses from "../pages/Dashboard/YourClasses/YourClasses";
import UpdateClass from "../pages/Dashboard/UpdateClass/UpdateClass";


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
        element: <AllCourses></AllCourses>
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
      },
      {
        path: '/allCourses',
        element: <AllCourses></AllCourses>
      },
      {
        path: '/courseDetails/:id',
        element: <PrivateRoutes><PopularCourseDetails></PopularCourseDetails></PrivateRoutes>
      }
    ]
  },
  {
    path: '/dashboard',
    element: <PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>,
    children: [

      // Normal User
      {
        path: 'payment',
        element: <Payment></Payment>
      },
      {
        path: 'myEnroll',
        element: <MyEnroll></MyEnroll>
      },
      {
        path: 'paymentsHistory',
        element: <PaymentHistory></PaymentHistory>
      },
      {
        path: 'feedback',
        element: <Feedback></Feedback>
      },
      {
        path:'myProfile',
        element: <MyProfile></MyProfile>
      },
      {
        path: 'addClass',
        element:< AddClass></AddClass>
      },
      {
        path: 'updateClass/:id',
        element:<UpdateClass></UpdateClass>
      },
      {
        path:'yourClasses',
        element: <YourClasses></YourClasses>
      },

      // Admin 
      {
        path: 'allUsers',
        element: <AdminRoutes><Allusers></Allusers></AdminRoutes>
      },
      {
        path: 'requestForTeacher',
        element: <AdminRoutes><RequestForTeacher></RequestForTeacher></AdminRoutes>
      },
      {
        path: 'totalClass',
        element: <AdminRoutes><TotalClass></TotalClass></AdminRoutes>
      },
      {
        path: 'students',
        element: <AdminRoutes><Students></Students></AdminRoutes>
      },
      {
        path: 'totalEnrollment',
        element: <AdminRoutes><TotalEnrollment></TotalEnrollment></AdminRoutes>
      },
      {
        path: 'pendingClass',
        element: <AdminRoutes><PendingClass></PendingClass></AdminRoutes>
      }
    ]
  }
]);

export default router