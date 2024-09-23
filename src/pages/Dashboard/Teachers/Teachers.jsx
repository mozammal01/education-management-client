import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const Teachers = () => {

  const axiosSecure = useAxiosSecure();

  const {data} = useQuery({
    
  })

  return (
    <div>
      <h3 className="text-3xl">You can see all Teachers here</h3>      
    </div>
  );
};

export default Teachers;