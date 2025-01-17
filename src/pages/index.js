import * as React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import CardContainer from "../components/CardContainer";
import CardContainer2 from "@/components/CardContainer2";
import LogoScroller from "@/components/LogoScroller";
import WhatsappButton from "@/components/ui/WhatsAppFixed";

const IndexPage = () => {
  return (
    <main>
      <Navbar />
      <Banner />
      <CardContainer />
      <CardContainer2 />
      <LogoScroller />
      <WhatsappButton />
      <Footer />
    </main>
  );
};

export default IndexPage;

