const sassdoc = require('sassdoc');
const path = require('path');
const genMdx = require('./gen-mdx');

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

  const docsData = await sassdoc
    .parse('./node_modules/backbreeze/src/props', { verbose: true })
    .then(data => {
      const newData = data.reduce((acc, item) => {
        const name = item.file.name;

        if (name in acc) {
          acc[name].push(item);
        } else {
          acc[name] = [];
          acc[name].push(item);
        }

        return acc;
      }, {});
      return newData;
    });

  Object.keys(docsData).forEach(key => {
    const data = docsData[key];
    const fileName = key.replace(/_/, '').replace('.scss', '');
    data.forEach(item => {
      item.mdx = genMdx(item.description.trim());
    });

    const node = {
      id: createNodeId(`doc-${fileName}`),
      name: fileName,
      group: data[0].group[0],
      data,
      internal: {
        type: `DocPage`,
        contentDigest: createContentDigest(data),
      },
    };

    createNode(node);
  });
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return graphql(`
    {
      allDocPage(sort: { fields: [name] }) {
        edges {
          node {
            name
            data {
              description
              file {
                name
                path
              }
              context {
                name
                type
                value
              }
            }
            group
          }
        }
      }
    }
  `).then(result => {
    result.data.allDocPage.edges.forEach(({ node }) => {
      createPage({
        path: `/${node.name}/,
        component: path.resolve('./src/templates/doc.js'),
        context: {
          slug: node.name,
        },
      });
    });
  });
};
