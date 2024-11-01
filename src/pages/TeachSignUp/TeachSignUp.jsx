import { Helmet } from 'react-helmet-async';
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from '../../Hooks/useAxiosSecure';


const TeachSignUp = () => {

  const navigate = useNavigate();
  const { user, theme } = useAuth();
  console.log(user);
  const axiosSecure = useAxiosSecure();

  const { photoURL } = user;


  // Form 
  const { register, reset, handleSubmit, formState: { errors } } = useForm()

  const onSubmit = (data) => {
    console.log(data);
    const role = 'requested for teacher'
    const { name, email, experience, category } = data;
    const teachersData = { name, photoURL, email, experience, category, role }

    reset();
    axiosSecure.patch(`/users/teachers/request/${user?.email}`, teachersData)
      .then(res => {
        console.log(res.data);
        navigate('/')
      })
    // axiosSecure.delete(`/users/${email}`)
    //   .then(res => {
    //     console.log(res.data);
    //   })
    //   .catch(err => {
    //     console.error(err);
    //   })
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Request Submitted To Admin",
      showConfirmButton: false,
      timer: 1500
    });

  }


  return (
    <>
      <Helmet>
        <title>EDU || TEACH Sign UP</title>
      </Helmet>
      <div className="flex items-center justify-center py-10 md:bg-gradient-to-br from-blue-500 to-purple-600">

        <div onSubmit={handleSubmit(onSubmit)} className={`w-96 max-w-md p-8 space-y-6 rounded-lg shadow-lg ${theme === 'dark' ? 'bg-slate-900 text-white' : 'bg-white text-gray-600'}`}>

          <h2 className="text-2xl font-bold text-center">Teacher Sign Up</h2>

          {/* Form */}
          <form className="space-y-5">

            {/* Name */}
            <div className="space-y-2">
              <label className="font-bold">Name</label>

              <input
                {...register('name')}
                type="text"
                id="name"
                placeholder="Enter Your Name"
                className="w-full px-4 py-2 mb-5 text-gray-900 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

            </div>

            {/* Experience */}
            <div className="space-x-2">
              <label className="font-bold">Experience</label>

              <select className="border-2 rounded-xl p-1" {...register("experience")}>
                <option value="beginner">Beginner</option>
                <option value="midLevel">Mid level</option>
                <option value="experienced">Experienced</option>
              </select>
            </div>

            {/* Email */}
            <div className="space-y-2">
              <label className="font-bold">Email</label>

              <input
                {...register('email', { required: true })}
                type="email"
                value={user?.email}
                id="email"
                placeholder="Enter Your Email"
                className="w-full px-4 py-2 mb-5 text-gray-900 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              {errors.email && <span className="text-red-600 font-bold pt-4">Your Email is Empty</span>}

            </div>

            {/* Category */}
            <div className="space-x-2">
              <label className="font-bold">Category</label>

              <select className="border-2 rounded-xl p-1" {...register("category")}>
                <option value="WD">Web Development</option>
                <option value="DM">Digital Marketing</option>
                <option value="AD">App Development</option>
                <option value="AI">Artifitial Intelligent</option>
                <option value="GD">Graphic Design</option>
              </select>
            </div>

            {/* Submit */}
            <div className="text-center">
              <button
                type="submit"
                className="w-full px-6 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">Submit for review</button>
            </div>

          </form>

        </div>

      </div>
    </>
  );
};

export default TeachSignUp;