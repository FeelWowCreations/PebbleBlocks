import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import IntekImage from "../../images/PaverBlocks/intek-paver.jpg";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import BlocksSlider from "@/components/Products/BlocksSlider";
import { graphql, useStaticQuery } from "gatsby";
import { getSrc } from "gatsby-plugin-image";
import emailjs from "emailjs-com";

const IntekPaver = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          extension: { regex: "/(jpg)/" }
          relativeDirectory: { eq: "Products/Intek" }
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

  const [form, setForm] = useState({ name: "", email: "", quantity: "", area: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "your_service_id",
        "your_template_id",
        e.target,
        "your_user_id"
      )
      .then(
        (result) => {
          alert("Enquiry sent successfully!");
        },
        (error) => {
          alert("Failed to send enquiry. Please try again.");
        }
      );
  };

  return (
    <main>
      <Navbar />
      <main>
        <section className="relative flex justify-center items-center bg-[url('../images/AboutUs/brick-wall.jpeg')] bg-cover h-[200px]">
          <div className="w-full h-full bg-black opacity-20 absolute top-0 left-0"></div>
          <h1 className="text-xl md:text-2xl lg:text-4xl font-bold leading-9 text-white z-10 text-center">
            Intek Blocks
          </h1>
        </section>

        <section className="pb-20 bg-[#eff2f5]">
          <div className="max-w-[1250px] m-auto">
            <div className="shadow-12 p-[30px] lg:py-10 lg:px-[140px] relative bg-white rounded-xl">
              <div className="flex flex-col items-center">
                {/* <h5 className="text-2xl font-bold z-10 mb-[15px] inline-block text-[#298212]">
                  PRODUCTS
                </h5>
                <h1 className="mb-[30px] font-extrabold mt-[-5px] p-0 text-[40px]">
                  Intek Blocks
                </h1> */}
                <div className="grid grid-cols-1 md:grid-cols-[repeat(2,50%)] mb-[30px] w-full h-full">
                  <div className="w-[300px] h-[280px] md:w-[350px] md:h-[350px] col-span-1 self-center justify-self-center rounded-lg">
                    <img
                      src={IntekImage}
                      alt="Intek Block"
                      className="w-full h-full rounded-lg"
                    />
                  </div>
                  <form className="space-y-4" onSubmit={sendEmail}>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      className="w-full border border-gray-300 rounded-md p-2"
                      required
                    />
                    <input
                      type="number"
                      name="number"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="Your Contact Number"
                      className="w-full border border-gray-300 rounded-md p-2"
                      required
                    />
                    <input
                      type="text"
                      name="quantity"
                      value={form.quantity}
                      onChange={handleChange}
                      placeholder="Quantity (e.g., number of blocks)"
                      className="w-full border border-gray-300 rounded-md p-2"
                      required
                    />
                    <input
                      type="text"
                      name="area"
                      value={form.area}
                      onChange={handleChange}
                      placeholder="Area in sqft"
                      className="w-full border border-gray-300 rounded-md p-2"
                      required
                    />
                    <button
                      type="submit"
                      className="w-full bg-green-600 text-white font-bold py-2 rounded-md"
                    >
                      Submit Enquiry
                    </button>
                  </form>
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                >
                  <p className="mb-3 text-[#787878] text-base text-center leading-6">
                    Zigzag pavers, also known as herringbone pavers or zigzag
                    pattern pavers, are a popular choice for creating attractive
                    and durable outdoor surfaces such as walkways, driveways,
                    and patios. The zigzag pattern is created by laying the
                    pavers at 45-degree angles to each other, which not only
                    adds visual interest but also enhances the structural
                    stability of the pavement. We provide interlock pavers with
                    Zig Zag pavers to withstand heavy weights in the outdoors
                    like parking lots, pavements, and traffic areas. Our clients
                    are satisfied with our{" "}
                    <a href="/projects">Zigzag pavers</a> installation. We take
                    pride in manufacturing zigzag pavers in Coimbatore and
                    interlock pavers.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#eff2f5] flex flex-col justify-center items-center">
          <h1 className="mb-[30px] font-bold mt-[-5px] p-0 text-[35px]">
            Intek Block Projects
          </h1>
          <BlocksSlider images={images} />
        </section>
        <Footer />
      </main>
    </main>
  );
};

export default IntekPaver;
