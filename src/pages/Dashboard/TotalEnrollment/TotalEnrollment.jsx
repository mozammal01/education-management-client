import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const TotalEnrollment = () => {
  const axiosSecure = useAxiosSecure();
  const { data: enrolls } = useQuery({
    queryKey: ['enrolls'],
    queryFn: async () => {
      const res = await axiosSecure.get('/enroll')
      return res.data
    }
  })

  console.log(enrolls);

  return (
    <div className="my-10">
      <h1 className="text-4xl text-center font-bold text-red-500">Total Enrollment: {enrolls?.length}</h1>
      <div>

        <table className="table my-20">

          <thead>
            <tr>
              <th></th>
              <th>Email</th>
              <th>Title</th>
              <th>Category</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {
              enrolls?.map((enroll, i) => <tr key={i}>
                <th>{i + 1}</th>
                <td>{enroll?.email}</td>
                <td>{enroll?.title}</td>
                <td>{enroll?.category}</td>
                <td>{enroll?.price}</td>
              </tr>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TotalEnrollment;