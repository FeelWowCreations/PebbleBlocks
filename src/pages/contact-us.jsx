import * as React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactUs from "../components/ContactUS";
import WhatsappButton from "@/components/ui/WhatsAppFixed";

const contactUS = () => {
    return (
      <main>
        <Navbar />
        <ContactUs />
        < WhatsappButton />
        <Footer />
      </main>
    );
  };
  
  export default contactUS;
  
  export const Head = () => <title>Contact Pebble Blocks</title>;
