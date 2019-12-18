import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import { ReactComponent as Logo } from 'images/logo.svg';

const Header = ({ siteTitle }) => (
  <header className="flx-none px-x.5 h-60 ai-center d-flx pos-fxd top-0 lft-0 rgt-0 bgc-txt c-accent z-3">
    <div>
      <Link className="d-flx ai-center" to="/">
        <Logo className="fl-accent" />
        <span className="fw-bold pl-x.5">{siteTitle}</span>
      </Link>
    </div>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
