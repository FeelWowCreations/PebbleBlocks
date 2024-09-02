import { graphql, useStaticQuery } from "gatsby";
import Card from "./Card";
import React from "react";
const CardContainer = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          extension: { regex: "/(jpg)/" }
          relativeDirectory: { eq: "Card" }
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

  const images = data.allFile.edges.map(
    (edge) => edge.node.childImageSharp.gatsbyImageData
  );

  const cardDetails = [
    {
      src: images[0],
      title: "Paver Tiles",
      description:
        "The paver tiles are generally placed on top of a foundation which is made of layers of compacted stone and sand",
    },
    {
      src: images[1],
      title: "Rectangular Paver Block",
      description:
        "Rectangular paver blocks are durable, interlocking concrete or stone units that are specifically designed for paving purposes",
    },
    {
      src: images[2],
      title: "Concrete Block",
      description:
        "The concrete paver blocks are placed in the desired pattern and the space between pavers is then filled with a polymeric sand",
    },
    {
      src: images[3],
      title: "Interlocking Block",
      description:
        "Interlock blocks can be installed rather quickly and in any climate. The blocks are strong and considered very weather resistant",
    },
  ];
  return (
    <div className="flex flex-col animate-product-load transform translate-y-0 opacity-0 fill-mode-forwards">
      <h1 className="font-bold text-[32px] self-center ">FEATURED PRODUCTS</h1>

      <article className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-items-center justify-center items-center p-10 border-b-[4px] border-b-gray-200">
        {cardDetails.map((item) => (
          <Card data={item} />
        ))}
      </article>
    </div>
  );
};

export default CardContainer;
