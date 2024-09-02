import * as React from "react";
import Navbar from "../../components/Navbar";
import PaverBlocks from "@/components/Products/PaverBlocks";
import ZigZag from "../../images/PaverBlocks/zig-zag.jpg";
import EightCombo from "../../images/PaverBlocks/eight-combo.jpg";
import RectanglePaver from "../../images/PaverBlocks/rectangle-paver.jpg";
import VertexPaver from "../../images/PaverBlocks/vertex-paver.jpg";
import TetraPaver from "../../images/PaverBlocks/tetra-paver.jpg";
import IntekPaver from "../../images/PaverBlocks/intek-paver.jpg";
import RectanglePaverEight from "../../images/PaverBlocks/rectangle-paver-8.jpg";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import { Link } from "gatsby";

const PaverBlocksMain = () => {
  return (
    <main>
      <Navbar />
      <main>
        <section className="relative flex justify-center items-center bg-[url('../images/AboutUs/brick-wall.jpeg')] bg-cover h-[200px]">
          <div className="w-full h-full bg-black opacity-20 absolute top-0 left-0"></div>
          <h1 className="text-xl md:text-2xl lg:text-4xl font-bold leading-9 text-white z-10 text-center">
            Paver Blocks
          </h1>
        </section>

        <section className="p-10">
          <PaverBlocks />
        </section>
        <motion.h2
          className="text-[#23235F] flex justify-center mt-5 text-2xl"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Products Catalog
        </motion.h2>
        <motion.section
          className="p-[50px]"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <motion.div className="grid grid-cols-[repeat(1,1fr)] md:grid-cols-[repeat(2,1fr)] lg:grid-cols-[repeat(4,1fr)] text-center gap-x-5 gap-y-[30px]">
            <motion.div className="flex flex-col justify-self-center items-center shadow-md w-full ">
              <div className="w-full h-full relative group flex items-center justify-center">
                <img
                  src={ZigZag}
                  alt="paver block"
                  className="cursor-pointer w-[80%] h-[80%] rounded-lg hover:scale-105 transition-all duration-500 ease-in-out"
                />

                <div class="absolute inset-0 flex items-end justify-center bg-[#00000066] text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Link to="/paver-blocks/zig-zag">
                    <div class="mb-3 cursor-pointer relative inline-flex items-center justify-center px-3 py-1 text-base font-bold text-white transition-all duration-200 bg-pebblePrimary border-2 border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:opacity-80 rounded">
                      Learn more
                    </div>
                  </Link>
                </div>
              </div>

              <div className=" w-full">
                <h2 className="font-bold">Zig Zag Paver</h2>
                <ul class="border-t border-[#ccc] flex flex-col items-center justify-center">
                  <li className="py-2.5 px-0">{`Size - 25" x 12"`}</li>
                  <li className="py-2.5 px-0">83mm</li>
                  <li className="py-2.5 px-0 flex items-center gap-1">
                    <span className="h-4 w-4 rounded-full border-transparent bg-gray-400"></span>
                    <span className="h-4 w-4 rounded-full border-transparent bg-red-500"></span>
                    <span className="h-4 w-4 rounded-full border-transparent bg-gray-600"></span>
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div className="flex flex-col justify-self-center items-center shadow-md w-full">
              <img
                src={EightCombo}
                alt="paver block"
                className="cursor-pointer w-[80%] h-[80%] rounded-lg hover:scale-105 transition-all duration-500 ease-in-out"
              />
              <div className=" w-full">
                <h2 className="font-bold">Eight Combo Paver</h2>
                <ul class="border-t border-[#ccc] flex flex-col items-center justify-center">
                  <li className="py-2.5 px-0">{`Size - (11", 9", 7", 5", 4")`}</li>
                  <li className="py-2.5 px-0">63mm</li>
                  <li className="py-2.5 px-0 flex items-center gap-1">
                    <span className="h-4 w-4 rounded-full border-transparent bg-gray-400"></span>
                    <span className="h-4 w-4 rounded-full border-transparent bg-red-500"></span>
                    <span className="h-4 w-4 rounded-full border-transparent bg-gray-600"></span>
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div className="flex flex-col justify-self-center items-center shadow-md w-full">
              <img
                src={RectanglePaver}
                alt="paver block"
                className="cursor-pointer w-[80%] h-[80%] rounded-lg hover:scale-105 transition-all duration-500 ease-in-out"
              />
              <div className=" w-full">
                <h2 className="font-bold">Rectangle Paver</h2>
                <ul class="border-t border-[#ccc] flex flex-col items-center justify-center">
                  <li className="py-2.5 px-0">{`Size - 12" x 6"`}</li>
                  <li className="py-2.5 px-0">63mm</li>
                </ul>
              </div>
            </motion.div>

            <motion.div className="flex flex-col justify-self-center items-center shadow-md w-full">
              <img
                src={VertexPaver}
                alt="paver block"
                className="cursor-pointer w-[80%] h-[80%] rounded-lg hover:scale-105 transition-all duration-500 ease-in-out"
              />
              <div className=" w-full">
                <h2 className="font-bold">Vertex Paver</h2>
                <ul class="border-t border-[#ccc] flex flex-col items-center justify-center">
                  <li className="py-2.5 px-0">{`Size - 12" x 6"`}</li>
                  <li className="py-2.5 px-0">63mm</li>
                </ul>
              </div>
            </motion.div>

            <motion.div className="flex flex-col justify-self-center items-center shadow-md w-full">
              <img
                src={IntekPaver}
                alt="paver block"
                className="cursor-pointer w-[80%] h-[80%] rounded-lg hover:scale-105 transition-all duration-500 ease-in-out"
              />
              <div className=" w-full">
                <h2 className="font-bold">Intek Paver</h2>
                <ul class="border-t border-[#ccc] flex flex-col items-center justify-center">
                  <li className="py-2.5 px-0">{`Size - 12" x 6"`}</li>
                  <li className="py-2.5 px-0">63mm</li>
                </ul>
              </div>
            </motion.div>

            <motion.div className="flex flex-col justify-self-center items-center shadow-md w-full">
              <img
                src={TetraPaver}
                alt="paver block"
                className="cursor-pointer w-[80%] h-[80%] rounded-lg hover:scale-105 transition-all duration-500 ease-in-out"
              />
              <div className=" w-full">
                <h2 className="font-bold">Tetra Paver</h2>
                <ul class="border-t border-[#ccc] flex flex-col items-center justify-center">
                  <li className="py-2.5 px-0">{`Size - 12" x 6"`}</li>
                  <li className="py-2.5 px-0">63mm</li>
                </ul>
              </div>
            </motion.div>

            <motion.div className="flex flex-col justify-self-center items-center shadow-md w-full">
              <img
                src={RectanglePaverEight}
                alt="paver block"
                className="cursor-pointer w-[80%] h-[80%] rounded-lg hover:scale-105 transition-all duration-500 ease-in-out"
              />
              <div className=" w-full">
                <h2 className="font-bold">{`Rectangle Paver 8" x 11"`}</h2>
                <ul class="border-t border-[#ccc] flex flex-col items-center justify-center">
                  <li className="py-2.5 px-0">{`Size - 8" x 11"`}</li>
                  <li className="py-2.5 px-0">63mm</li>
                </ul>
              </div>
            </motion.div>

            <motion.div className="flex flex-col justify-self-center items-center shadow-md w-full">
              <img
                src={RectanglePaverEight}
                alt="paver block"
                className="cursor-pointer w-[80%] h-[80%] rounded-lg hover:scale-105 transition-all duration-500 ease-in-out"
              />
              <div className=" w-full">
                <h2 className="font-bold">{`Rectangle Paver 8" x 9"`}</h2>
                <ul class="border-t border-[#ccc] flex flex-col items-center justify-center">
                  <li className="py-2.5 px-0">{`Size - 8" x 9"`}</li>
                  <li className="py-2.5 px-0">63mm</li>
                </ul>
              </div>
            </motion.div>
          </motion.div>
        </motion.section>
      </main>
      <Footer />
    </main>
  );
};

export default PaverBlocksMain;

export const Head = () => (
  <>
    <title>Paver Blocks</title>
    <body />
  </>
);
