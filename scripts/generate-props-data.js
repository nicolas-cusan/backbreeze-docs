const sassdoc = require('sassdoc');
const genMdx = require('./gen-mdx');

module.exports = function generatePropsData(
  createNode,
  createNodeId,
  createContentDigest
) {
  return sassdoc
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

      Object.keys(newData).forEach(key => {
        const fileName = key.replace(/_/, '').replace('.scss', '');
        const data = [];

        newData[key].forEach((item, idx) => {
          data[idx] = {
            mdx: genMdx(item.description.trim()),
            description: item.description.trim(),
            file: item.file,
            context: item.context,
            group: item.group,
            access: item.access,
            file: item.file,
          };
        });

        const node = {
          id: createNodeId(`prop-${fileName}`),
          name: fileName,
          group: data[0].group[0],
          data,
          internal: {
            type: `PropPage`,
            contentDigest: createContentDigest(JSON.stringify(data)),
          },
        };
        createNode(node);
      });
    })
    .catch(err => {
      console.log(err);
    });
};
