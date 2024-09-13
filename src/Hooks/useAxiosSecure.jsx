import axios from "axios";

const axiosSecure = axios.create({
  baseURL: 'http://localhost:4000'
})
const useAxiosSecure = () => {

  // request interceptors to add authorization header for every secure call to the api
  axiosSecure.interceptors.request.use(function(config){
    const token = localStorage.getItem('access-token')
    console.log('Request stopped by intercenptor');

    config.headers.authorization = `Bearer ${token}`

    return config
  }, function(err) {
    return Promise.reject(err);
  })
  return axiosSecure;
};

export default useAxiosSecure;