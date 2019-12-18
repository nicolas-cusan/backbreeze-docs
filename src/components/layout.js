/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import Header from './header';
import Sidebar from './sidebar';
import 'destyle.css';
import 'scss/main.scss';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          version
          github
        }
      }
    }
  `);

  return (
    <div className="minh-full d-flx flxd-col">
      <Header
        siteTitle={data.site.siteMetadata.title}
        version={data.site.siteMetadata.version}
        github={data.site.siteMetadata.github}
      />
      <Sidebar />

      <main className="pl-220@sm pl-320@md pt-60">
        <div className="px-x.5 py-x2 mx-auto maxw-700">{children}</div>
      </main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
