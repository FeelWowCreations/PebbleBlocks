import * as React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import CardContainer from "../components/CardContainer";
import CardContainer2 from "@/components/CardContainer2";
import LogoScroller from "@/components/LogoScroller";
import WhatsappButton from "@/components/ui/WhatsAppFixed";
import { Helmet } from "react-helmet";

const IndexPage = () => {
  return (
    <>
      {/* Helmet for setting favicon and meta information */}
      <Helmet>
        <title>Your Website Title</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      </Helmet>

      <main>
        <Navbar />
        <Banner />
        <CardContainer />
        <CardContainer2 />
        <LogoScroller />
        <WhatsappButton />
        <Footer />
      </main>
    </>
  );
};

export default IndexPage;
