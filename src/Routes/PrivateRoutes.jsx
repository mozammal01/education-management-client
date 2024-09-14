import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const PrivateRoutes = ({children}) => {
  const {user, loading} = useAuth();

  const location = useLocation();

  if(loading){
    return <div className="text-center my-64"><progress className="progress w-56"></progress></div>
  }

  if(user){
    return children;
  }

  return (
    <Navigate to="/signIn" state={location.pathname}>
      
    </Navigate >
  );
};

export default PrivateRoutes;