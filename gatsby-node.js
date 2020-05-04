const path = require('path');
const generatePropsData = require('./scripts/generate-props-data.js');

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

  const data = await generatePropsData(
    createNode,
    createNodeId,
    createContentDigest
  );

  console.log(data);

  return data;
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
  `)
    .then((result) => {
      result.data.allPropPage.edges.forEach(({ node }) => {
        createPage({
          path: `/${node.name}/`,
          component: path.resolve('./src/templates/prop.js'),
          context: {
            slug: node.name,
          },
        });
      });
    })
    .catch((err) => console.log(err));

  return Promise.all([props]);
};
