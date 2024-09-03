import {createBrowserRouter} from "react-router-dom";
import Home from "../pages/Home/Home/Home";
import Root from "../Layout/Root";

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
    ]
  },
]);

export default router