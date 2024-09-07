import { Helmet } from 'react-helmet-async';
import Banner from "../Banner/Banner";
import Features from "../Features/Features";
import LearnOnline from "../LearnOnline/LearnOnline";
import PopularCourses from "../PopularCourses/PopularCourses";


const Home = () => {
  return (
    <>
      <Helmet>
        <title>EDU || Home</title>
      </Helmet>
      <div>
        <Banner></Banner>
        <div className="hidden lg:block">
          <PopularCourses></PopularCourses>
        </div>
        <Features></Features>
        <LearnOnline></LearnOnline>
      </div>
    </>
  );
};

export default Home;