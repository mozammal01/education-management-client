import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const TotalClass = () => {

  const axiosSecure = useAxiosSecure();

  const { data: allClasses } = useQuery({
    queryKey: ['courses'],
    queryFn: async () => {
      const res = await axiosSecure.get('courses')
      console.log(res.data);
      return res.data
    }
  })

  return (
    <div className="my-10">
      <h3 className="text-3xl text-center font-bold text-red-500">Total Class :  {allClasses?.length}</h3>

      <div className="overflow-x-auto my-20">
        <table className="table">
          {/* head */}
          <thead>
            <tr  className="font-bold">
              <th></th>
              <th>Course Name</th>
              <th>Rating</th>
              <th>Category</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>

            <>
              {
                allClasses?.map((classes, i) => <tr key={i}>
                  <th>{i+1}</th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src={classes?.image_url}
                            alt="Avatar Tailwind CSS Component" />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{classes?.title}</div>
                      </div>
                    </div>
                  </td>
                  <td>{classes?.rating}</td>
                  <td>{classes?.category}</td>
                  <td>{classes?.enrollment}</td>
                </tr>
                )

              }
            </>
          </tbody>

        </table>
      </div>

    </div>
  );
};

export default TotalClass;