import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form"
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import GoogleSignIn from "../../components/SocialLogin/GoogleSignIn";


const SignIn = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const { signIn } = useAuth();



  // Form 
  const { register, reset, handleSubmit, formState: { errors } } = useForm()

  const onSubmit = (data) => {
    signIn(data.email, data.password)
      .then(result => {
        reset();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Sign In Successfull",
          showConfirmButton: false,
          timer: 1500
        });
        navigate(location.state || '/')
      })
      .catch(err => {
        console.error(err);
      })
    console.log(data)
  }


  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>

      <Helmet>
        <title>EDU || Sign IN</title>
      </Helmet>

      <div className="flex items-center justify-center min-h-screen md:bg-gradient-to-br from-blue-500 to-purple-600">

        <div className="w-80 max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg my-10">

          <h2 className="text-2xl font-bold text-center text-gray-800">Sign In</h2>

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

            {/* Email */}
            <div className="space-y-2">
              <label className="text-gray-600 font-bold">Email</label>

              <input
                {...register('email', { required: true })}
                type="email"
                id="username"
                placeholder="Enter Your Email"
                className="w-full px-4 py-2 mb-5 text-gray-900 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              {errors.email && <span className="text-red-600 font-bold pt-4">Your Email is Empty</span>}

            </div>

            {/* Password */}
            <div className="space-y-2">
              <label className="text-gray-600 font-bold">Password</label>

              <input
                {...register('password', { required: true })}
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="Enter Your Password"
                className="w-full px-4 py-2 text-gray-900 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              {errors.password && <span className="text-red-600 font-bold pt-4">Your Password is Empty</span>}

            </div>

            {/* Show Password */}
            <div className="flex items-center space-x-2 -space-y-2">
              <input
                type="checkbox"
                id="show-password"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                checked={showPassword}
                onChange={togglePasswordVisibility}
              />
              <label htmlFor="show-password" className=" text-gray-600 font-semibold">Show Password</label>

            </div>

            {/* Gender */}
            {/* <select {...register("gender")}>
            <option value="female">female</option>
            <option value="male">male</option>
            <option value="other">other</option>
          </select> */}


            {/* Submit */}
            <div className="text-center">
              <button
                type="submit"
                className="w-full px-6 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">Sign In</button>
            </div>

            <p>Do not have an Account ? <Link to="/signUp" className="font-bold underline">Sign Up</Link></p>

          </form>

          <GoogleSignIn></GoogleSignIn>

        </div>

      </div>
    </>
  );
};

export default SignIn;