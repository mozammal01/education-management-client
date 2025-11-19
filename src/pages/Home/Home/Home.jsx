import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Features from "../Features/Features";
import LearnOnline from "../LearnOnline/LearnOnline";
import PopularCourses from "../PopularCourses/PopularCourses";
import TeachToday from "../TeachToday/TeachToday";
import ShowFeedback from "../ShowFeedback/ShowFeedback";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Home = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <>
      <Helmet>
        <title>EDU || HOME</title>
      </Helmet>
      <div>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: -100 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -100 }}
          transition={{ duration: 0.5 }}
        >
          <Banner></Banner>
        </motion.div>
        <PopularCourses></PopularCourses>
        <Features></Features>
        <LearnOnline></LearnOnline>
        <TeachToday></TeachToday>
        <ShowFeedback></ShowFeedback>
      </div>
    </>
  );
};

export default Home;
