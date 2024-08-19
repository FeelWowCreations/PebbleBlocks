// import * as path from "path";

const { resolve } = require("path");
exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "@/components": resolve(__dirname, "src/components"),
        "@/lib/utils": resolve(__dirname, "src/lib/utils"),
      },
    },
  });
};
