/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require('path');

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  const resolve = {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
  };

  actions.setWebpackConfig({ resolve });
};

const { createFilePath } = require('gatsby-source-filesystem');
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === 'TitleJson') {
    const slug = createFilePath({ node, getNode, basePath: 'title' });
    createNodeField({
      node,
      name: 'slug',
      value: slug,
    });
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions;

  // Redirect
  createRedirect({
    fromPath: '/',
    toPath: '/titles',
    redirectInBrowser: true,
    isPermanent: true,
  });

  const result = await graphql(`
    query {
      allTitleJson(sort: { fields: [date], order: DESC }, limit: 100) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  // Titles
  const titles = result.data.allTitleJson.edges;
  const titlesPerPage = 6;
  const numPages = Math.ceil(titles.length / titlesPerPage);
  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? 'titles' : `/titles/${i + 1}`,
      component: path.resolve('./src/templates/titles.js'),
      context: {
        limit: titlesPerPage,
        skip: i * titlesPerPage,
        numPages,
        currentPage: i + 1,
      },
    });
  });

  // Title
  result.data.allTitleJson.edges.forEach(({ node }) => {
    createPage({
      path: `/title${node.fields.slug}`,
      component: path.resolve('./src/templates/title.js'),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.fields.slug,
      },
    });
  });
};
