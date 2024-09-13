import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="grid grid-cols-5 min-h-screen">

      <div className="bg-cyan-400 flex flex-col p-4 font-bold gap-5">
        <NavLink to='/dashboard/allUsers' className="text-center rounded">All Users</NavLink>
        <NavLink to='/' className="text-center rounded">Home</NavLink>
        <NavLink to='/' className="text-center rounded">Home</NavLink>
        <NavLink to='/' className="text-center rounded">Home</NavLink>
        <NavLink to='/' className="text-center rounded">Home</NavLink>
        <NavLink to='/' className="text-center rounded">Home</NavLink>
        <NavLink to='/' className="text-center rounded">Home</NavLink>
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