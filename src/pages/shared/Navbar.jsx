import { Link, NavLink } from "react-router-dom";
import navbarLogo from '../../assets/navbar-logo.jpg'

const Navbar = () => {
  const navLinks = <>
    <li><NavLink to='/'>Home</NavLink></li>
    <li><NavLink to='/allClasses'>All Classes</NavLink></li>
    <li><NavLink to='/teachOn'>Teach on</NavLink></li>
  </>
  return (
    <div className="navbar bg-base-100 max-w-7xl mx-auto items-center">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            {navLinks}
          </ul>
        </div>
        <Link className="text-xl" to='/'>
          <div className="flex items-center">
            <img width={100} src={navbarLogo} alt="" />
            <div className="font-semibold -ms-5">
              <p>Education</p>
              <p>Management</p>
            </div>
          </div>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-5">
          {navLinks}
        </ul>
      </div>
      <div className="navbar-end gap-5 flex items-center">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <img
              className="rounded-full"
              alt="Tailwind CSS Navbar component"
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] w-36 shadow">
            <div className="p-2 flex flex-col font-bold">
              <Link className="hover:bg-warning rounded-xl text-center py-2">Your Name</Link>
              <Link className="hover:bg-warning rounded-xl text-center py-2">Dashboard</Link>
              <Link className="hover:bg-warning rounded-xl text-center py-2">LogOut</Link>
            </div>
          </ul>
        </div>
        <a className="btn">Sign In</a>
      </div>
    </div>
  );
};

export default Navbar;