import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {

  const [homeClicked, setHomeClicked] = useState(false)
  const [allClassClicked, setAllClassClicked] = useState(false)
  const [teachOnClicked, setTeachOnClicked] = useState(false)

  const handleHomeClicked = () => {
    console.log('Home Button Clicked');
    setHomeClicked(true)
    setTeachOnClicked(false)
    setAllClassClicked(false)
  }

  const handleAllClassClicked = () => {
    console.log('AllClass Button Clicked');
    setAllClassClicked(true)
    setHomeClicked(false)
    setTeachOnClicked(false)
  }

  const handleTeachOnClicked = () => {
    console.log('TeachOn Button Clicked');
    setTeachOnClicked(true)
    setHomeClicked(false)
    setAllClassClicked(false)
  }


  const navLinks = <>

    <li onClick={handleHomeClicked} className={homeClicked ? 'border-b-2 border-blue-400' : 'hover:border-b-2 border-red-400'}><Link to='/'>Home</Link></li>
    <li onClick={handleAllClassClicked} className={allClassClicked ? 'border-b-2 border-blue-400' : 'hover:border-b-2 border-red-400'}><Link to='/allClasses'>All Classes</Link></li>
    <li onClick={handleTeachOnClicked} className={teachOnClicked ? 'border-b-2 border-blue-400' : 'hover:border-b-2 border-red-400'}><Link to='/teachOn'>Teach on</Link></li>
  </>


  return (
    <div className="navbar bg-black text-white bg-opacity-50 z-10 fixed top-0 left-1/2 right-1/2 -translate-x-1/2 max-w-7xl">

      {/* Navbar Start */}
      <div className="navbar-start">

        {/* For mobile */}
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
            className="dropdown-content bg-base-100 font-semibold space-y-2 rounded-box z-[1] mt-3 w-52 p-5 shadow">
            {navLinks}
          </ul>
        </div>

        {/* Navbar Logo */}
        <Link className="text-xl" to='/'>
          <div className="font-semibold">
            <p>Education</p>
            <p>Management</p>
          </div>
        </Link>

      </div>

      {/* Main Navbar */}
      <div className="navbar-center hidden lg:flex">
        <ul className="flex font-semibold px-1 gap-5">
          {navLinks}
        </ul>
      </div>

      {/* Navbar End */}
      <div className="navbar-end gap-5 flex items-center">

        {/* User Photo*/}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar mt-2">
            <img
              className="rounded-full"
              alt="Tailwind CSS Navbar component"
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] w-36 shadow">

            <div className="p-2 flex flex-col font-bold">
              <li className="text-center py-2">Your Name</li>
              <Link className="hover:bg-warning rounded-xl text-center py-2">Dashboard</Link>
              <Link className="hover:bg-warning rounded-xl text-center py-2">LogOut</Link>
            </div>

          </ul>
        </div>

        <a className="btn hover:-translate-y-4">Sign In</a>
      </div>
    </div>
  );
};

export default Navbar;