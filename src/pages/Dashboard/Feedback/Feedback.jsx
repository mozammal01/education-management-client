import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const Feedback = () => {

  const axiosSecure = useAxiosSecure();
  const { data: courses } = useQuery({
    queryKey: ['courses'],
    queryFn: async () => {
      const res = await axiosSecure.get('/courses')
      return res.data
    }
  })


  return (
    <div className="my-20 space-y-10">

      <h1 className="text-5xl text-center font-bold">Feedback</h1>

      <select className="select select-bordered w-full">
        {
          courses?.map(course => <option key={course?._id}>{course?.title}</option>)
        }
      </select>

      <textarea className="textarea textarea-bordered w-full min-h-40" placeholder="Enter Your Feedback"></textarea>

      <button className="btn btn-info w-full text-white">Submit</button>

    </div>
  );
};

export default Feedback;