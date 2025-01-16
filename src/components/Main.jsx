import React from "react";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-orange-50">
      {/* Hero Section */}
      <motion.section
        className="relative flex justify-center items-center bg-[url('../images/AboutUs/brick-wall.jpeg')] bg-cover h-[200px] md:h-[300px] lg:h-[400px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="w-full h-full bg-black opacity-50 absolute top-0 left-0"></div>
        <motion.h1
          className="text-xl md:text-3xl lg:text-5xl font-bold text-white z-10 text-center px-4"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Leading Supplier of Solid and Paver Blocks in Coimbatore
        </motion.h1>
      </motion.section>

      {/* About Us Content Section */}
      <section className="px-4 py-10 md:py-16 lg:py-20 max-w-full lg:mx-20 mx-auto">
        <motion.div
          className="bg-white backdrop-blur-sm bg-opacity-70 shadow-xl border border-gray-200 p-8 md:p-12 rounded-2xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-2xl md:text-3xl lg:text-4xl font-semibold text-center mb-8 text-blue-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Our Mission: Quality, Durability, and Customer Satisfaction
          </motion.h2>
          {aboutUsContent.map((paragraph, index) => (
            <motion.p
              key={index}
              className="text-left text-lg md:text-xl leading-relaxed mb-6 last:mb-0 text-gray-700"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + index * 0.2, duration: 0.5 }}
            >
              {paragraph}
            </motion.p>
          ))}
        </motion.div>
      </section>
    </div>
  );
};

const aboutUsContent = [
  "Pebble Blocks is a leading manufacturer of high-quality bricks and blocks, with over 15+ years of experience in the field. We specialize in producing solid, hollow, flyash, concrete, and paver blocks, making us a trusted name in the industry.",
  "Since its establishment, Pebble Blocks has become the most trusted paver block manufacturer in Coimbatore. We provide a premium range of products, including square paver blocks, rectangular heavy-duty paver blocks, zig-zag pavers, and interlocking pavers for various paving requirements.",
  "Our paver blocks are typically used for constructing pathways, pavements, yards, and boundaries. Made from cement mortar and composite materials, our blocks are known for their durability, easy installation, and weather resistance.",
  "As a leading paver block manufacturer in Coimbatore, India, we use high-quality raw materials and state-of-the-art manufacturing processes to deliver products of exceptional quality. Our modern production lines and implementation of advanced tools allow us to meet the diverse needs of our clients.",
  "Our range of pavers is available in various sizes and shapes, customized to our client's requirements. As trusted paver block suppliers in Coimbatore, we have established a vast client base, offering on-time delivery and customized packaging solutions."
];

export default AboutUs;

export const Head = () => (
  <>
    {/* SEO meta tags */}
    <title>About Pebble Blocks - Quality Solid & Paver Blocks in Coimbatore</title>
    <meta
      name="description"
      content="Learn about Pebble Blocks, Coimbatore's trusted provider of high-quality solid and paver blocks for construction. Durable products for residential & commercial needs."
    />
    <meta
      name="keywords"
      content="paver blocks price in coimbatore, block manufacturers, solid concrete block sizes, paver designs, solid concrete blocks"
    />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="author" content="Pebble Blocks" />
    <meta property="og:title" content="About Pebble Blocks - Quality Solid & Paver Blocks in Coimbatore" />
    <meta
      property="og:description"
      content="Learn about Pebble Blocks, Coimbatore's trusted provider of high-quality solid and paver blocks for construction. Durable products for residential & commercial needs."
    />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://pebbleblocks.com/about-us" />
    <meta property="og:image" content="https://pebbleblocks.com/images/about-us/og-image.jpg" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="About Pebble Blocks - Quality Solid & Paver Blocks" />
    <meta
      name="twitter:description"
      content="Discover Pebble Blocks in Coimbatore - Offering durable solid and paver blocks for all types of construction projects."
    />
    <meta name="twitter:image" content="https://pebbleblocks.com/images/about-us/twitter-image.jpg" />

    {/* Canonical URL */}
    <link rel="canonical" href="https://pebbleblocks.comabout-us" />

    {/* Favicon */}
    <link rel="icon" href="/favicon.ico" />
  </>
);
