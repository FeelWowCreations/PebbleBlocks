import { graphql, useStaticQuery } from "gatsby";
import { useState } from "react"; 
import Card from "./Card";
import * as React from "react";
import PaverBlocks from "@/components/Products/PaverBlocks";
import ZigZag from "../images/PaverBlocks/zig-zag.jpg";
import EightCombo from "../images/PaverBlocks/eight-combo.jpg";
import RectanglePaver from "../images/PaverBlocks/rectangle-paver.jpg";
import VertexPaver from "../images/PaverBlocks/vertex-paver.jpg";
import TetraPaver from "../images/PaverBlocks/tetra-paver.jpg";
import IntekPaver from "../images/PaverBlocks/intek-paver.jpg";
import RectanglePaverEight from "../images/PaverBlocks/rectangle-paver-8x9.jpg";
import { motion } from "framer-motion";

import { Link } from "gatsby";

const productData = [
  { id: 1, src: ZigZag, title: 'Zig Zag Paver', description: 'Zigzag pavers offer a range of benefits due to their unique design and improved interlocking stability.', link: '/paver-blocks/zig-zag' },
  { id: 2, src: EightCombo, title: 'Eight Combo Paver', description: 'It refers to a set of eight different types or designs of pavers combined into a single package or collection.', link: '/paver-blocks/eight-combo' },
  { id: 3, src: RectanglePaver, title: 'Rectangle Paver', description: 'Rectangle pavers, as the name suggests, are paving units with a clean and classic rectangle shape.', link: '/paver-blocks/rectangle-paver' },
  { id: 4, src: VertexPaver, title: 'Vertex Paver', description: 'Vertex pavers introduce a captivating undulating pattern with unique design to your outdoor spaces.', link: '/paver-blocks/vertex-paver' },
  { id: 5, src: IntekPaver, title: 'Intek Paver', description: 'Intek Paver blocks, also known as paving stones, are specialized building materials used for surfacing outdoor areas.', link: '/paver-blocks/intek-paver' },
  { id: 6, src: TetraPaver, title: 'Tetra Paver', description: 'Tetra pavers are easy to maintain which resist stains, dirt, and oil spills, making cleaning a hassle-free process.', link: '/paver-blocks/tetra-paver' },
  { id: 7, src: RectanglePaverEight, title: 'Rectangle Paver 8" x 11"', description: 'Rectangle blocks are manufactured from strong materials such as concrete, clay, or natural stone, making them highly durable.', link: '/paver-blocks/rectangle-paver-8-11' },
  { id: 8, src: RectanglePaverEight, title: 'Rectangle Paver 8" x 9"', description: 'Rectangle blocks are manufactured from strong materials such as concrete, clay, or natural stone, making them highly durable.', link: '/paver-blocks/rectangle-paver-8-9' }
];

const CardContainer = () => {
  const [expanded, setExpanded] = useState(false);

  // Determine the products to show based on whether the "Expand All" button is active
  const displayedProducts = expanded ? productData : productData.slice(0, 4);

  return (
    <main>
      <motion.h2
        className="text-[#23235F] flex justify-center mt-5 text-2xl"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        Our Paver Blocks
      </motion.h2>
      <motion.section
        className="p-[50px]"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <motion.div className="grid grid-cols-[repeat(1,1fr)] md:grid-cols-[repeat(2,1fr)] lg:grid-cols-[repeat(4,1fr)] text-center gap-x-5 gap-y-[30px]">
          {displayedProducts.map(product => (
            <motion.div key={product.id} className="flex flex-col justify-self-center items-center shadow-md w-full">
              <div className="w-full h-full relative group flex items-center justify-center">
                <img
                  src={product.src}
                  alt="paver block"
                  className="cursor-pointer w-[80%] h-[80%] rounded-lg hover:scale-105 transition-all duration-500 ease-in-out"
                />
                <div className="absolute inset-0 flex items-end justify-center bg-[#00000066] text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Link to={product.link}>
                    <div className="mb-3 cursor-pointer relative inline-flex items-center justify-center px-3 py-1 text-base font-bold text-white transition-all duration-200 bg-pebblePrimary border-2 border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:opacity-80 rounded">
                      Learn more
                    </div>
                  </Link>
                </div>
              </div>
              <div className="w-full">
                <h2 className="font-bold">{product.title}</h2>
                <ul className="border-t border-[#ccc] flex flex-col items-center justify-center">
                  <li className="py-2.5 px-0">{product.description}</li>
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <button
          className="mt-5 px-4 py-2 bg-pebblePrimary text-white rounded hover:opacity-80"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? 'Show Less' : 'Expand All'}
        </button>
      </motion.section>
    </main>
  );
};


export default CardContainer;
