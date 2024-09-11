import * as React from "react";
import Navbar from "../components/Navbar";
import Products from "../components/Products/Main";
import WhatsappButton from "@/components/ui/WhatsAppFixed";

const products = () => {
  return (
    <main>
      <Navbar />
      <main>
        <Products />
      </main>
      <WhatsappButton />
    </main>
  );
};

export default products;

export const Head = () => <title>Products</title>;
