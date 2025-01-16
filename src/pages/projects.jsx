import Navbar from "@/components/Navbar";
import React, { useState } from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage, getSrc } from "gatsby-plugin-image";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import WhatsappButton from "@/components/ui/WhatsAppFixed";
import { Helmet } from "react-helmet";

const ProjectsMain = () => {
  const [modelOpen, setModelOpen] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          extension: { regex: "/(jpg)/" }
          relativeDirectory: { eq: "Projects" }
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
    <div>
      {/* SEO Optimization */}
      <Helmet>
        <title>Our Construction Projects - Pebble Blocks in Coimbatore</title>
        <meta
          name="description"
          content="Explore our completed construction projects in Coimbatore using solid and paver blocks. View how Pebble Blocks contributes to high-quality, durable builds."
        />
        <meta
          name="keywords"
          content="garden path tiles, cement pavers, paver block road, paver block flooring, paving tiles design"
        />
      </Helmet>

      <Navbar />
      <main className="relative">
        {/* Hero Section */}
        <section className="relative flex justify-center items-center bg-[url('../images/AboutUs/brick-wall.jpeg')] bg-cover h-[200px]">
          <div className="w-full h-full bg-black opacity-20 absolute top-0 left-0"></div>
          <h1 className="text-xl md:text-2xl lg:text-4xl font-bold leading-9 text-white z-10 text-center">
            Our Successful Construction Projects in Coimbatore
          </h1>
        </section>

        {/* Projects Section */}
        <section className="bg-[#eaf0fb]">
          <motion.div
            className="container mx-auto px-4 py-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              High-Quality Solid and Paver Block Solutions for Every Project
            </h2>
            <h3 className="text-lg text-gray-600 mb-8">
              Building Trust with Durable, Reliable Construction Projects
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {images.map((item, index) => (
                <div
                  key={index}
                  onClick={() => {
                    setModelOpen(true);
                    setImageUrl(item?.imageUrl);
                  }}
                  className="overflow-hidden h-72 md:h-[336px] lg:h-[440px] rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out"
                >
                  <GatsbyImage
                    image={item?.gatsbyImageData}
                    alt={`project_${index}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        <WhatsappButton />
        <Footer />

        {/* Modal Section */}
        {modelOpen && (
          <div
            className="fixed flex top-0 left-0 w-full h-full bg-[#000000] bg-opacity-50 justify-center items-center z-[40]"
            tabIndex={0}
            onClick={() => setModelOpen(false)}
          >
            <div className="absolute top-0 right-0 p-4">
              <button
                onClick={() => setModelOpen(false)}
                className="text-black -z-50"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <img
              src={imageUrl}
              alt="whatsapp-image"
              className="w-full h-full object-contain p-4"
            />
          </div>
        )}
      </main>
    </div>
  );
};

export default ProjectsMain;

export const Head = () => (
  <>
    <title>Our Construction Projects - Pebble Blocks in Coimbatore</title>
    <meta
      name="description"
      content="Explore our completed construction projects in Coimbatore using solid and paver blocks. View how Pebble Blocks contributes to high-quality, durable builds."
    />
    <meta
      name="keywords"
      content="garden path tiles, cement pavers, paver block road, paver block flooring, paving tiles design"
    />
  </>
);
