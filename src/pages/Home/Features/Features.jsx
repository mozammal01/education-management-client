import { FaUserGraduate } from "react-icons/fa";
import './Features.css'
import { AiOutlineGlobal } from "react-icons/ai";
import { FaHeadphonesSimple } from "react-icons/fa6";

const Features = () => {
  return (
    <div className='my-40 md:grid grid-cols-3 gap-10 md:mx-20'>
      <div className="card bg-base-100 w-80 shadow-xl hover:bg-blue-600 hover:text-white">
        <figure className="px-10 pt-10 card-image">
          <FaUserGraduate
            className="text-6xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Get a certificate</h2>
          <p>Start a Course to get a better future. And we will give you certificate </p>
        </div>
      </div>

      <div className="card bg-base-100 w-80 shadow-xl hover:bg-blue-600 hover:text-white">
        <figure className="px-10 pt-10">
          <AiOutlineGlobal
            className="text-6xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">All over the globe</h2>
          <p>Donec urna massa, cursus venenatis ipsum et, tempus rhoncus tortor. Lorem ipsum dolor.</p>
        </div>
      </div>

      <div className="card bg-base-100 w-80 shadow-xl hover:bg-blue-600 hover:text-white">
        <figure className="px-10 pt-10">
          <FaHeadphonesSimple
            className="text-6xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Live online lectures</h2>
          <p>Sed a eros sodales diam sagittis faucibus. Cras id erat nisl. Lorem ipsum dolor sit lorem amet.</p>
        </div>
      </div>
    </div>
  );
};

export default Features;