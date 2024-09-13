import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const Allusers = () => {
  const axiosSecure = useAxiosSecure();
  return (
    <div className="text-red-500 font-bold">You can see your all user here</div>
  );
};

export default Allusers;