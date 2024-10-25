import { Helmet } from 'react-helmet-async';
import Banner from "../Banner/Banner";
import Features from "../Features/Features";
import LearnOnline from "../LearnOnline/LearnOnline";
import PopularCourses from "../PopularCourses/PopularCourses";
import TeachToday from '../TeachToday/TeachToday';


const Home = () => {
  return (
    <>
      <Helmet>
        <title>EDU || HOME</title>
      </Helmet>
      <div>
        {/* <Banner></Banner> */}
        <div>
          <PopularCourses></PopularCourses>
        </div>
        {/* <Features></Features>
        <LearnOnline></LearnOnline>
        <TeachToday></TeachToday> */}
      </div>
    </>
  );
};

export default Home;