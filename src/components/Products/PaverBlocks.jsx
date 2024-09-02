import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import * as React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import {
  EffectCoverflow,
  Navigation,
  Pagination,
  Autoplay,
} from "swiper/modules";

const PaverBlocks = () => {
  const swiperRef = React.useRef();

  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          extension: { regex: "/(jpg)/" }
          relativeDirectory: { eq: "Products/PaverBlocks" }
        }
      ) {
        edges {
          node {
            childImageSharp {
              gatsbyImageData(width: 2000)
            }
          }
        }
      }
    }
  `);

  const images = data.allFile.edges.map(
    (edge) => edge.node.childImageSharp.gatsbyImageData
  );

  return (
    <section className="w-fit h-fit m-auto flex flex-col items-center justify-center">
      {/* <h1 className="text-center text-xl md:text-2xl lg:text:3xl mt-5 mb-2">
        Paver blocks
      </h1> */}

      <div className="h-fit relative">
        <div
          class="swiper-button-prev !invisible md:!visible !left-[-40px]"
          onClick={() => swiperRef.current?.slidePrev()}
        ></div>
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
          className="h-96 rounded-lg !w-fit md:!w-[700px] lg:!w-[1200px] !pb-[50px]"
        >
          {images.map((_, index) => (
            <SwiperSlide className="md:!w-[300px] rounded-lg lg:!w-[800px]">
              <GatsbyImage
                image={images[index]}
                alt="banner"
                placeholder="tracedSVG"
                class="block h-full w-full object-cover rounded-lg"
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div
          class="swiper-button-next !invisible md:!visible !right-[-40px]"
          onClick={() => swiperRef.current?.slideNext()}
        ></div>
      </div>
    </section>
  );
};

export default PaverBlocks;
