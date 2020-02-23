const path = require('path');
const generatePropsData = require('./scripts/generate-props-data.js');
const generateMixinsData = require('./scripts/generate-mixins-data.js');

exports.onCreateWebpackConfig = ({ stage, actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: ['node_modules', path.resolve(__dirname, 'src')],
    },
  });
};

// Source data from backbreeze source files
exports.sourceNodes = async ({
  actions,
  createNodeId,
  createContentDigest,
}) => {
  const { createNode } = actions;

  return Promise.all([
    generatePropsData(createNode, createNodeId, createContentDigest),
    generateMixinsData(createNode, createNodeId, createContentDigest),
  ]);
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  const props = graphql(`
    {
      allPropPage(sort: { fields: [name] }) {
        edges {
          node {
            name
          }
        }
      }
    }
  `).then(result => {
    result.data.allPropPage.edges.forEach(({ node }) => {
      createPage({
        path: `/${node.name}/`,
        component: path.resolve('./src/templates/prop.js'),
        context: {
          slug: node.name,
        },
      });
    });
  });

  const mixins = graphql(`
    {
      allMixinsPage(sort: { fields: [name] }) {
        edges {
          node {
            name
          }
        }
      }
    }
  `).then(result => {
    result.data.allMixinsPage.edges.forEach(({ node }) => {
      createPage({
        path: `/${node.name}/`,
        component: path.resolve('./src/templates/mixins.js'),
        context: {
          slug: node.name,
        },
      });
    });
  });

  return Promise.all([props, mixins]);
};
