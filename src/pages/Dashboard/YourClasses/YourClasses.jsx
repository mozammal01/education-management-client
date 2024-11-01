import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { BiEdit, BiTrash } from "react-icons/bi";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const YourClasses = () => {

  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();

  const { data: yourClasses } = useQuery({
    queryKey: ['yourClasses'],
    queryFn: async () => {
      const res = await axiosSecure.get(`/courses/your/${user?.email}`)
      return res.data
    }
  })

  const handleUpdate = (id) => {
    navigate('/dashboard/updateClass')
  }

  const handleDelete = async (id) => {
    Swal.fire({
      title: "Are you a sure you want to delete this user?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Delete It!"
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/courses/${id}`)
          .then(res => {
            console.log(res.data);
            if (res.data.deletedCount > 0) {
              refetch();
              Swal.fire({
                title: "Deleted!",
                text: "Class Deleted successfull",
                icon: "success"
              });
            }
          });
      }
    })


  }


  return (
    <div className="my-10">
      <h1 className="text-4xl text-center text-red-500 font-bold">Your Classes: {yourClasses?.length}</h1>
      <div className="grid grid-cols-2 gap-5 my-20">
        {
          yourClasses?.map(course =>
            <div key={course?._id} className="card bg-base-100 w-96 shadow-xl max-h-[450px] my-10 mx-auto">
              <figure>
                <img
                  src={course.image_url}
                  alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  {course.title}
                </h2>
                {/*  */}
                <div className="bg-base-200 collapse my-2">
                  <input type="checkbox" className="peer" />
                  <div
                    className="collapse-title ">
                    About this Course
                  </div>
                  <div
                    className="collapse-content">
                    <p>{course?.description}</p>
                  </div>
                </div>
                <div className="my-2">
                  <p className="badge badge-outline me-2">{course?.name}</p>
                  <p className="badge badge-outline">{course?.email}</p>
                </div>
                <div className="card-actions items-center justify-between">
                  <div>
                    <div className="badge badge-neutral text-white me-5">{course.category}</div>
                    <div className="btn btn-outline">{course.enrollment} TK</div>
                  </div>
                  {/*  */}
                  <div>
                    <div className=""><button onClick={handleUpdate} className="text-3xl bg-green-600 rounded-xl text-white p-2 my-2"><BiEdit></BiEdit></button></div>
                    <div className=""><button onClick={() => handleDelete(course?._id)} className="text-3xl bg-red-600 rounded-xl text-white p-2 my-2"><BiTrash></BiTrash></button></div>
                  </div>
                </div>
              </div>
            </div>)
        }
      </div>
    </div>
  );
};

export default YourClasses;