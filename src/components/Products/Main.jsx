import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import { Card, CardContent } from "../ui/card";
import SolidBlocks from "./SolidBlocks";
import PaverBlocks from "./PaverBlocks";
import Footer from "../Footer";

const Products = () => {
  return (
    <>
      <section className="relative flex justify-center items-center bg-[url('../images/AboutUs/brick-wall.jpeg')] bg-cover h-[200px]">
        <div className="w-full h-full bg-black opacity-20 absolute top-0 left-0"></div>
        <h1 className="text-xl md:text-2xl lg:text-4xl font-bold leading-9 text-white z-10 text-center">
          Paver Block Manufacturer and Suppliers in Coimbatore, India
        </h1>
      </section>
      <div className="bg-gradient-to-t from-orange-100 to-white animate-product-load transform translate-y-0 opacity-0 fill-mode-forwards">
        <div className="max-w-[1400px] h-fit w-full m-auto px-4 relative flex flex-col ">
          <div>
            <SolidBlocks />

            {/* Flyash */}
            {/* <section className="h-full w-full lg:w-fit max-w-[350px] m-auto flex flex-col items-center justify-center">
              <h1 className="text-center text-xl md:text-2xl lg:text:3xl mt-5 mb-2">
                Flyash blocks
              </h1>
              <Card className="w-[80%] md:w-[90%] lg:w-fit h-full cursor-pointer border-transparent">
                <CardContent className="p-0 flex aspect-square items-center justify-center h-full w-full">
                  <div className="w-full h-full relative rounded-xl bg-center bg-cover duration-500">
                    <StaticImage
                      src="../../images/Products/FlyashBlocks/flyash-block-1.jpg"
                      alt="flyash block"
                      className="object-fill w-full h-full rounded-2xl bg-center bg-cover duration-500"
                      placeholder="tracedSVG"
                    />

                    <div className="absolute inset-0 bg-black opacity-0 rounded-2xl hover:opacity-15 transition-opacity duration-500"></div>
                  </div>
                </CardContent>
              </Card>
            </section> */}

            {/* Paver blocks */}
            <PaverBlocks />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Products;
