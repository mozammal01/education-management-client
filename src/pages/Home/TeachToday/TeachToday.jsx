import { Link } from 'react-router-dom';
import TeachTodayImg from '../../../assets/Others/TeachToday.jpg'
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
const TeachToday = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
      transition={{ duration: 0.5 }}
      className="bg-base-200 py-10 px-5 my-10 rounded">
      <motion.div className='md:flex gap-10 items-center'>
        <div className="md:w-2/3 gap-10">
          <img
            src={TeachTodayImg}
            className="rounded-lg shadow-2xl" />
        </div>
        
        <div>
          <h1 className="text-5xl font-bold">Become an instructor</h1>
          <p className="py-6 font-semibold">
            Instructors from the world teach millions of learners on Udemy. we provide the tools and skills to teach what you love.
          </p>
          <Link to='/teachOn' className="btn btn-primary text-white">Start Teaching Today</Link>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default TeachToday;