import * as React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BlogPage from "../components/blog-content";
import WhatsappButton from "@/components/ui/WhatsAppFixed";

const blogpage = () => {
    return (
      <main>
        <Navbar />
        <BlogPage />
        < WhatsappButton />
        <Footer />
      </main>
    );
  };
  
  export default blogpage;
  
  export const Head = () => <title>Blogs Pebble Blocks</title>;
