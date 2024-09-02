import * as React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import CardContainer from "../components/CardContainer";

const IndexPage = () => {
  return (
    <main>
      <Navbar />
      <Banner />
      <CardContainer />
      <Footer />
    </main>
  );
};

export default IndexPage;

export const Head = () => (
  <>
    <title>Pebble</title>
    <body />
  </>
);
