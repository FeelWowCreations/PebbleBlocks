import React from "react";
import Navbar from "../../components/Navbar";
import ZigZagImage from "../../images/PaverBlocks/single/zig-zag.jpg";
import PaverBlocks from "@/components/Products/PaverBlocks";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const ZigZag = () => {
  return (
    <main>
      <Navbar />
      <main>
        <section className="relative flex justify-center items-center bg-[url('../images/AboutUs/brick-wall.jpeg')] bg-cover h-[200px]">
          <div className="w-full h-full bg-black opacity-20 absolute top-0 left-0"></div>
          <h1 className="text-xl md:text-2xl lg:text-4xl font-bold leading-9 text-white z-10 text-center">
           Eight Combo Blocks
          </h1>
        </section>

        <section className="py-20 bg-[#eff2f5]">
          <div className="max-w-[1250px] m-auto">
            <div className="shadow-12 p-[30px] lg:py-10 lg:px-[140px] relative bg-white rounded-xl">
              <div className="flex flex-col items-center">
                <h5 className="text-2xl font-bold z-10 mb-[15px] inline-block text-[#298212]">
                  PRODUCTS
                </h5>
                <h1 className="mb-[30px] font-extrabold mt-[-5px] p-0 text-[40px]">
                  Zig Zag Blocks
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-[repeat(2,50%)] mb-[30px] w-full h-full">
                  <div className="w-[80%] h-[80%] col-span-1 self-center justify-self-center rounded-lg">
                    <img
                      src={ZigZagImage}
                      alt="zig-zag block"
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
                    Zigzag pavers, also known as herringbone pavers or zigzag
                    pattern pavers, are a popular choice for creating attractive
                    and durable outdoor surfaces such as walkways, driveways,
                    and patios. The zigzag pattern is created by laying the
                    pavers at 45-degree angles to each other, which not only
                    adds visual interest but also enhances the structural
                    stability of the pavement. We provide interlock pavers with
                    Zig Zag pavers to withstand heavy weights in the outdoors
                    like parking lots, pavements, and traffic areas. Our clients
                    are stastifed with our{" "}
                    <a href="/projects">Zig zag pavers</a> installation. We take
                    pride in manufacturing zigzag pavers in coimbatore and
                    interlock pavers.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#eff2f5] flex flex-col justify-center items-center">
          <h1 className="mb-[30px] font-bold mt-[-5px] p-0 text-[35px]">
            Zig Zag Block Projects
          </h1>
          <PaverBlocks />
        </section>
        <Footer />
      </main>
    </main>
  );
};

export default ZigZag;