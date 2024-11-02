import axios from "axios";

const axiosPublic = axios.create({
  baseURL: 'https://education-management-server-flame.vercel.app'
})

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;