import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAuth from "../../../Hooks/useAuth";

const MyEnroll = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: myEnroll } = useQuery({
    queryKey: ['myEnroll'],
    queryFn: async () => {
      const res = await axiosSecure.get(`/enroll/${user?.email}`)
      console.log(res.data);
      return res.data
    }
  })

  console.log(myEnroll);

  return (
    <div>
      <h1 className="text-5xl">You can See your Enroll here : {myEnroll?.length}</h1>
      <div>

        <table className="table my-20">

          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Title</th>
              <th>Category</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {
              myEnroll?.map((user, i) => <tr key={i}>
                <th>{i + 1}</th>
                <td>{user?.title}</td>
                <td>{user?.category}</td>
                <td>{user?.price}</td>
              </tr>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyEnroll;