import { useForm } from "react-hook-form";
import useAuth from "../../../Hooks/useAuth";
import axios from "axios";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const UpdateClass = () => {

  const axiosSecure = useAxiosSecure();

  const { user } = useAuth();

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
      name: data?.name,
      email: data?.email,
      title: data?.title,
      category: data?.category,
      price: data?.price,
      description: data?.description,
      photoUrl: response?.data.url,
    }

    console.log(classData);
    const res = await axiosSecure.post('/pendingClass', classData)
    console.log(res.data);
    if (res.data.insertedId) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: 'Wait for admin approve',
        showConfirmButton: false,
        timer: 1500
      });
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
          <input type="text" placeholder="Enter Title" className="input input-bordered"  {...register("title", { required: true })} />
          {errors.title && <span className="text-red-600 font-bold">This field is required</span>}
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
            <input type="number" className="input input-bordered w-full [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" placeholder="Enter Price" {...register("price", { required: true })} />
            {errors.price && <span className="text-red-600 font-bold">This field is required</span>}
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
            <input type="file" className="file-input file-input-bordered w-full max-w-xs" {...register("photoUrl", { required: true })} />
          </label>
        </div>


        <div className="">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <textarea {...register('description', { required: true })} className="textarea textarea-bordered w-full min-h-40" placeholder="Description"></textarea>
          {errors.description && <span className="text-red-600 font-bold">This field is required</span>}
        </div>

        <input className="btn btn-primary w-full text-white" type="submit" value='Update Class' />
      </form>
    </div>
  );
};

export default UpdateClass;