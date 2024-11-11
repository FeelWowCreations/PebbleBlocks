import React from "react";
import Navbar from "../../components/Navbar";
import TetraImage from "../../images/PaverBlocks/Tetra/tetra-2.jpg";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import BlocksSlider from "@/components/Products/BlocksSlider";
import { graphql, useStaticQuery } from "gatsby";
import { getSrc } from "gatsby-plugin-image";

const TetraPaver = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          extension: { regex: "/(jpg)/" }
          relativeDirectory: { eq: "Products/Tetra" }
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
    <main>
      <Navbar />
      <main>
        <section className="relative flex justify-center items-center bg-[url('../images/AboutUs/brick-wall.jpeg')] bg-cover h-[200px]">
          <div className="w-full h-full bg-black opacity-20 absolute top-0 left-0"></div>
          <h1 className="text-xl md:text-2xl lg:text-4xl font-bold leading-9 text-white z-10 text-center">
            Tetra Paver Block
          </h1>
        </section>

        <section className="pb-20 bg-[#eff2f5]">
          <div className="max-w-[1250px] m-auto">
            <div className="shadow-12 p-[30px] lg:py-10 lg:px-[140px] relative bg-white rounded-xl">
              <div className="flex flex-col items-center">
                <h5 className="text-2xl font-bold z-10 mb-[15px] inline-block text-[#298212]">
                  PRODUCTS
                </h5>
                <h1 className="mb-[30px] font-extrabold mt-[-5px] p-0 text-[40px]">
                  Tetra Block
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-[repeat(2,50%)] mb-[30px] w-full h-full">
                  <div className="w-[300px] h-[280px] md:w-[350px] md:h-[350px] col-span-1 self-center justify-self-center rounded-lg">
                    <img
                      src={TetraImage}
                      alt="tetra block"
                      className="w-full h-full rounded-lg"
                    />
                  </div>
                  <div>Query Form</div>
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                >
                  <p class="mb-3 text-[#787878] text-base text-center leading-6">
                    <strong>Tetra</strong> Paver Blocks are a distinctive type
                    of interlocking concrete block known for their durability,
                    versatility, and unique shape, which allows for various
                    creative patterns and designs. Made from high-quality
                    cement, aggregates, and sometimes colored pigments, these
                    blocks offer not only robust structural integrity but also
                    aesthetic appeal. Their interlocking feature provides
                    stability and reduces the need for additional adhesives or
                    mortar, making them a popular choice for many construction
                    and landscaping projects.<br></br>
                    Tetra Paver Blocks are a high-quality, versatile solution
                    for both decorative and heavy-duty outdoor projects. Their
                    interlocking design ensures longevity and stability, making
                    them an excellent choice for residential, commercial, and
                    industrial applications where durability and visual appeal
                    are key.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#eff2f5] flex flex-col justify-center items-center">
          <h1 className="mb-[30px] font-bold mt-[-5px] p-0 text-[35px]">
            Tetra Block Projects
          </h1>
          <BlocksSlider images={images} />
        </section>
        <Footer />
      </main>
    </main>
  );
};

export default TetraPaver;
