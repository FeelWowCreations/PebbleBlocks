import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ReactComponent as ProductsIcon } from "../images/Icons/products.svg";
import { ReactComponent as WorkersIcon } from "../images/Icons/workers.svg";
import { ReactComponent as CustomerIcon } from "../images/Icons/customers.svg";
import { ReactComponent as FactoryIcon } from "../images/Icons/factory.svg";
import { ReactComponent as ProjectIcon } from "../images/Icons/projects.svg";
import { ReactComponent as SupplierIcon } from "../images/Icons/suppliers.svg";
import { ReactComponent as AwardIcon } from "../images/Icons/awards.svg";
import { ReactComponent as ReviewIcons } from "../images/Icons/reviews.svg";

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
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <>
      <section className="relative w-full h-screen overflow-hidden">
        <figure className="absolute inset-0">
          <GatsbyImage
            image={images[currentImageIndex]}
            alt="banner"
            className="object-cover w-full h-full transition-transform duration-1500 ease-in-out"
            placeholder="tracedSVG"
          />
        </figure>
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent flex flex-col justify-center items-center text-center p-8">
          <motion.h1
            className="text-4xl md:text-6xl text-white font-bold mb-4"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Building Better with Pebble Blocks
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-white mb-6 px-4 md:px-8"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
          We Provide Reliable High Quality Bricks and Blocks From Foundations to Finishes
          </motion.p>
          <motion.button
            className="px-6 py-3 bg-blue-500 text-white font-medium rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            Contact Us
          </motion.button>
        </div>
      </section>

      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <CounterCard value="3+" label="Manufacturing Units" Icon={<FactoryIcon />} />
            <CounterCard value="50+" label="Workers" Icon={<WorkersIcon />} />
            <CounterCard value="1000+" label="Customers" Icon={<CustomerIcon />} />
            <CounterCard value="25+" label="Products" Icon={<ProductsIcon className="w-12 h-12"/>} />
            <CounterCard value="500+" label="Projects Completed" Icon={<ProjectIcon />} />
            <CounterCard value="30+" label="Suppliers" Icon={<SupplierIcon />} />
            <CounterCard value="15+" label="Years of Experience" Icon={<AwardIcon />} />
            <CounterCard value="75+" label="Happy Reviews" Icon={<ReviewIcons />} />
          </div>
        </div>
      </section>
    </>
  );
};

// CounterCard Component
const CounterCard = ({ value, label, Icon }) => {
  return (
    <motion.div
      className="bg-white rounded-lg shadow-lg p-6 text-center transform transition-transform duration-300 hover:scale-105"
      initial={{ scale: 0.9 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="mb-4 flex justify-center items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {/* Icon with w-12 h-12 size */}
        {React.cloneElement(Icon, { className: 'w-12 h-12' })}
      </motion.div>
      <motion.h2
        className="text-3xl font-bold text-blue-600"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        {value}
      </motion.h2>
      <motion.p
        className="text-gray-600 mt-2"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        {label}
      </motion.p>
    </motion.div>
  );
};



export default Banner;
