import { Helmet } from 'react-helmet-async';
import Banner from "../Banner/Banner";
import Features from "../Features/Features";
import LearnOnline from "../LearnOnline/LearnOnline";
import PopularCourses from "../PopularCourses/PopularCourses";
import TeachToday from '../TeachToday/TeachToday';
import ShowFeedback from '../ShowFeedback/ShowFeedback';


const Home = () => {
  return (
    <>
      <Helmet>
        <title>EDU || HOME</title>
      </Helmet>
      <div>
        {/* <Banner></Banner>
        <PopularCourses></PopularCourses>
        <Features></Features> */}
        <LearnOnline></LearnOnline>
        {/* <TeachToday></TeachToday>
        <ShowFeedback></ShowFeedback> */}
      </div>
    </>
  );
};

export default Home;