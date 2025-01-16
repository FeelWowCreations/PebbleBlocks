import { graphql, useStaticQuery } from "gatsby";
import { getSrc } from "gatsby-plugin-image";
import * as React from "react";
import SwiperSlider from "./SwiperSlider";
import { Helmet } from "react-helmet";

const PaverBlocks = ({ setModalOpen, setImageUrl }) => {
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

  const images = data.allFile.edges.map((edge) => ({
    gatsbyImageData: edge.node.childImageSharp.gatsbyImageData,
    imageUrl: getSrc(edge.node.childImageSharp.gatsbyImageData), // extract the URL
  }));

  return (
    <>
      {/* Meta Tags for SEO */}
      <Helmet>
        <title>Premium Paver Blocks in Coimbatore - Durable and Stylish Options</title>
        <meta
          name="description"
          content="Discover high-quality paver blocks in Coimbatore. Ideal for driveways, walkways, and outdoor spaces. Stylish, durable, and long-lasting paver block solutions."
        />
        <meta
          name="keywords"
          content="paver blocks coimbatore, outdoor pavers, concrete paver block price, stone paver blocks, turf pavers"
        />
      </Helmet>

      <section className="w-fit h-fit m-auto flex flex-col items-center justify-center">
        {/* Semantic Header */}
        <header className="text-center py-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Durable and Stylish Paver Blocks for Every Outdoor Project
          </h1>
          <h2 className="text-xl font-semibold text-gray-700 mt-4">
            Choose Our Paver Blocks for Your Driveway and Walkways.
          </h2>
        </header>

        {/* Swiper Slider */}
        <SwiperSlider
          images={images}
          setModalOpen={setModalOpen}
          setImageUrl={setImageUrl}
        />

        {/* Additional Content */}
        <section className="max-w-4xl mx-auto py-12 px-4 text-center">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            High-Quality, Long-Lasting Paver Blocks for Residential & Commercial Use
          </h3>
          <p className="text-gray-600">
            Our premium paver blocks are designed to enhance the beauty and functionality of your outdoor spaces. Whether you're upgrading your driveway, walkways, or creating stunning patios, our paver blocks are built to last and withstand all weather conditions. Explore our range of styles, sizes, and colors to find the perfect match for your project.
          </p>
        </section>
      </section>
    </>
  );
};

export default PaverBlocks;
