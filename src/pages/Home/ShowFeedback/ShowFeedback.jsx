import userImg from '../../../assets/Others/user.jpg'
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const ShowFeedback = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const axiosPublic = useAxiosPublic();

  const { data: feedback } = useQuery({
    queryKey: ['feedback'],
    queryFn: async () => {
      const res = await axiosPublic.get('/feedback')
      return res.data;
    }
  })


  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
      transition={{ duration: 0.5 }}
      className='my-20'>

      <motion.div>
        <SectionTitle header='Feedback' subHeader='You can see here the opinion of the students'></SectionTitle>
      </motion.div>
      <div>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper text-center">


          {
            feedback?.map(feed => <SwiperSlide
              key={feed._id}
            >
              <div className="w-3/4 mx-auto space-y-3 mb-10">
                {/* <Rating
                  className="mx-auto "
                  style={{ maxWidth: 180 }}
                  value={feed.rating}
                  readOnly
                /> */}
                <h3 className="text-4xl mb-4">{feed?.title}</h3>
                <p>{feed?.feed}</p>
                <div className='flex items-center justify-center'>

                  <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar mt-2 text-warning">
                    {
                      feed?.photoURL ? <img
                        className="rounded-full"
                        src={feed?.photoURL} />
                        :
                        <img
                          className="rounded-full"
                          alt="Tailwind CSS Navbar component"
                          src={userImg} />
                    }
                  </div>
                  <p className='font-bold'>{feed?.displayName}</p>

                </div>
                
              </div>
            </SwiperSlide>)
          }

        </Swiper>
      </div>
    </motion.div>
  );
};

export default ShowFeedback;