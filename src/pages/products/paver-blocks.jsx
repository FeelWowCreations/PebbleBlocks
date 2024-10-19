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
import WhatsappButton from "@/components/ui/WhatsAppFixed";

const PaverBlocksMain = () => {
  const [modelOpen, setModelOpen] = React.useState(false);
  const [imageUrl, setImageUrl] = React.useState("");

  return (
    <main>
      <Navbar />
      <main className="relative">
        <section className="relative flex justify-center items-center bg-[url('../images/AboutUs/brick-wall.jpeg')] bg-cover h-[200px]">
          <div className="w-full h-full bg-black opacity-20 absolute top-0 left-0"></div>
          <h1 className="text-xl md:text-2xl lg:text-4xl font-bold leading-9 text-white z-10 text-center">
            Paver Blocks
          </h1>
        </section>

        <section className="p-10">
          <PaverBlocks setModalOpen={setModelOpen} setImageUrl={setImageUrl} />
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
                  <li className="py-2.5 px-0">{`Zigzag pavers offer a range of benefits due to their unique design andmproved interlocking stability.`}</li>
                </ul>
              </div>
            </motion.div>

            <motion.div className="flex flex-col justify-self-center items-center shadow-md w-full">
              <div className="w-full h-full relative group flex items-center justify-center">
                <img
                  src={EightCombo}
                  alt="paver block"
                  className="cursor-pointer w-[80%] h-[80%] rounded-lg hover:scale-105 transition-all duration-500 ease-in-out"
                />
                <div class="absolute inset-0 flex items-end justify-center bg-[#00000066] text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Link to="/paver-blocks/eight-combo">
                    <div class="mb-3 cursor-pointer relative inline-flex items-center justify-center px-3 py-1 text-base font-bold text-white transition-all duration-200 bg-pebblePrimary border-2 border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:opacity-80 rounded">
                      Learn more
                    </div>
                  </Link>
                </div>
              </div>

              <div className=" w-full">
                <h2 className="font-bold">Eight Combo Paver</h2>
                <ul class="border-t border-[#ccc] flex flex-col items-center justify-center">
                  <li className="py-2.5 px-0">{`It refers to a set of eight different types or designs of pavers combined into a single package or collection.`}</li>
                </ul>
              </div>
            </motion.div>

            <motion.div className="flex flex-col justify-self-center items-center shadow-md w-full">
              <div className="w-full h-full relative group flex items-center justify-center">
                <img
                  src={RectanglePaver}
                  alt="paver block"
                  className="cursor-pointer w-[80%] h-[80%] rounded-lg hover:scale-105 transition-all duration-500 ease-in-out"
                />
                <div class="absolute inset-0 flex items-end justify-center bg-[#00000066] text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Link to="/paver-blocks/rectangle-paver">
                    <div class="mb-3 cursor-pointer relative inline-flex items-center justify-center px-3 py-1 text-base font-bold text-white transition-all duration-200 bg-pebblePrimary border-2 border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:opacity-80 rounded">
                      Learn more
                    </div>
                  </Link>
                </div>
              </div>

              <div className=" w-full">
                <h2 className="font-bold">Rectangle Paver</h2>
                <ul class="border-t border-[#ccc] flex flex-col items-center justify-center">
                  <li className="py-2.5 px-0">{`Rectangle pavers, as the name suggests, are paving units with a clean and classic rectangle shape.`}</li>
                </ul>
              </div>
            </motion.div>

            <motion.div className="flex flex-col justify-self-center items-center shadow-md w-full">
              <div className="w-full h-full relative group flex items-center justify-center">
                <img
                  src={VertexPaver}
                  alt="paver block"
                  className="cursor-pointer w-[80%] h-[80%] rounded-lg hover:scale-105 transition-all duration-500 ease-in-out"
                />
                <div class="absolute inset-0 flex items-end justify-center bg-[#00000066] text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Link to="/paver-blocks/vertex-paver">
                    <div class="mb-3 cursor-pointer relative inline-flex items-center justify-center px-3 py-1 text-base font-bold text-white transition-all duration-200 bg-pebblePrimary border-2 border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:opacity-80 rounded">
                      Learn more
                    </div>
                  </Link>
                </div>
              </div>

              <div className=" w-full">
                <h2 className="font-bold">Vertex Paver</h2>
                <ul class="border-t border-[#ccc] flex flex-col items-center justify-center">
                  <li className="py-2.5 px-0">{`Vertex pavers introduce a captivating undulating pattern with unique design to your outdoor spaces.`}</li>
                </ul>
              </div>
            </motion.div>

            <motion.div className="flex flex-col justify-self-center items-center shadow-md w-full">
              <div className="w-full h-full relative group flex items-center justify-center">
                <img
                  src={IntekPaver}
                  alt="paver block"
                  className="cursor-pointer w-[80%] h-[80%] rounded-lg hover:scale-105 transition-all duration-500 ease-in-out"
                />
                <div class="absolute inset-0 flex items-end justify-center bg-[#00000066] text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Link to="/paver-blocks/intek-paver">
                    <div class="mb-3 cursor-pointer relative inline-flex items-center justify-center px-3 py-1 text-base font-bold text-white transition-all duration-200 bg-pebblePrimary border-2 border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:opacity-80 rounded">
                      Learn more
                    </div>
                  </Link>
                </div>
              </div>

              <div className=" w-full">
                <h2 className="font-bold">Intek Paver</h2>
                <ul class="border-t border-[#ccc] flex flex-col items-center justify-center">
                  <li className="py-2.5 px-0">{`Intek Paver blocks, also known as paving stones, are specialized building materials used for surfacing outdoor areas.`}</li>
                </ul>
              </div>
            </motion.div>

            <motion.div className="flex flex-col justify-self-center items-center shadow-md w-full">
              <div className="w-full h-full relative group flex items-center justify-center">
                <img
                  src={TetraPaver}
                  alt="paver block"
                  className="cursor-pointer w-[80%] h-[80%] rounded-lg hover:scale-105 transition-all duration-500 ease-in-out"
                />
                <div class="absolute inset-0 flex items-end justify-center bg-[#00000066] text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Link to="/paver-blocks/tetra-paver">
                    <div class="mb-3 cursor-pointer relative inline-flex items-center justify-center px-3 py-1 text-base font-bold text-white transition-all duration-200 bg-pebblePrimary border-2 border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:opacity-80 rounded">
                      Learn more
                    </div>
                  </Link>
                </div>
              </div>

              <div className=" w-full">
                <h2 className="font-bold">Tetra Paver</h2>
                <ul class="border-t border-[#ccc] flex flex-col items-center justify-center">
                  <li className="py-2.5 px-0">{`Tetra pavers are easy to maintain which resist stains, dirt, and oil spills, making cleaning a hassle-free process.`}</li>
                </ul>
              </div>
            </motion.div>

            <motion.div className="flex flex-col justify-self-center items-center shadow-md w-full">
              <div className="w-full h-full relative group flex items-center justify-center">
                <img
                  src={RectanglePaverEight}
                  alt="paver block"
                  className="cursor-pointer w-[80%] h-[80%] rounded-lg hover:scale-105 transition-all duration-500 ease-in-out"
                />
                <div class="absolute inset-0 flex items-end justify-center bg-[#00000066] text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Link to="/paver-blocks/rectangle-paver-8-11">
                    <div class="mb-3 cursor-pointer relative inline-flex items-center justify-center px-3 py-1 text-base font-bold text-white transition-all duration-200 bg-pebblePrimary border-2 border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:opacity-80 rounded">
                      Learn more
                    </div>
                  </Link>
                </div>
              </div>

              <div className=" w-full">
                <h2 className="font-bold">{`Rectangle Paver 8" x 11"`}</h2>
                <ul class="border-t border-[#ccc] flex flex-col items-center justify-center">
                  <li className="py-2.5 px-0">{`rectangle blocks are manufactured from strong materials such as concrete, clay, or natural stone, making them highly durable`}</li>
                </ul>
              </div>
            </motion.div>

            <motion.div className="flex flex-col justify-self-center items-center shadow-md w-full">
              <div className="w-full h-full relative group flex items-center justify-center">
                <img
                  src={RectanglePaverEight}
                  alt="paver block"
                  className="cursor-pointer w-[80%] h-[80%] rounded-lg hover:scale-105 transition-all duration-500 ease-in-out"
                />
                <div class="absolute inset-0 flex items-end justify-center bg-[#00000066] text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Link to="/paver-blocks/rectangle-paver-8-9">
                    <div class="mb-3 cursor-pointer relative inline-flex items-center justify-center px-3 py-1 text-base font-bold text-white transition-all duration-200 bg-pebblePrimary border-2 border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:opacity-80 rounded">
                      Learn more
                    </div>
                  </Link>
                </div>
              </div>

              <div className=" w-full">
                <h2 className="font-bold">{`Rectangle Paver 8" x 9"`}</h2>
                <ul class="border-t border-[#ccc] flex flex-col items-center justify-center">
                  <li className="py-2.5 px-0">{`rectangle blocks are manufactured from strong materials such as concrete, clay, or natural stone, making them highly durable`}</li>
                </ul>
              </div>
            </motion.div>
          </motion.div>
        </motion.section>
      </main>
      <WhatsappButton />
      <Footer />

      {modelOpen && (
        <div
          className="fixed hidden md:flex top-0 left-0 w-full h-full bg-[#000000] bg-opacity-50 justify-center items-center z-[40]"
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
  );
};

export default PaverBlocksMain;

export const Head = () => (
  <>
    <title>Paver Blocks</title>
    <body />
  </>
);
