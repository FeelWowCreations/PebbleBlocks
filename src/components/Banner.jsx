import { graphql, Link, useStaticQuery } from "gatsby";
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
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Helmet } from "react-helmet";

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
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <header>
        <title>Paver Blocks Manufacturers in Coimbatore | Pebble Blocks</title>
        <meta
          name="description"
          content="Pebble Blocks is a leading paver blocks manufacturer in Coimbatore, offering durable, high-quality paving solutions for your construction projects."
        />
      </header>

      <main>
        <section
          className="relative w-full h-[calc(100vh-92px)] overflow-hidden"
          aria-label="Banner Section with Rotating Images"
        >
          <Swiper
            className="mySwiper h-full"
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
          >
            {images.map((_, index) => (
              <SwiperSlide key={index}>
                <figure className="h-full w-full">
                  <GatsbyImage
                    image={images[currentImageIndex]}
                    alt={`Pebble Blocks Banner Image ${index + 1}`}
                    placeholder="tracedSVG"
                    className="object-cover w-full h-full"
                  />
                </figure>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-gray-900 to-transparent flex flex-col justify-center items-center text-center p-8">
            <motion.h1
              className="text-4xl md:text-4xl text-white font-bold mb-4"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Paver Blocks Manufacturers in Coimbatore – Quality Paving Solutions by Pebble Blocks
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-white mb-6 px-4 md:px-8"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              From solid blocks to stylish pavers, we deliver the quality you
              need for durable construction solutions.
            </motion.p>
            <Link to="/contact-us">
              <motion.button
                className="px-6 py-3 bg-blue-500 text-white font-medium rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                Contact Us
              </motion.button>
            </Link>
          </div>
        </section>

        <section
          className="py-16 bg-gray-100"
          aria-label="Pebble Blocks Statistics Section"
        >
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-4xl font-bold text-center mb-8">
              We Provide Blocks from Foundations to Finishes
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <CounterCard
                value="3+"
                label="Manufacturing Units"
                Icon={<FactoryIcon />}
              />
              <CounterCard value="50+" label="Workers" Icon={<WorkersIcon />} />
              <CounterCard
                value="1000+"
                label="Customers"
                Icon={<CustomerIcon />}
              />
              <CounterCard
                value="25+"
                label="Products"
                Icon={<ProductsIcon />}
              />
              <CounterCard
                value="500+"
                label="Projects Completed"
                Icon={<ProjectIcon />}
              />
              <CounterCard
                value="30+"
                label="Suppliers"
                Icon={<SupplierIcon />}
              />
              <CounterCard
                value="15+"
                label="Years of Experience"
                Icon={<AwardIcon />}
              />
              <CounterCard
                value="75+"
                label="Happy Reviews"
                Icon={<ReviewIcons />}
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

const CounterCard = ({ value, label, Icon }) => (
  <motion.div
    className="bg-white rounded-lg shadow-lg p-6 text-center"
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
      {React.cloneElement(Icon, { className: "w-12 h-12" })}
    </motion.div>
    <h3 className="text-3xl font-bold text-blue-600">{value}</h3>
    <p className="text-gray-600 mt-2">{label}</p>
  </motion.div>
);

export default Banner;

export const Head = () => (
  <>
    {/* SEO meta tags */}
    <title>Paver Blocks Manufacturers in Coimbatore | Pebble Blocks</title>
    <meta
      name="description"
      content="Pebble Blocks is a leading paver blocks manufacturer in Coimbatore, offering durable, high-quality paving solutions for your construction projects."
    />
    <meta name="google-site-verification" content="yIwcr0WDHdyXwk1jvKlyoCvDN-HvkD4NZEa8Xups4Ic" />
    <meta
      name="keywords"
      content="paver blocks in coimbatore, parking stones, grass pavers, paver blocks manufacturers in coimbatore,paver blocks manufacturers near me"
    />
    <meta name="author" content="Pebble Blocks" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta property="og:title" content="Paver Blocks Manufacturers in Coimbatore | Pebble Blocks" />
    <meta
      property="og:description"
      content="Pebble Blocks is a leading paver blocks manufacturer in Coimbatore, offering durable, high-quality paving solutions for your construction projects."
    />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://pebbleblocks.com" />
    <meta property="og:image" content="https://pebbleblocks.com/og-image.jpg" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Solid & Paver Blocks Coimbatore" />
    <meta
      name="twitter:description"
      content="Pebble Blocks is a leading paver blocks manufacturer in Coimbatore, offering durable, high-quality paving solutions for your construction projects."
    />
    <meta name="twitter:image" content="https://pebbleblocks.com/twitter-image.jpg" />

    {/* Canonical URL */}
    <link rel="canonical" href="https://pebbleblocks.com" />

    {/* Favicon */}
    <link rel="icon" href="/favicon.ico" />

    {/* Structured Data */}
    <script type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "Pebble Blocks",
        url: "https://pebbleblocks.com",
        logo: "https://pebbleblocks.com/logo.png",
        description:
          "Pebble Blocks is a leading paver blocks manufacturer in Coimbatore, offering durable, high-quality paving solutions for your construction projects.",
        address: {
          "@type": "PostalAddress",
          streetAddress: "123 Main Street",
          addressLocality: "Coimbatore",
          addressRegion: "TN",
          postalCode: "641001",
          addressCountry: "IN",
        },
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+91-8883337674",
          contactType: "Customer Service",
        },
      })}
    </script>
  </>
);