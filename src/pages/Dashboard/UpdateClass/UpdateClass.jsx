import { useForm } from "react-hook-form";
import useAuth from "../../../Hooks/useAuth";
import axios from "axios";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const UpdateClass = () => {

  const [course, setCourse] = useState(null)
  const { user } = useAuth();

  const id = useParams();

  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate(); 

  useEffect(() => {
    axiosSecure.get(`/courses/${id.id}`)
      .then(result => {
        setCourse(result.data)
      })
      .catch(err => {
        console.error(err);
      })

  }, [])

  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const onSubmit = async (data) => {

    const file = data?.photoUrl[0];

    const data2 = new FormData()
    data2.append("file", file)
    data2.append("upload_preset", "education_management")
    data2.append("cloud_name", "mozammal01")

    const response = await axios.post("https://api.cloudinary.com/v1_1/mozammal01/image/upload", data2);

    console.log('Image uploaded successfully:', response.data);

    const classData = {
      title: data?.title,
      category: data?.category,
      price: data?.price,
      description: data?.description,
      photoUrl: response?.data.url,
    }

    const res = await axiosSecure.patch(`/courses/update/${id.id}`, classData)
    console.log(res.data);

    if (res.data.modifiedCount > 0) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: 'Class Updated',
        showConfirmButton: false,
        timer: 1500
      });
      navigate('/dashboard/yourClasses')
    }
    reset();
  };

  return (
    <div>
      <h1 className="text-5xl text-center text-red-600 font-bold">Update Class</h1>
      <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>

        {/* Title */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Title</span>
          </label>
          <input type="text" defaultValue={course?.title} placeholder="Enter Title" className="input input-bordered"  {...register("title")} />
          {/* {errors.title && <span className="text-red-600 font-bold">This field is required</span>} */}
        </div>

        <div className="flex gap-5">

          {/* Name */}
          <div className="w-1/2">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input type="text" value={user?.displayName} className="input input-bordered w-full"  {...register("name")} required />
          </div>

          {/* Email */}
          <div className="w-1/2">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="text" value={user?.email} className="input input-bordered w-full"  {...register("email")} required />
          </div>
        </div>


        <div className="flex gap-5">

          {/* Price */}
          <div className="w-1/2">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input type="number" defaultValue={course?.enrollment} className="input input-bordered w-full [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" placeholder="Enter Price" {...register("price")} />
            {/* {errors.price && <span className="text-red-600 font-bold">This field is required</span>} */}
          </div>

          {/* Category */}
          <div className="w-1/2">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <select {...register('category')} className="select select-bordered w-full">
              <option value="WD">Web Development</option>
              <option value="DM">Digital Marketing</option>
              <option value="AD">App Development</option>
              <option value="AI">Artifitial Intelligent</option>
              <option value="GD">Graphic Design</option>
            </select>
          </div>

        </div>
        {/* Image Url */}
        <div className="w-full">
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Image Url</span>
            </div>
            <input type="file" defaultValue={course?.image_url} className="file-input file-input-bordered w-full max-w-xs" {...register("photoUrl")} />
          </label>
        </div>


        <div className="">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <textarea defaultValue={course?.description} {...register('description')} className="textarea textarea-bordered w-full min-h-40" placeholder="Description"></textarea>
          {/* {errors.description && <span className="text-red-600 font-bold">This field is required</span>} */}
        </div>

        <input className="btn btn-primary w-full text-white" type="submit" value='Update Class' />
      </form>
    </div>
  );
};

export default UpdateClass;