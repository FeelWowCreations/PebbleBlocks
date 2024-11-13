import { graphql, useStaticQuery } from "gatsby";
import { useState } from "react";
import Card from "./Card";
import * as React from "react";
import SixInch from "../images/SolidBlocks/solid-block.png";
import FourInch from "../images/SolidBlocks/solid-block.png";
import NineInch from "../images/SolidBlocks/solid-block.png";
import SixInch2 from "../images/SolidBlocks/solid-block.png";
import EightInch from "../images/SolidBlocks/solid-block.png";
import NineInch2 from "../images/SolidBlocks/solid-block.png";

import RectanglePaverEight from "../images/PaverBlocks/rectangle-paver-8x9.jpg";
import { motion } from "framer-motion";

import { Link } from "gatsby";

const solidBlockData = [
  {
    id: 1,
    src: SixInch,
    title: "6 Inch Solid Block",
    description: 'Size - 12" x 6" x 8"',
    link: "/products/solid-blocks/",
  },
  {
    id: 2,
    src: FourInch,
    title: "4 Inch Solid Block",
    description: 'Size - 16" x 4" x 8"',
    link: "/products/solid-blocks/",
  },
  {
    id: 3,
    src: NineInch,
    title: "9 Inch Solid Block",
    description: 'Size - 9" x 8" x 8"',
    link: "/products/solid-blocks/",
  },
  {
    id: 4,
    src: SixInch2,
    title: "6 Inch Solid Block",
    description: 'Size - 16" x 6" x 8"',
    link: "/products/solid-blocks/",
  },
  {
    id: 5,
    src: EightInch,
    title: "8 Inch Solid Block",
    description: 'Size - 12" x 8" x 8"',
    link: "/products/solid-blocks/",
  },
  {
    id: 6,
    src: NineInch2,
    title: '9"x4"x3" Solid Block',
    description: 'Size - 9" x 4" x 3"',
    link: "/products/solid-blocks/",
  },
];

const CardContainer2 = () => {
  const [expanded, setExpanded] = useState(false);

  // Determine the blocks to show based on whether the "Expand All" button is active
  const displayedBlocks = expanded
    ? solidBlockData
    : solidBlockData.slice(0, 4);

  return (
    <main>
      <motion.h2
        className="text-[#23235F] flex justify-center mt-5 text-2xl"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        Our Solid Blocks
      </motion.h2>
      <motion.section
        className="p-[50px]"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <motion.div className="grid grid-cols-[repeat(1,1fr)] md:grid-cols-[repeat(2,1fr)] lg:grid-cols-[repeat(4,1fr)] text-center gap-x-5 gap-y-[30px]">
          {displayedBlocks.map((block) => (
            <motion.div
              key={block.id}
              className="flex flex-col justify-self-center items-center shadow-md w-full"
            >
              <div className="w-full h-full relative group flex items-center justify-center">
                <img
                  src={block.src}
                  alt="solid block"
                  className="cursor-pointer w-[80%] h-[80%] rounded-lg hover:scale-105 transition-all duration-500 ease-in-out"
                />
                <div className="absolute inset-0 flex items-end justify-center bg-[#00000066] text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Link to={block.link}>
                    <div className="mb-3 cursor-pointer relative inline-flex items-center justify-center px-3 py-1 text-base font-bold text-white transition-all duration-200 bg-pebblePrimary border-2 border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:opacity-80 rounded">
                      Learn more
                    </div>
                  </Link>
                </div>
              </div>
              <div className="w-full">
                <h2 className="font-bold">{block.title}</h2>
                <ul className="border-t border-[#ccc] flex flex-col items-center justify-center">
                  <li className="py-2.5 px-0">{block.description}</li>
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <button
          className="mt-5 px-4 py-2 bg-pebblePrimary text-white rounded hover:opacity-80"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? "Show Less" : "Expand All"}
        </button>
      </motion.section>
    </main>
  );
};

export default CardContainer2;
