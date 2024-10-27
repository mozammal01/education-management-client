import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { useState } from 'react';
import { Pagination } from 'swiper/modules';
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { Link } from "react-router-dom";


const PopularCourses = () => {


  const [courses, setCourses] = useState([])
  const axiosPublic = useAxiosPublic();

  axiosPublic.get('/courses')
    .then(res => {
      setCourses(res.data)
    })

  const popularCourses = courses.splice(0, 4)
  // console.log(popularCourses);


  return (
    <div className="">
      <SectionTitle header="Courses" subHeader="You can see what you want to learn"></SectionTitle>
      <div className="text-center">
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={30}
          centeredSlides={true}
          grabCursor={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {
            popularCourses.map(course =>
              <SwiperSlide key={course.id}>
                <div className="card bg-base-100 w-96 shadow-xl max-h-[450px] my-20 mx-auto">
                  <figure>
                    <img
                      src={course.image_url}
                      alt="Shoes" />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">
                      {course.title}
                      <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>{course.description}</p>
                    <div className="card-actions items-center justify-end">
                      <div className="badge badge-outline">{course.category}</div>
                      <div className="btn btn-outline"><Link to={`/courseDetails/${course.id}`}>Enroll: {course.enrollment} TK</Link></div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>)
          }
        </Swiper>
        <Link to='/allCourses'><button className="btn my-5">View All Courses</button></Link>
      </div>
    </div>
  );
};

export default PopularCourses;