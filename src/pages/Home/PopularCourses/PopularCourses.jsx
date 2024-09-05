import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';


const PopularCourses = () => {

  const [courses, setCourses] = useState([])

  useEffect(() => {
    fetch('courses.json')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setCourses(data)
      })

  }, [])

  return (
    <div className="my-20">
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
                <div className="card bg-base-100 w-96 shadow-xl max-h-[450px]">
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