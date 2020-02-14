/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import 'destyle.css';
import 'scss/main.scss';

const Layout = ({ children }) => (
  <div className="minh-full d-flx flxd-col">
    <main className="pl-220@sm pl-320@md pt-60">
      <div className="px-x.5 py-x2 mx-auto maxw-756">{children}</div>
    </main>
    <footer>
      © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
    </footer>
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
