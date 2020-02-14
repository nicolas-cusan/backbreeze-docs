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
    <footer className="pl-220@sm pl-320@md fs-14 bt-1 bt-solid bt-dust">
      <div className="px-x.5 ta-center py-x1 o-0.5">
        © {new Date().getFullYear()}, Built by
        {` `}
        <a className="td-under" href="https://twitter.com/n_cusan">
          Nicolas Cusan
        </a>
        {` `}
        from
        {` `}
        <a className="td-under" href="https://arillo.ch">
          Arillo
        </a>
        {` `}
        with
        {` `}
        <a className="td-under" href="https://www.gatsbyjs.org">
          Gatsby
        </a>
      </div>
    </footer>
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
