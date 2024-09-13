import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const TeachOn = () => {

  const navigate = useNavigate();

  const handleTeach = () => {
    Swal.fire({
      title: "Are you a Teacher?",
      // text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Sign Up!"
    }).then((result) => {
      if (result.isConfirmed) {
        navigate('/signUp')
        // Swal.fire({
        //   title: "Deleted!",
        //   text: "Your file has been deleted.",
        //   icon: "success"
        // });
      }
    });
  }

  return (
    <>
    <Helmet>
      <title>EDU || TEACH</title>
    </Helmet>
      <div className="my-10 text-center">
        <h2 className="text-4xl pb-10">Are You a Teacher ? Do You want To Teach. Visit below</h2>

        <div>
          <Link to="/" className="btn btn-primary text-white mx-4">Go Back</Link>
          <button onClick={handleTeach} className="btn btn-primary text-white">Sign Up For Teacher</button>
        </div>

      </div>
    </>
  );
};

export default TeachOn;