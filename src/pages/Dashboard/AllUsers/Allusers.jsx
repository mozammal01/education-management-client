import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { BiTrash } from "react-icons/bi";
import Swal from "sweetalert2";
import useAuth from "../../../Hooks/useAuth";

const Allusers = () => {

  const axiosSecure = useAxiosSecure();
  const { theme } = useAuth();

  const { data: users = [], refetch } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const res = await axiosSecure.get('/users')
      return res.data
    }
  })
  console.log('Users', users);

  const handleMakeAdmin = (id) => {
    axiosSecure.patch(`/users/admin/${id}`)
      .then(res => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Maked Admin successfull",
          showConfirmButton: false,
          timer: 1500
        });
        refetch();
        console.log(res.data);
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
        axiosSecure.delete(`/users/details/${id}`)
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
        Users: {users.length}
      </div>

      <div>

        <table className="table">

          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>User</th>
              <th>Role</th>
              <th>Email</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {
              users.map((user, i) => <tr key={i}>
                <th>{i + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={user?.photoUrl}
                          alt="Avatar Tailwind CSS Component" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{user?.name}</div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="dropdown me-10">
                    <div tabIndex={0} role="button" className={`btn m-1 ${theme === 'dark' ? 'bg-white text-black hover:bg-slate-300' : ''}`}>
                      {
                        user?.role === 'admin' ? "Admin" : user?.role
                      }
                    </div>

                    {
                      user?.role === 'admin' ? ' ' : <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                        <li onClick={() => handleMakeAdmin(user?._id)}><a>Make Admin</a></li>
                      </ul>
                    }

                  </div>
                </td>
                <td>{user?.email}</td>
                <td><button onClick={() => handleDelete(user?._id)} className="text-3xl bg-red-600 rounded-xl text-white p-2 my-2"><BiTrash></BiTrash></button></td>
              </tr>)
            }
          </tbody>
        </table>
      </div>

    </div>
  );
};

export default Allusers;