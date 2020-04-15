const pkg = require('backbreeze/package.json');

module.exports = {
  siteMetadata: {
    title: `Backbreeze CSS`,
    description: `Backbreeze is a CSS utility library written in Sass`,
    author: `@n_cusan`,
    version: pkg.version,
    github: `https://github.com/nicolas-cusan/backbreeze`,
    pages: [
      {
        name: 'Installation',
        link: '/installation/',
        id: 'installation',
      },
      {
        name: 'Configuration',
        link: '/configuration/',
        id: 'configuration',
      },
      {
        name: 'Mixins',
        link: '/mixins/',
        id: 'mixins',
      },
      {
        name: 'Usage',
        link: '/usage/',
        id: 'usage',
      },
      {
        name: 'Recipes',
        link: '/recipes/',
        id: 'recipes',
      },
      {
        name: 'Using in production',
        link: '/using-in-production/',
        id: 'using-in-production',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: false,
        // develop: true,
        // debug: true,
        ignore: ['destyle.css/'],
        whitelist: ['typography'],
        whitelistPatternsChildren: [/typography$/],
        extractors: [
          {
            extractor: (content) => {
              return content.match(/[\w-/:%@.]+(?<!:)/g) || [];
            },
            extensions: ['js', 'ts', 'jsx', 'tsx', 'md', 'mdx'],
          },
        ],
      },
    },
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
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-147083107-2',
        // Puts tracking script in the head instead of the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
      },
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
        rehypePlugins: [require('rehype-slug')],
      },
    },
    `gatsby-plugin-catch-links`,
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
