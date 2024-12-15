import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { motion } from "framer-motion";

const testimonials = [
  {
    title: "Exceptional Quality and Durability!",
    description:
      "We've been using blocks from Pebble Blocks for few years, and their quality is unmatched. The blocks are durable, dimensionally accurate, and perfect for our construction projects.",
    name: "- Mr. Krishna V",
    designation: "Construction Project Manager",
    bgColor: "bg-blue-100",
  },
  {
    title: "Beautiful and Versatile Pavers",
    description:
      "We've used Pebble Blocks pavers in several landscaping projects, and they never disappoint. The colors are vibrant, and the pavers are resilient. We get so many compliments on the finished look.",
    name: "- Mr. Dinesh Kumar R",
    designation: "Managing Director, Sri Ranga Impex",
    bgColor: "bg-blue-100",
  },
  {
    title: "Perfect for All Weather Conditions",
    description:
      "Pebble Blocks concrete blocks are incredibly durable. We've used them in areas exposed to extreme weather, and they hold up perfectly. Definitely the best blocks we've used for outdoor construction.",
    name: "- Mr. Narendran M",
    designation: "CEO Cheran Agro Tech",
    bgColor: "bg-blue-100",
  },
  {
    title: "Solid quality and affordable prices",
    description:
      "I was skeptical at first because their prices were so reasonable, but I was blown away by the quality. The blocks are sturdy, perfectly sized, and they made a big difference in the look of our project.",
    name: "- Mr. Syed Manzoor S",
    designation: "Senior Engineer, SS Constructions",
    bgColor: "bg-blue-100",
  },
  {
    title: " Customer Support and Quality Assurance",
    description:
      "Pebble Blocks has an amazing team that ensures every product meets our expectations. The quality control is excellent, and their customer support team is always ready to help with any questions we have.",
    name: "- Mr. Aaadhavan",
    designation: "Senior Software Engineer",
    bgColor: "bg-blue-100",
  },
  {
    title: "On-Time Delivery Service",
    description:
      "Pebble Blocks has been our trusted supplier for over a decade. Their products are always delivered on time, and the customer service is outstanding. They truly understand the needs of their clients.",
    name: "- Ms . Nandhini A",
    designation: "CEO JAS Square Developers",
    bgColor: "bg-blue-100",
  },
  // Add more testimonials as needed
];

const TestimonialSection = () => {
  const swiperRef = useRef(null);

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto text-center">
        <motion.h4
          className="text-purple-600 text-lg "
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          
        </motion.h4>
        <motion.h1
          className="text-3xl font-bold text-purple-900"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <span className="text-pink-600"> Client's Reviews & </span> <br />{" "}
          Feedbacks
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
              className={`p-6 rounded-lg ${testimonial.bgColor} shadow-lg`}
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
