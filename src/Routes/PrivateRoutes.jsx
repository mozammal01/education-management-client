import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const PrivateRoutes = ({children}) => {
  const {user, loading} = useAuth();

  const location = useLocation();

  console.log(location);

  if(loading){
    return <progress className="progress w-56"></progress>
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