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

export const Head = () => (
  <>
    {/* SEO meta tags */}
    <title>Solid & Paver Blocks Coimbatore - Durable Construction Solutions</title>
    <meta
      name="description"
      content="Pebble Blocks in Coimbatore offers high-quality solid and paver blocks for residential, commercial, and industrial projects. Build with confidence today!"
    />
    <meta name="google-site-verification" content="-7Yxz5q5-UozKfBvbNVcKN9-LCbZTU8n9YrVfL8N6ac" />
    <meta
      name="keywords"
      content="paver blocks in coimbatore, parking stones, grass pavers, solid block, solid blocks near me"
    />
    <meta name="author" content="Pebble Blocks" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta property="og:title" content="Solid & Paver Blocks Coimbatore - Durable Construction Solutions" />
    <meta
      property="og:description"
      content="Pebble Blocks in Coimbatore offers high-quality solid and paver blocks for residential, commercial, and industrial projects. Build with confidence today!"
    />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://pebbleblocks.com" />
    <meta property="og:image" content="https://yourwebsite.com/og-image.jpg" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Solid & Paver Blocks Coimbatore" />
    <meta
      name="twitter:description"
      content="Pebble Blocks offers high-quality solid and paver blocks for residential, commercial, and industrial projects."
    />
    <meta name="twitter:image" content="https://yourwebsite.com/twitter-image.jpg" />

    {/* Canonical URL */}
    <link rel="canonical" href="https://yourwebsite.com" />

    {/* Favicon */}
    <link rel="icon" href="/favicon.ico" />

    {/* Structured Data */}
    <script type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "Pebble Blocks",
        url: "https://yourwebsite.com",
        logo: "https://yourwebsite.com/logo.png",
        description:
          "Pebble Blocks in Coimbatore offers high-quality solid and paver blocks for residential, commercial, and industrial projects.",
        address: {
          "@type": "PostalAddress",
          streetAddress: "123 Main Street",
          addressLocality: "Coimbatore",
          addressRegion: "TN",
          postalCode: "641001",
          addressCountry: "IN",
        },
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+91-1234567890",
          contactType: "Customer Service",
        },
      })}
    </script>
  </>
);
