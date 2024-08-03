import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";

const Card = ({ data }) => {
  return (
    <div class="max-w-sm rounded overflow-hidden shadow-card h-full">
      {/* <StaticImage
        class="w-full hover:scale-110 duration-500 transition-all ease-in-out"
        src={data?.src}
        width={300}
        height={200}
        alt="block"
      /> */}

      <GatsbyImage
        image={data?.src}
        alt={data?.title}
        className="object-fill w-full h-[200px] hover:scale-110 duration-500 transition-all ease-in-out"
        placeholder="tracedSVG"
      />

      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{data?.title}</div>
        <p class="text-gray-700 text-base">{data?.description}</p>
      </div>
    </div>
  );
};

export default Card;
