import * as React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Blogs from "../components/Blogs";
import WhatsappButton from "@/components/ui/WhatsAppFixed";

const blogs = () => {
    return (
      <main>
        <Navbar />
        <Blogs />
        < WhatsappButton />
        <Footer />
      </main>
    );
  };
  
  export default blogs;
  
  export const Head = () => <title>Blogs Pebble Blocks</title>;
