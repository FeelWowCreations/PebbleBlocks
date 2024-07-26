import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, StaticImage, getImage } from "gatsby-plugin-image";
import React, { useEffect, useState } from "react";

const Banner = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { extension: { regex: "/(jpg)/" } }) {
        edges {
          node {
            childImageSharp {
              gatsbyImageData(width: 600, placeholder: TRACED_SVG)
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
    <section className="bg-gray-200 p-4 grid gap-4 grid-cols-[repeat(2,1fr)] items-center justify-center h-[calc(100vh-100px)] w-full">
      <aside className="rounded-md bg-white h-full p-10">
        <h1 className="text-5xl mb-5">Reliable Pavers for Business</h1>
        <p className="text-[#595959] mb-5">
          With the assistance of our efficient workforce, we offer supreme
          quality Floor Pavers, Kerb Stones and much more to our high valued
          clients. These stones, offered by us are very popular for their
          intricate design patterns and ethnic beauty. In addition, these are
          available in an array of colors, designs and combinations to suit the
          customer tastes an preferences. Being highly durable and long lasting
          they can be used for different purposes. These stones are offered in
          customized magnitude as per the customer requirements, at highly
          affordable price range.
        </p>
        <button className="rounded p-4 bg-black text-white text-base font-medium flex items-center gap-1">
          <span>Contact us now</span>
          <StaticImage
            src="../images/white-right-arrow-icon.svg"
            alt="right-arrow"
          />
        </button>
      </aside>
      <figure className="mb-0 rounded-md bg-white h-full transition-all delay-800">
        <GatsbyImage
          image={images[currentImageIndex]}
          alt="banner"
          className="object-fill w-full h-full rounded-md"
          placeholder="tracedSVG"
        />
      </figure>
    </section>
  );
};

export default Banner;
