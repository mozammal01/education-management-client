import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { RxCross2 } from "react-icons/rx";
import { MdDone } from "react-icons/md";

const RequestForTeacher = () => {

  const axiosSecure = useAxiosSecure();

  const { data: teachers, refetch } = useQuery({
    queryKey: ['teachers'],
    queryFn: async () => {
      const res = await axiosSecure.get('/teachers')
      return res.data
    }
  })

  // Make Teacher
  const handleMakeTeacher = (id) => {
    axiosSecure.patch(`/teachers/${id}`)
      .then(res => {
        console.log(res.data);
      })
      .catch(err => {
        console.error(err);
      })
  }


  const handleDelete = (id) => {
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
        axiosSecure.delete(`/teachers/${id}`)
          .then(res => {
            console.log(res.data);
            if (res.data.deletedCount > 0) {
              refetch();
              Swal.fire({
                title: "Deleted!",
                text: "The User Deleted successfull",
                icon: "success"
              });
            }
          });
      }
    })
  }

  return (
    <div className="my-10">

      <div className="text-red-500 font-bold text-center text-4xl my-10">
        Teachers: {teachers?.length}
      </div>

      <div>

        <table className="table">

          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Approve</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {
              teachers?.map((teacher, i) => <tr key={i}>
                <th>{i + 1}</th>
                <td>{teacher?.name}</td>
                <td>{teacher?.email}</td>
                <td><button onClick={() => handleMakeTeacher(teacher?._id)} className="text-3xl bg-green-600 rounded-xl text-white p-2 my-2"><MdDone /></button></td>
                <td><button onClick={() => handleDelete(teacher?._id)} className="text-3xl bg-red-600 rounded-xl text-white p-2 my-2"><RxCross2 /></button></td>
              </tr>)
            }
          </tbody>
        </table>
      </div>

    </div>
  );
};

export default RequestForTeacher;