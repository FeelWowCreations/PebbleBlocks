import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import EightInchImage from "../../images/Products/EightCombo/8Combo1.jpg";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import BlocksSlider from "@/components/Products/BlocksSlider";
import { graphql, useStaticQuery } from "gatsby";
import { getSrc } from "gatsby-plugin-image";
import emailjs from "emailjs-com";

const EightInch = () => {
  const [modelOpen, setModelOpen] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const [emailStatus, setEmailStatus] = useState(null); // success or error
  const [statusMessage, setStatusMessage] = useState("");

  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          extension: { regex: "/(jpg)/" }
          relativeDirectory: { eq: "Products/EightCombo" }
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
    imageUrl: getSrc(edge.node.childImageSharp.gatsbyImageData),
  }));

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    area: "",
    product: "Eight Inch Paver",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_3w9ux2t", "template_jxo7tb9", e.target, "bGSllFnbAIFCmLRtW")
      .then(
        (result) => {
          setEmailStatus("success");
          setStatusMessage("Enquiry sent successfully!");
          setForm({
            name: "",
            email: "",
            phone: "",
            area: "",
            product: "Eight-Inch Paver",
          });
          e.target.reset();
        },
        (error) => {
          setEmailStatus("error");
          setStatusMessage("Failed to send enquiry. Please try again.");
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
            Eight Inch Paver
          </h1>
        </section>

        <section className="pb-20 bg-[#eff2f5]">
          <div className="max-w-[1250px] m-auto">
            <div className="shadow-12 p-[30px] lg:py-10 lg:px-[140px] relative bg-white rounded-xl">
              <div className="flex flex-col items-center">
                <div className="grid grid-cols-1 md:grid-cols-[repeat(2,50%)] gap-y-6 md:gap-10 mb-10 w-full h-full">
                  <div className="w-[280px] h-[260px] md:w-[320px] md:h-[320px] col-span-1 self-center justify-self-center rounded-lg">
                    <img
                      src={EightInchImage}
                      alt="Eight Inch Block"
                      className="w-full h-full rounded-lg"
                    />
                  </div>
                  <div className="ml-0 md:ml-10">
                    <form className="space-y-4" onSubmit={sendEmail}>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your Name  (required)"
                        className="w-full border border-gray-300 rounded-md p-2"
                        required
                      />
                      <div className="flex space-x-2">
                        <select
                          name="countryCode"
                          value={form.countryCode}
                          onChange={handleChange}
                          className="w-[20%] border border-gray-300 rounded-md p-2 bg-white"
                          required
                        >
                          <option value="+91">+91 (India)</option>
                          {/* Add other options */}
                        </select>
                        <input
                          type="tel"
                          name="phone"
                          value={form.number}
                          onChange={handleChange}
                          placeholder="Your Contact Number  (required)"
                          className="w-[80%] border border-gray-300 rounded-md p-2"
                          required
                        />
                      </div>
                      <input
                        type="email"
                        name="email"
                        value={form.mailID}
                        onChange={handleChange}
                        placeholder="Your Mail Address  (optional)"
                        className="w-full border border-gray-300 rounded-md p-2"
                      />
                      <input
                        type="text"
                        name="area"
                        value={form.area}
                        onChange={handleChange}
                        placeholder="Area in sqft  (optional)"
                        className="w-full border border-gray-300 rounded-md p-2"
                      />
                      <input
                        type="text"
                        name="product"
                        value={form.product}
                        placeholder="Eight Inch paver"
                        className="w-full border border-gray-300 rounded-md p-2"
                        readOnly
                      />
                      <button
                        type="submit"
                        className="w-full bg-green-600 text-white font-bold py-2 rounded-md"
                      >
                        Submit Enquiry
                      </button>
                    </form>
                    {emailStatus && (
                      <div
                        className={`mt-4 text-center font-bold ${
                          emailStatus === "success" ? "text-green-600" : "text-red-600"
                        }`}
                      >
                        {statusMessage}
                      </div>
                    )}
                  </div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                >
                  <p className="mb-3 text-[#787878] text-base text-center leading-6">
                  Experience the perfect blend of strength and style with our 8-inch combo paver blocks, featuring a robust design and an elegant leather finish. These pavers are ideal for driveways, patios, and high-traffic areas, offering unmatched durability and a premium textured appearance. Built for long-lasting performance and easy maintenance, they add a sophisticated touch to any outdoor or commercial space.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#eff2f5] flex flex-col justify-center items-center">
          <h1 className="mb-[30px] font-bold mt-[-5px] p-0 text-lg md:text-[35px]">
            Eight Inch Block Projects
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
              className="w-full h-full object-contain p-4"
            />
          </div>
        )}
      </main>
    </main>
  );
};

export default EightInch;
