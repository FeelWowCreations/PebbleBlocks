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

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  // Run a GraphQL query to get the blog data
  const result = await graphql(`
    query {
      allBlogs {
        nodes {
          id
          title
          excerpt
          slug
        }
      }
    }
  `);

  if (result.errors) {
    console.error("Error fetching blog data", result.errors);
    return;
  }

  // Create a page for each blog post
  result.data.allBlogs.nodes.forEach((blog) => {
    createPage({
      path: `/blog/${blog.slug}`, // URL path for the blog post, using slug for SEO-friendly URLs
      component: resolve(`src/pages/blog/[id].js`), // Path to the dynamic blog template
      context: {
        id: blog.id, // Pass the blog ID to the page context for use in the component
        title: blog.title, // Pass the blog title to the component (optional)
        excerpt: blog.excerpt, // Pass the blog excerpt (optional)
      },
    });
  });
};
