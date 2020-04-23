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

import Footer from './footer';

const Layout = ({ children, isHome }) => {
  if (isHome) {
    return (
      <div className="minh-100vh d-flx flxd-col">
        <main className="flx-auto">
          <div className="px-x.5 py-x2 mx-auto maxw-800 px-x1@sm">
            {children}
          </div>
        </main>
        <Footer isHome={true} />
      </div>
    );
  }

  return (
    <div className="minh-100vh d-flx flxd-col">
      <main className="pr-220@sm pr-320@md pr-0@xxl pt-60 flx-auto">
        <div className="px-x.5 py-x2 mx-auto maxw-800 px-x1@sm">{children}</div>
      </main>
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
