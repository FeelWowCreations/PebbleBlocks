import React from "react";

const AboutUs = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative flex justify-center items-center bg-[url('../images/AboutUs/brick-wall.jpeg')] bg-cover h-[200px] md:h-[300px] lg:h-[400px]">
        <div className="w-full h-full bg-black opacity-50 absolute top-0 left-0"></div>
        <h1 className="text-xl md:text-3xl lg:text-5xl font-bold text-white z-10 text-center px-4">
            Leading High Quality Bricks and Block Manufacturers
        </h1>
      </section>

      {/* About Us Content Section */}
      <section className="px-4 py-10 md:py-16 lg:py-20 max-w-full lg:mx-20 mx-auto">
        <div className="bg-white shadow-lg border border-gray-200 p-6 md:p-10 rounded-lg">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-center mb-8">
            About Pebble Blocks
          </h2>
          <p className="text-left text-lg md:text-xl leading-relaxed mb-6">
            Pebble Blocks is a leading manufacturer of high-quality bricks and blocks, with over 20 years of experience in the field. We specialize in producing solid, hollow, flyash, concrete, and paver blocks, making us a trusted name in the industry.
          </p>
          <p className="text-left text-lg md:text-xl leading-relaxed mb-6">
            Since its establishment, Pebble Blocks has become the most trusted paver block manufacturer in Coimbatore. We provide a premium range of products, including square paver blocks, cobble paver blocks, rectangular heavy-duty paver blocks, zig-zag pavers, and interlocking pavers for various paving requirements.
          </p>
          <p className="text-left text-lg md:text-xl leading-relaxed mb-6">
            Our paver blocks are typically used for constructing pathways, pavements, yards, and boundaries. Made from cement mortar and composite materials, our blocks are known for their durability, easy installation, and weather resistance.
          </p>
          <p className="text-left text-lg md:text-xl leading-relaxed mb-6">
            As a leading paver block manufacturer in Coimbatore, India, we use high-quality raw materials and state-of-the-art manufacturing processes to deliver products of exceptional quality. Our modern production lines and implementation of advanced tools allow us to meet the diverse needs of our clients.
          </p>
          <p className="text-left text-lg md:text-xl leading-relaxed">
            Our range of pavers is available in various sizes and shapes, customized to our clients' requirements. As trusted paver block suppliers in Coimbatore, we have established a vast client base, offering on-time delivery and customized packaging solutions.
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
