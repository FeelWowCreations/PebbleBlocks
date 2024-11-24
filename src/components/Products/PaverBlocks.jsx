import { graphql, useStaticQuery } from "gatsby";
import { getSrc } from "gatsby-plugin-image";
import * as React from "react";
import SwiperSlider from "./SwiperSlider";

const PaverBlocks = ({ setModalOpen, setImageUrl }) => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          extension: { regex: "/(jpg)/" }
          relativeDirectory: { eq: "Products/PaverBlocks" }
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

  const images = data.allFile.edges.map((edge) => ({
    gatsbyImageData: edge.node.childImageSharp.gatsbyImageData,
    imageUrl: getSrc(edge.node.childImageSharp.gatsbyImageData), // extract the URL
  }));

  return (
    <section className="w-fit h-fit m-auto flex flex-col items-center justify-center">
      <SwiperSlider
        images={images}
        setModalOpen={setModalOpen}
        setImageUrl={setImageUrl}
      />
    </section>
  );
};

export default PaverBlocks;
