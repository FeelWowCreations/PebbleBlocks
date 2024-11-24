import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import {
  EffectCoverflow,
  Navigation,
  Pagination,
  Autoplay,
} from "swiper/modules";
import RightArrow from "../ui/RightArrow";
import LeftArrow from "../ui/LeftArrow";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const SwiperSlider = ({ images, setModalOpen, setImageUrl }) => {
  const swiperRef = React.useRef();

  return (
    <div className="h-fit relative">
      <div
        class="swiper-button-prev after:!content-[''] !left-2 !top-[45%] md:!top-[50%]"
        onClick={() => swiperRef.current?.slidePrev()}
      >
        <LeftArrow />
      </div>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        initialSlide={7}
        slidesPerView={"auto"}
        loop={true}
        autoplay={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          scale: 1,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        className="h-96 rounded-lg !w-[300px] md:!w-[700px] lg:!w-[900px] !pb-[50px]"
      >
        {images.map((item) => (
          <SwiperSlide
            className="md:!w-[300px] rounded-lg lg:!w-[500px]"
            onClick={() => {
              setModalOpen && setModalOpen(true);
              setImageUrl && setImageUrl(item?.imageUrl);
            }}
          >
            <GatsbyImage
              image={item?.gatsbyImageData}
              alt="banner"
              placeholder="tracedSVG"
              class="block h-full w-full object-cover rounded-lg"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div
        class="swiper-button-next !right-2 after:!content-[''] !top-[45%] md:!top-[50%]"
        onClick={() => swiperRef.current?.slideNext()}
      >
        <RightArrow />
      </div>
    </div>
  );
};

export default SwiperSlider;
