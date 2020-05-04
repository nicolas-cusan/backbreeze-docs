// Copied and slightly adapted from here: https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby-plugin-mdx/utils/gen-mdx.js

const mdx = require('@mdx-js/mdx');
const babel = require(`@babel/core`);

const BabelPluginPluckImports = require(`gatsby-plugin-mdx/utils/babel-plugin-pluck-imports`);
const objRestSpread = require(`@babel/plugin-proposal-object-rest-spread`);
const htmlAttrToJSXAttr = require(`gatsby-plugin-mdx/utils/babel-plugin-html-attr-to-jsx-attr`);
const removeExportKeywords = require(`gatsby-plugin-mdx/utils/babel-plugin-remove-export-keywords`);
const instance = new BabelPluginPluckImports();

module.exports = function genMdx(input) {
  code = mdx.sync(input);

  const result = babel.transform(code, {
    configFile: false,
    // plugins: [
    //   instance.plugin,
    //   objRestSpread,
    //   htmlAttrToJSXAttr,
    //   removeExportKeywords,
    // ],
    presets: [
      require(`@babel/preset-react`),
      [
        require(`@babel/preset-env`),
        {
          useBuiltIns: `entry`,
          corejs: 2,
          modules: false,
        },
      ],
    ],
  });

  return result.code
    .replace(
      /export\s*default\s*function\s*MDXContent\s*/,
      `return function MDXContent`
    )
    .replace(
      /export\s*{\s*MDXContent\s+as\s+default\s*};?/,
      `return MDXContent;`
    );
};
