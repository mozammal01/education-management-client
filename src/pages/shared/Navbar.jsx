import userImg from '../../assets/Others/user.jpg'
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import useAuth from "../../Hooks/useAuth";
import useUser from '../../Hooks/useUser';

const Navbar = () => {

  const { user, logOut, loading } = useAuth();

  const [isUser] = useUser({ enabled: !loading && !!user?.email, user });

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

  const handleLogOut = () => {
    logOut()
      .then(result => {
        console.log(result);
      })
      .catch(err => {
        console.error(err);
      })
  }


  const navLinks = <>

    <li onClick={handleHomeClicked} className={homeClicked ? 'border-b-2 border-blue-400' : 'hover:border-b-2 border-red-400'}><Link to='/'>Home</Link></li>
    <li onClick={handleAllClassClicked} className={allClassClicked ? 'border-b-2 border-blue-400' : 'hover:border-b-2 border-red-400'}><Link to='/allClasses'>All Classes</Link></li>
    <li onClick={handleTeachOnClicked} className={teachOnClicked ? 'border-b-2 border-blue-400' : 'hover:border-b-2 border-red-400'}><Link to='/teachOn'>Teach on EM</Link></li>
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
        {user ?
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar mt-2">
              {
                user?.photoURL ? <img
                  className="rounded-full"
                  src={user?.photoURL} />
                  :
                  <img
                    className="rounded-full"
                    alt="Tailwind CSS Navbar component"
                    src={userImg} />
              }
            </div>
            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
              <div className="p-2 flex flex-col font-bold text-black">
                <li className="text-center py-2">{user?.displayName}</li>
                {
                  isUser.admin ? <Link to='/dashboard/allUsers' className="hover:bg-warning rounded-xl text-center py-2">Dashboard</Link> :
                    <Link to='/dashboard' className="hover:bg-warning rounded-xl text-center py-2">Dashboard</Link>
                }
                <li onClick={handleLogOut} className="hover:bg-warning rounded-xl text-center py-2">LogOut</li>
              </div>
            </ul>
          </div>
          :
          <Link to='/signIn' className="btn hover:-translate-y-4">Sign In</Link>
        }

      </div>
    </div>
  );
};

export default Navbar;