import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import {useState } from 'react';
import { Pagination } from 'swiper/modules';
import useAxiosPublic from "../../../Hooks/useAxiosPublic";


const PopularCourses = () => {


  const [courses, setCourses] = useState([])
  const axiosPublic = useAxiosPublic();

  axiosPublic.get('/courses')
  .then(res => {
    setCourses(res.data)
  })


  return (
    <div className="">
      <SectionTitle header="Courses" subHeader="You can see what you want to learn"></SectionTitle>
      <div>
        <Swiper
          slidesPerView={3}
          centeredSlides={true}
          spaceBetween={30}
          grabCursor={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {
            courses.map(course =>
              <SwiperSlide key={course.id}>
                <div className="card bg-base-100 w-96 shadow-xl max-h-[450px] my-20">
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
                      <div className="btn btn-outline">Enroll: {course.enrollment} TK</div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>)
          }
        </Swiper>
      </div>
    </div>
  );
};

export default PopularCourses;