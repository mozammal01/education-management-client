import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../pages/shared/Navbar";
import Footer from "../pages/shared/Footer";

const Root = () => {
  const location = useLocation();

  const noNavbarFooter = location.pathname.includes('/teachOn')

  return (
    <div>
      {noNavbarFooter || <Navbar></Navbar>}
      <div className="max-w-7xl mx-auto">

        <Outlet></Outlet>
      </div>
      {noNavbarFooter || <Footer></Footer>}

    </div>
  );
};

export default Root;