import { NavLink, Outlet } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import useUser from "../Hooks/useUser";
// import useTeacher from "../Hooks/useTeacher";

const Dashboard = () => {
  const { user, loading } = useAuth();
  const [isUser] = useUser({ enabled: !loading && !!user?.email, user });
  // const [isTeacher] = useTeacher({ enabled: !loading && !!user?.email, user })

  return (
    <div className="grid grid-cols-6 min-h-screen">

      {
        isUser?.admin ?

          // Admin
          <div className="menu bg-cyan-400 flex flex-col p-4 font-bold gap-5">

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
              <NavLink to='/dashboard/students' className="text-center rounded">Students</NavLink>
            </li>

            <li>
              <NavLink to='/dashboard/pendingClasses' className="text-center rounded">Pending Classes</NavLink>
            </li>

            <li>
              <NavLink to='/' className="text-center rounded">Home</NavLink>
            </li>

          </div>

          :
          <>
            {
              isUser.student ?

                // Students
                <div className="menu bg-cyan-400 flex flex-col p-4 font-bold gap-5">

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
                    <NavLink to='/dashboard/allClass' className="text-center rounded">All Classes</NavLink>
                  </li>

                  <li>
                    <NavLink to='/dashboard/feedback' className="text-center rounded">Feedback</NavLink>
                  </li>

                  <li>
                    <NavLink to='/' className="text-center rounded">Home</NavLink>
                  </li>

                </div>

                :
                <>
                  {isUser.teacher ?


                    // Teachers
                    <div className="menu bg-cyan-400 flex flex-col p-4 font-bold gap-5">

                      <li>
                        <NavLink to='/dashboard/teacherHome' className="text-center rounded">Teacher Home</NavLink>
                      </li>

                      <li>
                        <NavLink to='/dashboard/requestForTeacher' className="text-center rounded">Add Class</NavLink>
                      </li>

                      <li>
                        <NavLink to='/dashboard/yourClasses' className="text-center rounded">Your Classes</NavLink>
                      </li>

                      <li>
                        <NavLink to='/dashboard/teachers' className="text-center rounded">Teachers</NavLink>
                      </li>

                      <li>
                        <NavLink to='/dashboard/students' className="text-center rounded">Students</NavLink>
                      </li>

                      <li>
                        <NavLink to='/' className="text-center rounded">Home</NavLink>
                      </li>

                    </div>
                    :
                    <div className="menu bg-cyan-400 flex flex-col p-4 font-bold gap-5">

                      <li>
                        <NavLink to='/' className="text-center rounded">Home</NavLink>
                      </li>

                    </div>
                  }
                </>
            }
          </>

      }



      <div className="col-span-4 mx-5">
        <Outlet></Outlet>
      </div>

      <div className="bg-cyan-400 text-white">
        <h2 className="text-3xl">Here's your Awesome Dashboard</h2>
      </div>

    </div>
  );
};

export default Dashboard;