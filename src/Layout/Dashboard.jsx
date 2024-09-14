import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="grid grid-cols-5 min-h-screen">

      <div className="menu bg-cyan-400 flex flex-col p-4 font-bold gap-5">

        <li>
          <NavLink to='/dashboard/allUsers' className="text-center rounded">All Users</NavLink>
        </li>

        <li>
          <NavLink to='/' className="text-center rounded">Home</NavLink>
        </li>

        <li>
          <NavLink to='/' className="text-center rounded">Home</NavLink>
        </li>

        <li>
          <NavLink to='/' className="text-center rounded">Home</NavLink>
        </li>

        <li>
          <NavLink to='/' className="text-center rounded">Home</NavLink>
        </li>

        <li>
          <NavLink to='/' className="text-center rounded">Home</NavLink>
        </li>

        <li>
          <NavLink to='/' className="text-center rounded">Home</NavLink>
        </li>

      </div>

      <div className="col-span-3 mx-5">
        <Outlet></Outlet>
      </div>

      <div className="bg-cyan-400 text-white">
        <h2 className="text-3xl">Here's your Awesome Dashboard</h2>
      </div>

    </div>
  );
};

export default Dashboard;