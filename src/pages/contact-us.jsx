import * as React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactUs from "../components/ContactUS";


const contactUS = () => {
    return (
      <main>
        <Navbar />
        <ContactUs />
        <Footer />
      </main>
    );
  };
  
  export default contactUS;
  
  export const Head = () => <title>Contact Pebble Blocks</title>;