import { graphql, useStaticQuery } from "gatsby";
import { getSrc } from "gatsby-plugin-image";
import * as React from "react";
import { Helmet } from "react-helmet";

import SwiperSlider from "./SwiperSlider";

const SolidBlocks = ({ setModalOpen, setImageUrl }) => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          extension: { regex: "/(jpg)/" }
          relativeDirectory: { eq: "Products/SolidBlocks" }
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

  const images = data.allFile.edges.map((edge) => ({
    gatsbyImageData: edge.node.childImageSharp.gatsbyImageData,
    imageUrl: getSrc(edge.node.childImageSharp.gatsbyImageData), // extract the URL
  }));

  return (
    <section className="w-fit h-fit m-auto flex flex-col items-center justify-center">
      {/* SEO Optimization */}
      <Helmet>
        <title>High-Quality Solid Blocks in Coimbatore - Strong & Durable Solutions</title>
        <meta
          name="description"
          content="Explore durable solid blocks in Coimbatore for construction projects. Ideal for residential and commercial needs, offering strength and reliability in every block."
        />
        <meta
          name="keywords"
          content="solid blocks coimbatore, solid concrete blocks, hollow block bricks prices, paving stones, block tiles design"
        />
      </Helmet>

      {/* Heading Section */}
      <header className="text-center my-8">
        <h1 className="text-3xl font-bold text-gray-800">
          Durable Solid Blocks for Construction in Coimbatore
        </h1>
        <h2 className="text-xl text-gray-600 mt-2">
          Choose Our Solid Blocks for Your Construction Needs.
        </h2>
        <h3 className="text-lg text-gray-500 mt-1">
          High-Strength Solid Blocks for Residential & Commercial Projects
        </h3>
      </header>

      {/* Slider Section */}
      <SwiperSlider
        images={images}
        setModalOpen={setModalOpen}
        setImageUrl={setImageUrl}
      />
    </section>
  );
};

export default SolidBlocks;
