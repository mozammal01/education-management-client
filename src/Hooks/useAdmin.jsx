// import { useQuery } from "@tanstack/react-query";
// import useAxiosSecure from "./useAxiosSecure";

// const useAdmin = ({ enabled, user }) => {
//   const axiosSecure = useAxiosSecure();
//   const { data: isAdmin, isPending: isAdminLoading } = useQuery({
//     queryKey: [user?.email, 'isAdmin'],
//     enabled,
//     queryFn: async () => {
//       const res = await axiosSecure.get(`/users/admin/${user?.email}`)
//       console.log(res.data);
//       return res.data.admin
//     }
//   })
//   return [isAdmin, isAdminLoading]
// };

// export default useAdmin;