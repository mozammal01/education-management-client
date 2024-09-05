import Banner from "../Banner/Banner";
import Features from "../Features/Features";
import PopularCourses from "../PopularCourses/PopularCourses";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div className="hidden lg:block">
      <PopularCourses></PopularCourses>
      </div>
    </div>
  );
};

export default Home;