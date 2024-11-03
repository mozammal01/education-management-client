import { NavLink, Outlet } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import useUser from "../Hooks/useUser";
// import useTeacher from "../Hooks/useTeacher";

const Dashboard = () => {
  const { user, loading, theme } = useAuth();
  const [isUser] = useUser({ enabled: !loading && !!user?.email, user });

  return (
    <div className="md:grid grid-cols-10 min-h-screen">

      {
        isUser?.admin ?
          <div className="col-span-2">

            {/* Admin */}

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
              <div className={`menu dropdown-content bg-cyan-400 md:flex flex-col p-4 font-bold gap-5 z-[1] w-80 ${theme === 'light' ? 'text-black' : 'text-white'}`}>

                <li>
                  <NavLink to='/dashboard/adminHome' className="text-center rounded">Admin Home</NavLink>
                </li>

                <li>
                  <NavLink to='/dashboard/requestForTeacher' className="text-center rounded">Request For Teacher</NavLink>
                </li>

                <li>
                  <NavLink to='/dashboard/allUsers' className="text-center rounded">All Users</NavLink>
                </li>

                <li>
                  <NavLink to='/dashboard/totalclass' className="text-center rounded">Total Class</NavLink>
                </li>

                <li>
                  <NavLink to='/dashboard/totalEnrollment' className="text-center rounded">Total Enrollment </NavLink>
                </li>

                <li>
                  <NavLink to='/dashboard/pendingClass' className="text-center rounded">Pending Class</NavLink>
                </li>

                <li>
                  <NavLink to='/dashboard/myProfile' className="text-center rounded">My Profile</NavLink>
                </li>

                <li>
                  <NavLink to='/' className="text-center rounded">Home</NavLink>
                </li>

              </div>
            </div>

            <div className={`menu hidden md:flex flex-col p-4 font-bold gap-8 me-1 -mt-7 h-screen fixed ${theme === 'light' ? 'bg-cyan-400 text-black' : 'bg-black text-white'}`}>

              <h3 className="text-xl font-extrabold my-5">Education Management</h3>
              <li>
                <NavLink to='/dashboard/adminHome' className="text-center rounded">Admin Home</NavLink>
              </li>

              <li>
                <NavLink to='/dashboard/requestForTeacher' className="text-center rounded">Request For Teacher</NavLink>
              </li>

              <li>
                <NavLink to='/dashboard/allUsers' className="text-center rounded">All Users</NavLink>
              </li>

              <li>
                <NavLink to='/dashboard/totalclass' className="text-center rounded">Total Class</NavLink>
              </li>

              <li>
                <NavLink to='/dashboard/totalEnrollment' className="text-center rounded">Total Enrollment </NavLink>
              </li>

              <li>
                <NavLink to='/dashboard/pendingClass' className="text-center rounded">Pending Class</NavLink>
              </li>

              <li>
                <NavLink to='/dashboard/myProfile' className="text-center rounded">My Profile</NavLink>
              </li>

              <li>
                <NavLink to='/' className="text-center rounded">Home</NavLink>
              </li>

            </div>
          </div>

          :
          <>
            {
              isUser?.student ?

                <div className="col-span-2">

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
                    <div className={`menu dropdown-content bg-cyan-400 md:flex flex-col p-4 font-bold gap-5 z-[1] w-80 ${theme === 'light' ? 'text-black' : 'text-white'}`}>


                      <li>
                        <NavLink to='/dashboard/studentHome' className="text-center rounded">Student Home</NavLink>
                      </li>

                      <li>
                        <NavLink to='/dashboard/myEnroll' className="text-center rounded">My Enroll</NavLink>
                      </li>

                      <li>
                        <NavLink to='/dashboard/payment' className="text-center rounded">Payment</NavLink>
                      </li>

                      <li>
                        <NavLink to='/dashboard/paymentsHistory' className="text-center rounded">Payment History</NavLink>
                      </li>

                      <li>
                        <NavLink to='/dashboard/feedback' className="text-center rounded">Feedback</NavLink>
                      </li>

                      <li>
                        <NavLink to='/dashboard/myProfile' className="text-center rounded">My Profile</NavLink>
                      </li>

                      <li>
                        <NavLink to='/' className="text-center rounded">Home</NavLink>
                      </li>
                    </div>
                  </div>

                  <div className={`menu hidden md:flex flex-col p-4 font-bold gap-8 me-1 -mt-7 h-screen fixed ${theme === 'light' ? 'bg-cyan-400 text-black' : 'bg-black text-white'}`}>

                    <h3 className="text-xl font-extrabold my-5">Education Management</h3>
                    <li>
                      <NavLink to='/dashboard/studentHome' className="text-center rounded">Student Home</NavLink>
                    </li>

                    <li>
                      <NavLink to='/dashboard/myEnroll' className="text-center rounded">My Enroll</NavLink>
                    </li>

                    <li>
                      <NavLink to='/dashboard/payment' className="text-center rounded">Payment</NavLink>
                    </li>

                    <li>
                      <NavLink to='/dashboard/paymentsHistory' className="text-center rounded">Payment History</NavLink>
                    </li>

                    <li>
                      <NavLink to='/dashboard/feedback' className="text-center rounded">Feedback</NavLink>
                    </li>

                    <li>
                      <NavLink to='/dashboard/myProfile' className="text-center rounded">My Profile</NavLink>
                    </li>

                    <li>
                      <NavLink to='/' className="text-center rounded">Home</NavLink>
                    </li>

                  </div>
                </div>
                :
                <>
                  {isUser?.teacher &&

                    <div className="col-span-2">

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
                        <div className={`menu dropdown-content bg-cyan-400 md:flex flex-col p-4 font-bold gap-5 z-[1] w-80 ${theme === 'light' ? 'text-black' : 'text-white'}`}>
                          <li>
                            <NavLink to='/dashboard/teacherHome' className="text-center rounded">Teacher Home</NavLink>
                          </li>

                          <li>
                            <NavLink to='/dashboard/addClass' className="text-center rounded">Add Class</NavLink>
                          </li>

                          <li>
                            <NavLink to='/dashboard/yourClasses' className="text-center rounded">My Class</NavLink>
                          </li>

                          <li>
                            <NavLink to='/dashboard/myProfile' className="text-center rounded">My Profile</NavLink>
                          </li>

                          <li>
                            <NavLink to='/' className="text-center rounded">Home</NavLink>
                          </li>

                        </div>
                      </div>

                    
                      <div className={`menu hidden md:flex flex-col p-4 font-bold gap-8 me-1 -mt-7 h-screen fixed ${theme === 'light' ? 'bg-cyan-400 text-black' : 'bg-black text-white'}`}>

                        <h3 className="text-xl font-extrabold my-5">Education Management</h3>

                        <li>
                          <NavLink to='/dashboard/teacherHome' className="text-center rounded">Teacher Home</NavLink>
                        </li>

                        <li>
                          <NavLink to='/dashboard/addClass' className="text-center rounded">Add Class</NavLink>
                        </li>

                        <li>
                          <NavLink to='/dashboard/yourClasses' className="text-center rounded">My Class</NavLink>
                        </li>

                        <li>
                          <NavLink to='/dashboard/myProfile' className="text-center rounded">My Profile</NavLink>
                        </li>

                        <li>
                          <NavLink to='/' className="text-center rounded">Home</NavLink>
                        </li>

                      </div>

                      {/* <div className="menu bg-cyan-400 flex flex-col p-4 font-bold gap-5">

                        <li>
                          <NavLink to='/' className="text-center rounded">Home</NavLink>
                        </li>

                      </div> */}
                    </div>
                  }
                </>
            }
          </>

      }



      <div className={`col-span-8 ${theme === 'dark' ? 'bg-black' : ''}`}>
        <Outlet></Outlet>
      </div>

      {/* <div className={`hidden md:block text-white ${theme === 'dark' ? 'bg-black' : 'bg-cyan-400'}`}>
        <h2 className="text-3xl">Here's your Awesome Dashboard</h2>
      </div> */}

    </div >
  );
};

export default Dashboard;