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
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          "AW-16705789102",  // Your Google Ads/Tag Manager ID
        ],
        // This object gets passed directly to the gtag config command
        // This is where you define any config options for gtag
        gtagConfig: {
          anonymize_ip: true, // Optional, anonymizes the user's IP
        },
        // This object gets passed to the plugin
        pluginConfig: {
          head: true, // Places the gtag.js script in the head of the HTML
          respectDNT: true, // Respects "Do Not Track" settings
        },
      },
    },
    "gatsby-plugin-postcss",
    "gatsby-plugin-svgr",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
  ],
};
