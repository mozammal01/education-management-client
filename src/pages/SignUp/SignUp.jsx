import { useState } from "react";
import { Helmet } from 'react-helmet-async';
import { useForm } from "react-hook-form"
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { FcGoogle } from "react-icons/fc";


const SignUp = () => {

  const navigate = useNavigate();
  const { createUser, googleLogin, updateUserProfile } = useAuth();
  const axiosPublic = useAxiosPublic();

  const handleGoogleLogin = () => {
    googleLogin()
      .then(result => {
        navigate('/')
        console.log(result);
      })
      .catch(err => {
        console.error(err);
      })
  }

  // Form 
  const { register, reset, handleSubmit, formState: { errors } } = useForm()

  const onSubmit = (data) => {
    const { pass1, pass2, name, photoUrl, email } = data;
    if (pass1 === pass2) {
      createUser(email, pass1)
        .then(result => {
          updateUserProfile(name, photoUrl)
            .then(() => { })
            .catch(() => { })
          reset();
          navigate('/')
          axiosPublic.post('/users', data)
            .then(res => {
              // console.log(res.data);
              navigate('/')
            })
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Sign Up successfull",
            showConfirmButton: false,
            timer: 1500
          });
        })
        .catch(err => {
          console.log(err);
        })
    }
    else {
      console.log('I am not a gay try to another person');
      Swal.fire("Password doesn't match");
    }
    console.log(data, name)
  }


  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const togglePasswordVisibility2 = () => {
    setShowPassword2(!showPassword2);
  };

  return (
    <>
      <Helmet>
        <title>EDU || Sign UP</title>
      </Helmet>
      <div className="flex items-center justify-center py-10 md:bg-gradient-to-br from-blue-500 to-purple-600">

        <div onSubmit={handleSubmit(onSubmit)} className="w-96 max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg">

          <h2 className="text-2xl font-bold text-center text-gray-800">Sign Up</h2>

          {/* Form */}
          <form className="space-y-5">

            {/* First Name */}
            <div className="space-y-2">
              <label className="text-gray-600 font-bold">Name</label>

              <input
                {...register('name')}
                type="text"
                id="name"
                placeholder="Enter Your Name"
                className="w-full px-4 py-2 mb-5 text-gray-900 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

            </div>

            {/* Photo Url */}
            <div className="space-y-2">
              <label className="text-gray-600 font-bold">Photo Url</label>

              <input
                {...register('photoUrl')}
                type="text"
                id="photoUrl"
                placeholder="Photo Url"
                className="w-full px-4 py-2 mb-5 text-gray-900 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Role */}
            <div className="space-y-2">
              <label className="text-gray-600 font-bold">Role</label>

              <select {...register("role")}>
                <option disabled value="Select a Role">Select a Role</option>
                <option value="student">Student</option>
                <option value="teacher">Teacher</option>
              </select>
            </div>

            {/* Email */}
            <div className="space-y-2">
              <label className="text-gray-600 font-bold">Email</label>

              <input
                {...register('email', { required: true })}
                type="email"
                id="email"
                placeholder="Enter Your Email"
                className="w-full px-4 py-2 mb-5 text-gray-900 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              {errors.email && <span className="text-red-600 font-bold pt-4">Your Email is Empty</span>}

            </div>

            {/* Password */}
            <div className="space-y-2">
              <label className="text-gray-600 font-bold">Password</label>

              <input
                {...register('pass1', { required: true })}
                type={showPassword ? "text" : "password"}
                id="pass1"
                placeholder="Enter Your Password"
                className="w-full px-4 py-2 text-gray-900 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              {errors.pass1 && <span className="text-red-600 font-bold pt-4">Your Password is Empty</span>}

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

            {/* Confirm Password */}
            <div className="space-y-2">
              <label className="text-gray-600 font-bold">Confirm Password</label>

              <input
                {...register('pass2', { required: true })}
                type={showPassword2 ? "text" : "password"}
                id="pass2"
                placeholder="Confirm Your Password"
                className="w-full px-4 py-2 text-gray-900 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              {errors.pass2 && <span className="text-red-600 font-bold pt-4">Your Password is Empty</span>}

            </div>

            {/* Show Password */}
            <div className="flex items-center space-x-2 -space-y-2">
              <input
                type="checkbox"
                id="show-password2"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                checked={showPassword2}
                onChange={togglePasswordVisibility2}
              />
              <label htmlFor="show-password2" className=" text-gray-600 font-semibold">Show Password</label>

            </div>

            {/* Gender */}



            {/* Submit */}
            <div className="text-center">
              <button
                type="submit"
                className="w-full px-6 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">Sign Up</button>
            </div>

            <p>Already have an Account ? <Link to="/signIn" className="font-bold underline">Sign In</Link></p>

          </form>

          <button onClick={handleGoogleLogin} className="flex bg-slate-300 justify-center gap-2 p-2 items-center rounded w-full font-semibold transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300"> <FcGoogle className="text-3xl" />
            Sign In With Google</button>

        </div>

      </div>
    </>
  );
};

export default SignUp;