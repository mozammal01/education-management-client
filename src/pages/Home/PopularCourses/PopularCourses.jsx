import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { useState } from "react";
import { Pagination } from "swiper/modules";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const PopularCourses = () => {
  
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [courses, setCourses] = useState([]);
  
  const axiosPublic = useAxiosPublic();
  axiosPublic.get("/courses").then((res) => {
    setCourses(res.data);
  });

  const popularCourses = courses.slice(0, 4);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
      transition={{ duration: 0.5 }}
    >
      <SectionTitle header="Courses" subHeader="You can see what you want to learn"></SectionTitle>
      <div className="text-center hidden lg:block">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {popularCourses.map((course, index) => (
            <SwiperSlide key={course.id}>
              <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 100 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="card bg-base-100 w-96 shadow-xl max-h-[450px] min-h-[450px] my-20 mx-auto"
              >
                <figure>
                  <img className="max-h-[220px]" src={course.image_url} alt="Shoes" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">
                    {course.title}
                    <div className="badge badge-secondary">NEW</div>
                  </h2>
                  <p>{course.description}</p>
                  <div className="card-actions items-center justify-end">
                    <div className="badge badge-outline">{course.category}</div>
                    <div className="btn btn-outline">
                      <Link to={`/courseDetails/${course._id}`}>Enroll: {course.enrollment} TK</Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
        <Link to="/allCourses">
          <button className="btn my-5">View All Courses</button>
        </Link>
      </div>

      <div className="text-center hidden md:block lg:hidden">
        <Swiper
          slidesPerView={2}
          spaceBetween={30}
          centeredSlides={true}
          grabCursor={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {popularCourses.map((course) => (
            <SwiperSlide key={course.id}>
              <div className="card bg-base-100 w-96 shadow-xl max-h-[450px] min-h-[450px] my-20 mx-auto">
                <figure>
                  <img className="max-h-[220px]" src={course.image_url} alt="Shoes" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">
                    {course.title}
                    <div className="badge badge-secondary">NEW</div>
                  </h2>
                  <p>{course.description}</p>
                  <div className="card-actions items-center justify-end">
                    <div className="badge badge-outline">{course.category}</div>
                    <div className="btn btn-outline">
                      <Link to={`/courseDetails/${course._id}`}>Enroll: {course.enrollment} TK</Link>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <Link to="/allCourses">
          <button className="btn my-5">View All Courses</button>
        </Link>
      </div>

      <div className="text-center block md:hidden">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          centeredSlides={true}
          grabCursor={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {popularCourses.map((course) => (
            <SwiperSlide key={course.id}>
              <div className="card bg-base-100 w-96 shadow-xl max-h-[450px] min-h-[450px] my-20 mx-auto">
                <figure>
                  <img className="max-h-[220px]" src={course.image_url} alt="Shoes" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">
                    {course.title}
                    <div className="badge badge-secondary">NEW</div>
                  </h2>
                  <p>{course.description}</p>
                  <div className="card-actions items-center justify-end">
                    <div className="badge badge-outline">{course.category}</div>
                    <div className="btn btn-outline">
                      <Link to={`/courseDetails/${course._id}`}>Enroll: {course.enrollment} TK</Link>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <Link to="/allCourses">
          <button className="btn my-5">View All Courses</button>
        </Link>
      </div>
    </motion.div>
  );
};

export default PopularCourses;
