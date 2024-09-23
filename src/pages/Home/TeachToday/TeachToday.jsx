import { Link } from 'react-router-dom';
import TeachTodayImg from '../../../assets/Others/TeachToday.jpg'

const TeachToday = () => {
  return (
    <div className="bg-base-200 py-10 min-h-screen my-10">
      <div className='flex gap-10 items-center'>
        <div className="w-2/3 gap-10">
          <img
            src={TeachTodayImg}
            className="rounded-lg  shadow-2xl" />

        </div>
        <div>

          <h1 className="text-5xl font-bold">Become an instructor</h1>
          <p className="py-6 font-semibold">
            Instructors from the world teach millions of learners on Udemy. we provide the tools and skills to teach what you love.
          </p>
          <Link to='/teachOn' className="btn btn-primary text-white">Start Teaching Today</Link>
        </div>
      </div>
    </div>
  );
};

export default TeachToday;