import { Link, useParams } from "react-router-dom";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const PopularCourseDetails = () => {
  const axiosSecure = useAxiosSecure();

  const params = useParams();
  const id = params.id;

  const { data: courseDetails } = useQuery({
    queryKey: ['courseDetails'],
    queryFn: async () => {
      const res = await axiosSecure.get(`/courses/${id}`)
      console.log(res.data);
      return res.data
    }
  })


  return (
    <div>
      <div>
        <img className="max-h-screen min-w-full" src={courseDetails?.image_url} alt="" />
      </div>
      <div className="text-center space-y-5 my-10">
        <h1 className="text-5xl">{courseDetails?.title}</h1>
        <p className="text-2xl">{courseDetails?.description}</p>
        <p>Rating : <span className="font-extrabold">{courseDetails?.rating}</span></p>
        <p className="btn btn-outline">{courseDetails?.category}</p>
        <br />
        <Link state={courseDetails} to="/dashboard/payment"><div className="btn bg-black text-white hover:text-black my-5">Pay: {courseDetails?.enrollment}</div></Link>
      </div>
    </div>
  );
};

export default PopularCourseDetails;