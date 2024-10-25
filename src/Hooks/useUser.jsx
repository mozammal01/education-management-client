import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useUser = ({ user, enabled }) => {
  const axiosSecure = useAxiosSecure();
  const { data: isUser } = useQuery({
    queryKey: ['isUser'],
    enabled,
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/${user?.email}`)
      console.log(res.data);
      return res.data
    }
  })
  return [isUser]
};

export default useUser;