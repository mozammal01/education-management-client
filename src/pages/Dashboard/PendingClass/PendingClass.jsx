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
      description: data?.description,
      email: data?.email,
      name: data?.name,
      title: data?.title
    }
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

        <div className="grid grid-cols-2 gap-5 my-20">
          {
            pendingClasses?.map(pendingClass =>
              <div key={pendingClass?._id} className="card bg-base-100 w-96 shadow-xl max-h-[450px] my-10 mx-auto">
                <figure>
                  <img
                    src={pendingClass.photoUrl}
                    alt="Shoes" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">
                    {pendingClass.title}
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
                      <p>{pendingClass?.description}</p>
                    </div>
                  </div>
                  <div className="my-2">
                    <p className="badge badge-outline me-2">{pendingClass?.name}</p>
                    <p className="badge badge-outline">{pendingClass?.email}</p>
                  </div>
                  <div className="card-actions items-center justify-between">
                    <div>
                      <div className="badge badge-neutral text-white me-5">{pendingClass.category}</div>
                      <div className="btn btn-outline">{pendingClass.price} TK</div>
                    </div>
                    {/*  */}
                    <div>
                      <button onClick={() => handleApprove(pendingClass, pendingClass._id)} className="text-3xl bg-green-600 rounded-xl text-white p-2 my-2 me-2"><MdDone /></button>
                      <button onClick={() => handleDelete(pendingClass?._id)} className="text-3xl bg-red-600 rounded-xl text-white p-2 my-2"><RxCross2 /></button>
                    </div>
                  </div>
                </div>
              </div>)
          }
        </div>
      </div>
    </div>
  );
};

export default PendingClass;
{/* <td></td>
                  <td></td>
                </tr> */}