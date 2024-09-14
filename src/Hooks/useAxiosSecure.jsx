// import axios from "axios";
// import { useNavigate } from "react-router-dom";


// const axiosSecure = axios.create({
//   baseURL: 'http://localhost:4000'
// })


// const useAxiosSecure = ({ logOut, navigate }) => {


//   // request interceptors to add authorization header for every secure call to the api
//   axiosSecure.interceptors.request.use(function (config) {
//     const token = localStorage.getItem('access-token')
//     console.log('Request stopped by intercenptor');

//     config.headers.authorization = `Bearer ${token}`

//     return config
//   }, function (err) {
//     return Promise.reject(err);
//   })

//   // Response
//   axiosSecure.interceptors.response.use(function (response) {
//     return response
//   }, function (err) {

//     // console.log('Status error in the interceptor', err.response.status);
//     const status = err.response.status;

//     if (status === 401 || status === 403) {
//       logOut()
//         .then(result => {
//           console.log(result);
//         })
//         .catch(err => {
//           console.error(err);
//         })
//       navigate('/signIn')

//     }

//     return Promise.reject(err)

//   })

//   return axiosSecure;
// };

// export default useAxiosSecure;