import * as React from "react";
import Navbar from "../../components/Navbar";
import PaverBlocks from "@/components/Products/PaverBlocks";
import { StaticImage } from "gatsby-plugin-image";
import ZigZag from "../../images/PaverBlocks/zig-zag.jpg";
import EightCombo from "../../images/PaverBlocks/eight-combo.jpg";
import RectanglePaver from "../../images/PaverBlocks/rectangle-paver.jpg";
import VertexPaver from "../../images/PaverBlocks/vertex-paver.jpg";
import TetraPaver from "../../images/PaverBlocks/tetra-paver.jpg";
import IntekPaver from "../../images/PaverBlocks/intek-paver.jpg";
import RectanglePaverEight from "../../images/PaverBlocks/rectangle-paver-8.jpg";
import { motion } from "framer-motion";
import SolidBlocks from "@/components/Products/SolidBlocks";

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
        <h2 className="text-[#23235F] flex justify-center mt-5 text-2xl">
          Products Catalog
        </h2>
        <section className="p-[50px]">
          <motion.div className="grid grid-cols-[repeat(1,1fr)] md:grid-cols-[repeat(2,1fr)] lg:grid-cols-[repeat(4,1fr)] text-center gap-x-5 gap-y-[30px]">
            <motion.div className="flex flex-col justify-self-center items-center shadow-md w-full">
              <img
                src={ZigZag}
                alt="paver block"
                className="cursor-pointer w-[80%] h-[80%] rounded-lg hover:scale-105 transition-all duration-500 ease-in-out"
              />
              <div className=" w-full">
                <h2 className="font-bold">Zig Zag Paver</h2>
                <ul class="border-t border-[#ccc] flex flex-col items-center justify-center">
                  <li className="py-2.5 px-0">{`Size - 25" x 12"`}</li>
                  <li className="py-2.5 px-0">83mm</li>
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
        </section>
      </main>
    </main>
  );
};

export default SolidBlocksMain;
