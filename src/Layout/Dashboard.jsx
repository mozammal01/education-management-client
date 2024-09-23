import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";
import useAuth from "../Hooks/useAuth";
import useTeacher from "../Hooks/useTeacher";

const Dashboard = () => {
  const { user, loading } = useAuth();
  const [isAdmin] = useAdmin({ enabled: !loading && !!user?.email, user });
  const [isTeacher] = useTeacher({ enabled: !loading && !!user?.email, user })

  return (
    <div className="grid grid-cols-6 min-h-screen">

      {
        isAdmin ?

          <>
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
                <NavLink to='/dashboard/teachers' className="text-center rounded">Teachers</NavLink>
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
          </>
          :

          <>


            {
              isTeacher ? <div className="menu bg-cyan-400 flex flex-col p-4 font-bold gap-5">

                <li>
                  <NavLink to='/dashboard/teacherHome' className="text-center rounded">Teacher Home</NavLink>
                </li>

                <li>
                  <NavLink to='/dashboard/requestForTeacher' className="text-center rounded">Add Class</NavLink>
                </li>

                <li>
                  <NavLink to='/dashboard/allUsers' className="text-center rounded">All Users</NavLink>
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

              </div> :

                <div className="menu bg-cyan-400 flex flex-col p-4 font-bold gap-5">

                  <li>
                    <NavLink to='/dashboard/enrollClass' className="text-center rounded">My Enroll Class</NavLink>
                  </li>

                  <li>
                    <NavLink to='/dashboard/profile' className="text-center rounded">Profile</NavLink>
                  </li>

                </div>

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