import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import useAdmin from "../Hooks/useAdmin";

const AdminRoutes = ({ children }) => {
  const { user, loading } = useAuth();

  const [isAdmin, isAdminLoading] = useAdmin({ enabled: !loading && !!user?.email, user });


  const location = useLocation();

  if (loading || isAdminLoading) {
    return <div className="text-center my-64"><progress className="progress w-56"></progress></div>
  }

  if (user && isAdmin) {
    return children;
  }

  return (
    <Navigate to="/" state={location.pathname}>

    </Navigate >
  );
};

export default AdminRoutes;