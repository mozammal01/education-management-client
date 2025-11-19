import learnOnline from '../../../assets/Others/learn-online.png'
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const LearnOnline = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <motion.div
      ref={ref}
      className='md:flex my-40 justify-center items-center'
    >
      <motion.div   initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
      transition={{ duration: 0.5 }} className='w-full'>
        <img src={learnOnline} alt="" />
      </motion.div>
      <motion.div initial={{ opacity: 0, y: -100 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -100 }}
      transition={{ duration: 0.5 }} className='space-y-8 ml-10'>
        <h1 className="text-4xl font-semibold">Learn and get a profession online</h1>
        <p className='font-semibold'>Morbi tempor eleifend condimentum. Etiam mollis urna et massa tempus vulputate. Nunc sed nisl est. Donec non consectetur elit.</p>
        <button className='btn btn-outline'>Learn More</button>
      </motion.div>
    </motion.div>
  );
};

export default LearnOnline;