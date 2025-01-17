// gatsby-ssr.js
import React from "react";

export const onRenderBody = ({ setPreBodyComponents }) => {
  setPreBodyComponents([
    <noscript key="gtm-noscript">
      <iframe
        src="https://www.googletagmanager.com/ns.html?id=GTM-KDVNCGLT"
        height="0"
        width="0"
        style={{ display: "none", visibility: "hidden" }}
      ></iframe>
    </noscript>,
  ]);
};
