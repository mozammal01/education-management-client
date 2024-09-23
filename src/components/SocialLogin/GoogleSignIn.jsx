import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { FcGoogle } from "react-icons/fc";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const GoogleSignIn = () => {
  const { googleLogin } = useAuth();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const location = useLocation();

  const handleGoogleLogin = () => {
    googleLogin()
      .then(result => {
        const userInfo = {
          name: result?.user?.displayName,
          email: result?.user?.email,
          photoUrl: result?.user?.photoURL,
          role: result?.user?.role || 'student',
        }
        axiosPublic.post('/users', userInfo)
          .then(res => {
            console.log(res.data);
            navigate(location.state || '/')
          })
          .catch(err => {
            console.error(err);
          })
      })
  }

  return <button onClick={handleGoogleLogin} className="flex bg-slate-300 justify-center gap-2 p-2 items-center rounded w-full font-semibold transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300"> <FcGoogle className="text-3xl" />
    Sign In With Google</button>
};

export default GoogleSignIn;