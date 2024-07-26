import * as React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";

const IndexPage = () => {
  return (
    <main>
      <Navbar />
      <Banner />
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>Pebble</title>;
