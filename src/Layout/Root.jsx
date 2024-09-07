import { Outlet } from "react-router-dom";
import Navbar from "../pages/shared/Navbar";
import Footer from "../pages/shared/Footer";

const Root = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="max-w-7xl mx-auto">

      <Outlet></Outlet>
      </div>
      <Footer></Footer>
      
    </div>
  );
};

export default Root;