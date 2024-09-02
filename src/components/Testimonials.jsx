import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { motion } from "framer-motion";

const testimonials = [
  {
    title: "Pixel Perfect design",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad",
    name: "- John Doe",
    designation: "Founder, Arrow",
    bgColor: "bg-yellow-300",
  },
  {
    title: "Minimal and Clean",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad",
    name: "- Rocky Hych",
    designation: "CTO, Upside Down",
    bgColor: "bg-purple-300",
  },
  {
    title: "Built with Bootstrap",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad",
    name: "- John Doe",
    designation: "Founder, Arrow",
    bgColor: "bg-blue-300",
  },
  {
    title: "Responsive template",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad",
    name: "- Rocky Hych",
    designation: "CTO, Upside Down",
    bgColor: "bg-pink-300",
  },
  {
    title: "Responsive template",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad",
    name: "- Rocky Hych",
    designation: "CTO, Upside Down",
    bgColor: "bg-sky-300",
  },
  {
    title: "Built with Bootstrap",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad",
    name: "- John Doe",
    designation: "Founder, Arrow",
    bgColor: "bg-orange-300",
  },
  // Add more testimonials as needed
];

const TestimonialSection = () => {
  const swiperRef = useRef(null);

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto text-center">
        <motion.h4
          className="text-purple-600 text-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Happy
        </motion.h4>
        <motion.h1
          className="text-3xl font-bold text-purple-900"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <span className="text-pink-600">Client's</span> hello <br />{" "}
          testimonials
        </motion.h1>
      </div>

      <div className="container mx-auto py-12 px-4 relative">
        <Swiper
          ref={swiperRef}
          className="testimonial-swiper"
          slidesPerView={1}
          spaceBetween={20}
          navigation={{
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
          }}
          pagination={{ clickable: true }}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 10 },
            480: { slidesPerView: 1, spaceBetween: 20 },
            640: { slidesPerView: 2, spaceBetween: 30 },
            768: { slidesPerView: 3, spaceBetween: 30 },
          }}
          modules={[Navigation, Pagination]}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide
              key={index}
              className={`p-6 rounded-lg ${testimonial.bgColor}`}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="h-full flex flex-col justify-between"
              >
                <motion.h1
                  className="text-xl font-bold"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  {testimonial.title}
                </motion.h1>
                <motion.p
                  className="mt-2"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  {testimonial.description}
                </motion.p>
                <div className="text-right mt-4">
                  <p className="font-semibold">{testimonial.name}</p>
                  <p>{testimonial.designation}</p>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* Custom Navigation Buttons */}
        <button
          className="swiper-button-prev lg:ml-[-2rem] top-1/2 right-4 transform -translate-y-1/2  text-white p-2 "
          onClick={() => swiperRef.current.swiper.slidePrev()}
        ></button>
        <button
          className="swiper-button-next absolute lg:mr-[-2rem] top-1/2 right-4 transform -translate-y-1/2  text-white p-2 "
          onClick={() => swiperRef.current.swiper.slideNext()}
        ></button>
      </div>
    </section>
  );
};

export default TestimonialSection;
