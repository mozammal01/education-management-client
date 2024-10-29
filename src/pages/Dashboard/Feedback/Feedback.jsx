import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useForm } from "react-hook-form";
import useAuth from "../../../Hooks/useAuth";

const Feedback = () => {

  const {user} = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: courses } = useQuery({
    queryKey: ['courses'],
    queryFn: async () => {
      const res = await axiosSecure.get('/courses')
      return res.data
    }
  })


  const {email, displayName, photoURL} = user;

  const { register, handleSubmit, formState:{errors}, reset } = useForm();

  const onSubmit = async(data) => {

    const feedback = {
      email,
      displayName,
      photoURL,
      title: data?.title,
      feed: data?.feed
    }

    const res = await axiosSecure.post('/feedback', feedback)
    reset();
    console.log(res.data);

    // console.log(feedback);

  }


  return (
    <div>

      <h1 className="text-5xl text-center font-bold">Feedback</h1>

      <form className=" my-20 space-y-10" onSubmit={handleSubmit(onSubmit)}>

        <select {...register('title')} className="select select-bordered w-full">
          {
            courses?.map(course => <option key={course?._id}>{course?.title}</option>)
          }
        </select>

        <textarea {...register('feed', { required: true })} className="textarea textarea-bordered w-full min-h-40" placeholder="Enter Your Feedback"></textarea>
        {errors.feed && <span className="text-red-600 font-bold">This field is required</span>}

        <input className="btn btn-primary w-full text-white" type="submit" />
      </form>

    </div>
  );
};

export default Feedback;