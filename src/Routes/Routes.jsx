import {createBrowserRouter} from "react-router-dom";
import Home from "../pages/Home/Home/Home";
import Root from "../Layout/Root";
import AllClasses from "../pages/AllClasses/AllClasses";
import TeachOn from "../pages/TeachOn/TeachOn";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <div>I Want to 4q</div>,
    children: [
      {
        path: '/', 
        element: <Home></Home>
      },
      {
        path: '/allClasses', 
        element: <AllClasses></AllClasses>
      },
      {
        path: '/teachOn',
        element: <TeachOn></TeachOn>
      }
    ]
  },
]);

export default router