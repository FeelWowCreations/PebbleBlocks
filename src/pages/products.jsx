import * as React from "react";
import Navbar from "../components/Navbar";
import Products from "../components/Products/Main";
import Footer from "@/components/Footer";

const products = () => {
  return (
    <main>
      <Navbar />
      <main>
        <Products />
        <Footer />
      </main>
    </main>
  );
};

export default products;

export const Head = () => <title>Products</title>;
