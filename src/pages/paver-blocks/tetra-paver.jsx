import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import TetraImage from "../../images/PaverBlocks/tetra-2.jpg";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import BlocksSlider from "@/components/Products/BlocksSlider";
import { graphql, useStaticQuery } from "gatsby";
import { getSrc } from "gatsby-plugin-image";
import emailjs from "emailjs-com";

const TetraPaver = () => {
  const [modelOpen, setModelOpen] = React.useState(false);
  const [imageUrl, setImageUrl] = React.useState("");

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

  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("your_service_id", "your_template_id", e.target, "your_user_id")
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
                  <div className="space-y-4">
                    <h2 className="text-lg font-bold">
                      Request More Information
                    </h2>
                    <form onSubmit={sendEmail} className="space-y-4">
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
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="Your Email"
                        className="w-full border border-gray-300 rounded-md p-2"
                        required
                      />
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Your Message"
                        className="w-full border border-gray-300 rounded-md p-2"
                        rows="4"
                        required
                      ></textarea>
                      <button
                        type="submit"
                        className="w-full bg-green-600 text-white font-bold py-2 rounded-md"
                      >
                        Submit Enquiry
                      </button>
                    </form>
                  </div>
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                >
                  <p className="mb-3 text-[#787878] text-base text-center leading-6">
                    <strong>Tetra</strong> Paver Blocks are a distinctive type
                    of interlocking concrete block known for their durability,
                    versatility, and unique shape, which allows for various
                    creative patterns and designs. Made from high-quality
                    cement, aggregates, and sometimes colored pigments, these
                    blocks offer not only robust structural integrity but also
                    aesthetic appeal. Their interlocking feature provides
                    stability and reduces the need for additional adhesives or
                    mortar, making them a popular choice for many construction
                    and landscaping projects.
                    <br />
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
          <BlocksSlider
            images={images}
            setModalOpen={setModelOpen}
            setImageUrl={setImageUrl}
          />
        </section>
        <Footer />

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
              className="w-full h-full object-contain p-14"
            />
          </div>
        )}
      </main>
    </main>
  );
};

export default TetraPaver;
