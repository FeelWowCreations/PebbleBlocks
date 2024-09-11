import Navbar from "@/components/Navbar";
import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import WhatsappButton from "@/components/ui/WhatsAppFixed";

const ProjectsMain = () => {
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

  const images = data.allFile.edges.map(
    (edge) => edge.node.childImageSharp.gatsbyImageData
  );

  return (
    <div>
      <Navbar />
      <main>
        <section className="relative flex justify-center items-center bg-[url('../images/AboutUs/brick-wall.jpeg')] bg-cover h-[200px]">
          <div className="w-full h-full bg-black opacity-20 absolute top-0 left-0"></div>
          <h1 className="text-xl md:text-2xl lg:text-4xl font-bold leading-9 text-white z-10 text-center">
            Gallery
          </h1>
        </section>

        <section className="bg-[#eaf0fb]">
          <motion.div
            className="container mx-auto px-4 py-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {images.map((item, index) => (
                <div
                  key={index}
                  className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out"
                >
                  <GatsbyImage
                    image={getImage(item)}
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
      </main>
    </div>
  );
};

export default ProjectsMain;

export const Head = () => (
  <>
    <title>Projects</title>
    <body />
  </>
);
