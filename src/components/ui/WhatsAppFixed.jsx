import React from "react";
import { ReactComponent as WhatsappIcon } from "../../images/Icons/whatsapp.svg"; 

const WhatsappButton = () => {
  const phoneNumber = "08883337674"; // Replace with your phone number (include country code without the +)
  const message = "Hello, I'm interested in learning more about your products."; // Customize your message

  const whatsappUrl = `https://wa.me/${+918883337674}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 bg-green-500 p-4 rounded-full shadow-lg z-50 transition-transform transform hover:scale-105"
      aria-label="Chat with us on WhatsApp"
    >
      <WhatsappIcon className="w-8 h-8 fill-current text-white" /> {/* SVG icon with size and color */}
    </a>
  );
};

export default WhatsappButton;
