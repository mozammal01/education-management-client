import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { MdDone } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import Swal from "sweetalert2";

const PendingClass = () => {

  const axiosSecure = useAxiosSecure();

  const { data: pendingClasses, refetch } = useQuery({
    queryKey: ['pendingClasses'],
    queryFn: async () => {
      const res = await axiosSecure.get('/pendingClass')
      return res.data
    }
  })

  const handleApprove = async (data, id) => {

    const courseData = {
      image_url: data?.photoUrl,
      enrollment: data?.price,
      category: data?.category,
      description : data?.description,
      email : data?.email,
      name : data?.name,
      title : data?.title}
    console.log('Aprroved', data, courseData);

    const res = await axiosSecure.post('/courses', courseData)
    console.log('Course Added Successfull', res.data);

    if (res.data.insertedId) {
      const res = await axiosSecure.delete(`/pendingClass/${id}`)
      console.log(res.data);
      if (res.data.deletedCount > 0) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: 'Class Approved',
          showConfirmButton: false,
          timer: 1500
        });
        refetch();
      }
    }
  }

  const handleDelete = async (id) => {
    const res = await axiosSecure.delete(`/pendingClass/${id}`)

    console.log(res.data);

    if (res.data.deletedCount > 0) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: 'Class Deleted',
        showConfirmButton: false,
        timer: 1500
      });
      refetch();
    }
  }

  return (
    <div className="my-10">
      <h1 className="text-4xl text-center text-red-500 font-bold">Pending Class: {pendingClasses?.length}</h1>
      <div>

        <table className="table my-20">

          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Course</th>
              <th>Email</th>
              <th>Price</th>
              <th>Name</th>
              <th>Approve</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {
              pendingClasses?.map((pendingClass, i) =>
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src={pendingClass?.photoUrl}
                            alt="Avatar Tailwind CSS Component" />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{pendingClass?.title}</div>
                      </div>
                    </div>
                  </td>
                  <td>{pendingClass?.email}</td>
                  <td>{pendingClass?.price}</td>
                  <td>{pendingClass?.name}</td>
                  <td><button onClick={() => handleApprove(pendingClass, pendingClass._id)} className="text-3xl bg-green-600 rounded-xl text-white p-2 my-2"><MdDone /></button></td>
                  <td><button onClick={() => handleDelete(pendingClass?._id)} className="text-3xl bg-red-600 rounded-xl text-white p-2 my-2"><RxCross2 /></button></td>
                </tr>
              )
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PendingClass;