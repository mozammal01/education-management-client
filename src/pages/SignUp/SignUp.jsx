import { useState } from "react";
import { useForm } from "react-hook-form"
import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const SignUp = () => {

  // Form 
  const { register, reset, handleSubmit, formState: { errors } } = useForm()

  const onSubmit = (data) => {
    const {pass1, pass2} = data;
    if (pass1 === pass2) {
      console.log('Fuck You');
      Swal.fire("Login Successfull");
      reset();
    }
    else {
      console.log('I am not a gay try to another person');
      Swal.fire("Password doesn't match");
    }
    console.log(data)
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
    <div className="flex items-center justify-center py-10 md:bg-gradient-to-br from-blue-500 to-purple-600">

      <div className="w-96 max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg">

        <h2 className="text-2xl font-bold text-center text-gray-800">Sign Up</h2>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

          <div className="flex gap-5">
            {/* First Name */}
            <div className="space-y-2">
              <label className="text-gray-600 font-bold">First Name</label>

              <input
                {...register('fName')}
                type="text"
                id="fName"
                placeholder="First Name"
                className="w-full px-4 py-2 mb-5 text-gray-900 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Last Name */}
            <div className="space-y-2">
              <label className="text-gray-600 font-bold">Last Name</label>

              <input
                {...register('lName')}
                type="text"
                id="lName"
                placeholder="Last Name"
                className="w-full px-4 py-2 mb-5 text-gray-900 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

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
          {/* <select {...register("gender")}>
            <option disabled value="Select a Gender">Select a gender</option>
            <option value="female">female</option>
            <option value="male">male</option>
            <option value="other">other</option>
          </select> */}


          {/* Submit */}
          <div className="text-center">
            <button
              type="submit"
              className="w-full px-6 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">Sign Up</button>
          </div>

          <p>Already have an Account ? <Link to="/signIn" className="font-bold underline">Sign In</Link></p>

        </form>

      </div>

    </div>
  );
};

export default SignUp;