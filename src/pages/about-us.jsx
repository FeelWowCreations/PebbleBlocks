import * as React from "react";
import Navbar from "../components/Navbar";
import AboutUs from "../components/Main";
import Footer from "../components/Footer";
import LogoScroller from "../components/LogoScroller";
import Timeline from "../components/Timeline";

const aboutUs = () => {
  return (
    <main>
      <Navbar />
      <AboutUs />
      <Timeline />
      <LogoScroller />
      <Footer />
    </main>
  );
};

export default aboutUs;

export const Head = () => <title>About Pebble Blocks</title>;
