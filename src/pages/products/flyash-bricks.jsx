import React from "react";
import Navbar from "../../components/Navbar";
import { motion } from "framer-motion";
//import FlyAshBlock from "../../images/Products/FlyashBlocks/flyash-block-1.jpg";
import WhatsappButton from "@/components/ui/WhatsAppFixed";

const FlyashBricksMain = () => {
  return (
    <div>
      <Navbar />
      <main>
        <section className="relative flex justify-center items-center bg-[url('../images/AboutUs/brick-wall.jpeg')] bg-cover h-[200px]">
          <div className="w-full h-full bg-black opacity-20 absolute top-0 left-0"></div>
          <h1 className="text-xl md:text-2xl lg:text-4xl font-bold leading-9 text-white z-10 text-center">
            Flyash Bricks
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
                  Flyash Bricks
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-[repeat(2,50%)] mb-[30px] w-full h-full">
                  <div className="w-[90%] h-[90%] col-span-1 self-center justify-self-center rounded-lg">
                    {/* <img
                      src={FlyAshBlock}
                      alt="fly-ash block"
                      className="w-full h-full rounded-lg"
                    /> */}
                  </div>
                  <div>Query Form</div>
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                >
                  <p class="mb-3 text-[#787878] text-base text-center leading-6">
                    Fly Ash Blocks are eco-friendly construction materials made
                    from fly ash, a byproduct of coal combustion in power
                    plants, along with other ingredients like cement, sand, and
                    water. They are increasingly popular in the construction
                    industry due to their sustainability, cost-effectiveness,
                    and technical advantages over traditional clay bricks or
                    concrete blocks.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <WhatsappButton />
    </div>
  );
};

export default FlyashBricksMain;

export const Head = () => (
  <>
    <title>Flyash Bricks</title>
    <body />
  </>
);
