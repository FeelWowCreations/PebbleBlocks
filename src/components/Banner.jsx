import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, StaticImage, getImage } from "gatsby-plugin-image";
import React, { useEffect, useState } from "react";

const Banner = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          extension: { regex: "/(jpg)/" }
          relativeDirectory: { eq: "Banner" }
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

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <section className="grid-cols-1 relative grid-rows-1 bg-gray-200 p-4 grid gap-4 md:grid-cols-[repeat(1,1fr)] md:grid-rows-1 items-center justify-center h-[fit-content] w-full ">
      <figure className="mb-0 rounded-md bg-white h-[450px] md:h-[800px] transition-all delay-800">
        <GatsbyImage
          image={images[currentImageIndex]}
          alt="banner"
          className="object-fill w-full h-[450px] md:h-full rounded-md transition-all delay-800 "
          placeholder="tracedSVG"
        />
      </figure>
      <div className="absolute bottom-0 left-0 h-full right-0 bg-gradient-to-t from-black to-transparent p-4 md:h-[300px] flex flex-col justify-end">
        <h1 className="text-5xl text-white mb-5 font-bold">
          Reliable Pavers for Business
        </h1>
        <p className="text-white md:w-[90%] lg:w-[80%] mb-5">
          Paver blocks are the building blocks of outdoor design, turning
          ordinary spaces into extraordinary landscapes. A well-laid paver
          pathway is like a red carpet for your garden, inviting exploration and
          admiration."In the world of hardscaping, paver blocks are the unsung
          heroes, silently bearing the weight of our footsteps and our
          dreams."Like a mosaic of possibilities, paver blocks allow us to paint
          our outdoor spaces with durability and style."
        </p>
        {/* <button className="rounded p-3 w-fit bg-primary hover:opacity-85 transition-all duration-300 text-white text-base font-medium flex items-center gap-1 ease-in-out">
            <span>Contact us now</span>
            <StaticImage
              src="../images/white-right-arrow-icon.svg"
              alt="right-arrow"
            />
          </button> */}
      </div>
    </section>
  );
};

export default Banner;
