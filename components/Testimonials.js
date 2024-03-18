import { useContext, useEffect, useState } from "react";
import axios from 'axios';
import SwiperCore, { Autoplay, EffectFade, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { context } from "@/context/context";
import { iKnowUtilits } from "@/utility";

SwiperCore.use([Pagination, Navigation, EffectFade, Autoplay]);

const Testimonials = () => {
  const { testimonialItems } = useContext(context);
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await axios.get('https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae');
        const fetchedTestimonials = response.data.user.testimonials;
        setTestimonials(fetchedTestimonials);
      } catch (error) {
        console.error('Error fetching testimonials:', error.message);
      }
    };
    fetchTestimonials();
    iKnowUtilits.dataImage();
    iKnowUtilits.imgToSVG();
  }, []);

  const props = {
    slidesPerView: 1,
    spaceBetween: 25,
    loop: true,
    autoplay: {
      delay: 6000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".owl-dots",
      clickable: true,
    }
  };

  return (
    <div className="iknow_tm_testimonials">
      <div className="iknow_tm_main_title">
        <span>Testimonials</span>
        <h3>What people say about me</h3>
      </div>
      <div className={`testimonials_list owl-theme ${testimonialItems === 1 ? "no-sadow" : ""}`}>
        <Swiper {...props}>
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index} className="list_inner">
              <div className="in">
                <div className="text">
                  <p>{testimonial.review}</p>
                </div>
                <div className="details">
                  <div className="left">
                    <div className="avatar">
                      <div className="main" data-img-url={testimonial.image.url} />
                    </div>
                    <div className="info">
                      <h3>{testimonial.name}</h3>
                      <span>{testimonial.position}</span>
                    </div>
                  </div>
                  <div className="right">
                    <img className="svg" src="/img/svg/left-quote.svg" alt="image" />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="owl-dots" />
      </div>
    </div>
  );
};

export default Testimonials;
