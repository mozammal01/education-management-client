import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useTeacher = ({enabled, user}) => {
  const axiosSecure = useAxiosSecure();
  const { data: isTeacher, isPending: isTeacherPending } = useQuery({
    queryKey: [user?.email, 'isTeacher'],
    enabled,
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/teachers/${user?.email}`)
      console.log(res.data);
      return res.data.teacher
    }
  })
  return [isTeacher, isTeacherPending];
};

export default useTeacher;