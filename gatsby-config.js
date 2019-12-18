const pkg = require('backbreeze/package.json');

module.exports = {
  siteMetadata: {
    title: `Backbreeze CSS`,
    description: `Backbreeze is a Tailwind CSS inspired CSS utility library written in Sass`,
    author: `@n_cusan`,
    version: pkg.version,
    github: `https://github.com/nicolas-cusan/backbreeze`,
    pages: [
      {
        name: 'Installation',
        link: '/installation',
        id: 'page-1',
      },
      {
        name: 'Configuration',
        link: '/configuration',
        id: 'page-2',
      },
      {
        name: 'Usage',
        link: '/usage',
        id: 'page-3',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: 'gatsby-plugin-svgr',
      // options: {
      //   prettier: true,         // use prettier to format JS code output (default)
      //   svgo: true,             // use svgo to optimize SVGs (default)
      //   svgoConfig: {
      //     removeViewBox: true, // remove viewBox when possible (default)
      //     cleanupIDs: true,    // remove unused IDs and minify remaining IDs (default)
      //   },
      // },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `images`,
    //     path: `${__dirname}/src/images`,
    //   },
    // },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          default: require.resolve('./src/components/layout.js'),
        },
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Backbreeze Css`,
        short_name: `BB`,
        start_url: `/`,
        background_color: `#f8c326`,
        theme_color: `#f8c326`,
        display: `minimal-ui`,
        icon: `src/images/logo.svg`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
