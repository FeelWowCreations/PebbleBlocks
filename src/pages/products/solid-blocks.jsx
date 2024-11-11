import * as React from "react";
import Navbar from "../../components/Navbar";

import SixInch from "../../images/SolidBlocks/solid-block.png";
import FourInch from "../../images/SolidBlocks/solid-block.png";
import NineInch from "../../images/SolidBlocks/solid-block.png";
import SixInch2 from "../../images/SolidBlocks/solid-block.png";
import EightInch from "../../images/SolidBlocks/solid-block.png";
import NineInch2 from "../../images/SolidBlocks/solid-block.png";

import { motion } from "framer-motion";
import SolidBlocks from "@/components/Products/SolidBlocks";
import Footer from "@/components/Footer";
import { Link } from "gatsby";
import WhatsappButton from "@/components/ui/WhatsAppFixed";

const SolidBlocksMain = () => {
  return (
    <main>
      <Navbar />
      <main>
        <section className="relative flex justify-center items-center bg-[url('../images/AboutUs/brick-wall.jpeg')] bg-cover h-[200px]">
          <div className="w-full h-full bg-black opacity-20 absolute top-0 left-0"></div>
          <h1 className="text-xl md:text-2xl lg:text-4xl font-bold leading-9 text-white z-10 text-center">
            Solid Blocks
          </h1>
        </section>

        <section className="p-10">
          <SolidBlocks />
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
            <motion.div className="flex flex-col justify-self-center items-center shadow-md w-full">
              <div className="w-full h-full relative group flex items-center justify-center">
                <img
                  src={SixInch}
                  alt="paver block"
                  className="cursor-pointer w-[80%] h-[80%] rounded-lg hover:scale-105 transition-all duration-500 ease-in-out"
                />
                {/* <div class="absolute inset-0 flex items-end justify-center bg-[#00000066] text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Link to="/solid-blocks/12-6-8">
                    <div class="mb-3 cursor-pointer relative inline-flex items-center justify-center px-3 py-1 text-base font-bold text-white transition-all duration-200 bg-pebblePrimary border-2 border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:opacity-80 rounded">
                      Learn more
                    </div>
                  </Link>
                </div> */}
              </div>
              <div className=" w-full">
                <h2 className="font-bold">{`6 Inch Solid Block`}</h2>
                <ul class="border-t border-[#ccc] flex flex-col items-center justify-center">
                  <li className="py-2.5 px-0">{`Size - 12" x 6" x 8"`}</li>
                  <li className="py-2.5 px-0">{`300mm x 150mm x 200mm`}</li>
                </ul>
              </div>
            </motion.div>

            <motion.div className="flex flex-col justify-self-center items-center shadow-md w-full">
              <div className="w-full h-full relative group flex items-center justify-center">
                <img
                  src={FourInch}
                  alt="paver block"
                  className="cursor-pointer w-[80%] h-[80%] rounded-lg hover:scale-105 transition-all duration-500 ease-in-out"
                />
                {/* <div class="absolute inset-0 flex items-end justify-center bg-[#00000066] text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Link to="/solid-blocks/16-4-8">
                    <div class="mb-3 cursor-pointer relative inline-flex items-center justify-center px-3 py-1 text-base font-bold text-white transition-all duration-200 bg-pebblePrimary border-2 border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:opacity-80 rounded">
                      Learn more
                    </div>
                  </Link>
                </div> */}
              </div>
              <div className=" w-full">
                <h2 className="font-bold">{`4 Inch Solid Block`}</h2>
                <ul class="border-t border-[#ccc] flex flex-col items-center justify-center">
                  <li className="py-2.5 px-0">{`Size - 16" x 4" x 8"`}</li>
                  <li className="py-2.5 px-0">{`400mm x 100mm x 200mm`}</li>
                </ul>
              </div>
            </motion.div>

            <motion.div className="flex flex-col justify-self-center items-center shadow-md w-full">
              <div className="w-full h-full relative group flex items-center justify-center">
                <img
                  src={NineInch}
                  alt="paver block"
                  className="cursor-pointer w-[80%] h-[80%] rounded-lg hover:scale-105 transition-all duration-500 ease-in-out"
                />
                {/* <div class="absolute inset-0 flex items-end justify-center bg-[#00000066] text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Link to="/solid-blocks/9-8-8">
                    <div class="mb-3 cursor-pointer relative inline-flex items-center justify-center px-3 py-1 text-base font-bold text-white transition-all duration-200 bg-pebblePrimary border-2 border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:opacity-80 rounded">
                      Learn more
                    </div>
                  </Link>
                </div> */}
              </div>
              <div className=" w-full">
                <h2 className="font-bold">{`9 Inch Solid Block`}</h2>
                <ul class="border-t border-[#ccc] flex flex-col items-center justify-center">
                  <li className="py-2.5 px-0">{`Size - 9" x 8" x 8"`}</li>
                  <li className="py-2.5 px-0">{`225mm x 200mm x 200mm`}</li>
                </ul>
              </div>
            </motion.div>

            <motion.div className="flex flex-col justify-self-center items-center shadow-md w-full">
              <div className="w-full h-full relative group flex items-center justify-center">
                <img
                  src={SixInch2}
                  alt="paver block"
                  className="cursor-pointer w-[80%] h-[80%] rounded-lg hover:scale-105 transition-all duration-500 ease-in-out"
                />
                {/* <div class="absolute inset-0 flex items-end justify-center bg-[#00000066] text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Link to="/solid-blocks/16-6-8">
                    <div class="mb-3 cursor-pointer relative inline-flex items-center justify-center px-3 py-1 text-base font-bold text-white transition-all duration-200 bg-pebblePrimary border-2 border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:opacity-80 rounded">
                      Learn more
                    </div>
                  </Link>
                </div> */}
              </div>
              <div className=" w-full">
                <h2 className="font-bold">{`6 Inch Solid Block`}</h2>
                <ul class="border-t border-[#ccc] flex flex-col items-center justify-center">
                  <li className="py-2.5 px-0">{`Size - 16" x 6" x 8"`}</li>
                  <li className="py-2.5 px-0">{`400mm x 150mm x 200mm`}</li>
                </ul>
              </div>
            </motion.div>

            <motion.div className="flex flex-col justify-self-center items-center shadow-md w-full">
              <div className="w-full h-full relative group flex items-center justify-center">
                <img
                  src={EightInch}
                  alt="paver block"
                  className="cursor-pointer w-[80%] h-[80%] rounded-lg hover:scale-105 transition-all duration-500 ease-in-out"
                />
                {/* <div class="absolute inset-0 flex items-end justify-center bg-[#00000066] text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Link to="/solid-blocks/12-8-8">
                    <div class="mb-3 cursor-pointer relative inline-flex items-center justify-center px-3 py-1 text-base font-bold text-white transition-all duration-200 bg-pebblePrimary border-2 border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:opacity-80 rounded">
                      Learn more
                    </div>
                  </Link>
                </div> */}
              </div>
              <div className=" w-full">
                <h2 className="font-bold">{`8 Inch Solid Block`}</h2>
                <ul class="border-t border-[#ccc] flex flex-col items-center justify-center">
                  <li className="py-2.5 px-0">{`Size - 12" x 8" x 8"`}</li>
                  <li className="py-2.5 px-0">{`300mm x 200mm x 200mm`}</li>
                </ul>
              </div>
            </motion.div>

            <motion.div className="flex flex-col justify-self-center items-center shadow-md w-full">
              <div className="w-full h-full relative group flex items-center justify-center">
                <img
                  src={EightInch}
                  alt="paver block"
                  className="cursor-pointer w-[80%] h-[80%] rounded-lg hover:scale-105 transition-all duration-500 ease-in-out"
                />
                {/* <div class="absolute inset-0 flex items-end justify-center bg-[#00000066] text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Link to="/solid-blocks/9-4-3">
                    <div class="mb-3 cursor-pointer relative inline-flex items-center justify-center px-3 py-1 text-base font-bold text-white transition-all duration-200 bg-pebblePrimary border-2 border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:opacity-80 rounded">
                      Learn more
                    </div>
                  </Link>
                </div> */}
              </div>
              <div className=" w-full">
                <h2 className="font-bold">{`9"x4"x3" Solid Block`}</h2>
                <ul class="border-t border-[#ccc] flex flex-col items-center justify-center">
                  <li className="py-2.5 px-0">{`Size - 9" x 4" x 3"`}</li>
                  <li className="py-2.5 px-0">{`230mm x 110mm x 75mm`}</li>
                </ul>
              </div>
            </motion.div>
          </motion.div>
        </motion.section>
      </main>
      <WhatsappButton />
      <Footer />
    </main>
  );
};

export default SolidBlocksMain;

export const Head = () => (
  <>
    <title>Solid Blocks</title>
    <body />
  </>
);
