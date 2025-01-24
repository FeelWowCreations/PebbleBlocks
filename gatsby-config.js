/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Pebble Blocks`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: "GTM-KDVNCGLT", // Replace with your GTM container ID
        includeInDevelopment: false, // Set to true if you want GTM active in development
        defaultDataLayer: { platform: "gatsby" }, // Add default dataLayer properties
        gtmAuth: "YOUR_AUTH_STRING", // Optional, required if you use GTM environments
        gtmPreview: "YOUR_PREVIEW_STRING", // Optional, required if you use GTM environments
        dataLayerName: "dataLayer", // Optional, set the dataLayer name
        routeChangeEventName: "gatsby-route-change", // Fires on route changes
      },
    },
    "gatsby-plugin-postcss",
    "gatsby-plugin-svgr",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
  ],
};
