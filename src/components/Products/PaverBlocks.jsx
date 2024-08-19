import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import * as React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";

const PaverBlocks = () => {
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
    <section className="w-full h-fit flex flex-col items-center justify-center">
      <h1 className="text-center text-xl md:text-2xl lg:text:3xl mt-5 mb-2">
        Paver blocks
      </h1>

      <div className="h-fit">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          initialSlide={7}
          slidesPerView={"auto"}
          loop={true}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            scale: 1,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{ clickable: true }}
          modules={[EffectCoverflow, Pagination]}
          className="h-96 rounded-lg !w-fit md:!w-[900px] lg:!w-[1200px] !pb-[50px]"
        >
          {images.map((_, index) => (
            <SwiperSlide className="md:!w-[300px] lg:!w-[800px]">
              <GatsbyImage
                image={images[index]}
                alt="banner"
                placeholder="tracedSVG"
                class="block h-full w-full object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default PaverBlocks;
