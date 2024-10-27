import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import useUser from "../Hooks/useUser";

const AdminRoutes = ({ children }) => {
  const { user, loading } = useAuth();

  const [isUser, isUserLoading] = useUser({ enabled: !loading && !!user?.email, user });


  const location = useLocation();

  if (loading || isUserLoading) {
    return <div className="text-center my-64"><progress className="progress w-56"></progress></div>
  }

  if (user && isUser) {
    return children;
  }

  return (
    <Navigate to="/" state={location.pathname}>

    </Navigate >
  );
};

export default AdminRoutes;