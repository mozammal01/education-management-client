import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const TotalClass = () => {

  const axiosSecure = useAxiosSecure();

  const {data : allClasses} = useQuery({
    queryKey: ['courses'],
    queryFn: async() => {
      const res = await axiosSecure.get('courses')
      console.log(res.data);
      return res.data
    }
  })

  return (
    <div>
      <h3 className="text-3xl">You can see all Total Class here:  {allClasses.length}</h3>      
    </div>
  );
};

export default TotalClass;