import * as React from "react";
import Navbar from "../components/Navbar";
import Products from "../components/Products/Main";

const products = () => {
  return (
    <main>
      <Navbar />
      <main>
        <Products />
      </main>
    </main>
  );
};

export default products;

export const Head = () => <title>Products</title>;
