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
