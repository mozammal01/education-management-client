import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const AllCourses = () => {
  const axiosSecure = useAxiosSecure();
  const { data: courses } = useQuery({
    queryKey: ['courses'],
    queryFn: async () => {
      const res = await axiosSecure.get('/courses')
      return res.data
    }
  })

  return (
    <div>
      <div className="mt-20 mb-5 text-center">
        <h1 className="text-5xl">All Courses: {courses?.length}</h1>
      </div>
      <div className="grid grid-cols-3">
        {
          courses?.map(course =>
            <div key={course?._id} className="card bg-base-100 w-96 shadow-xl max-h-[450px] my-10 mx-auto">
              <figure>
                <img
                  src={course.image_url}
                  alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  {course.title}
                  <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>{course.description}</p>
                <div className="card-actions items-center justify-end">
                  <div className="badge badge-outline">{course.category}</div>
                  <div className="btn btn-outline"><Link to={`/courseDetails/${course._id}`}>Enroll: {course.enrollment} TK</Link></div>
                </div>
              </div>
            </div>)
        }
      </div>
    </div>
  );
};

export default AllCourses;