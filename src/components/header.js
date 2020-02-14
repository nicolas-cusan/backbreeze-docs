import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import { ReactComponent as Logo } from 'images/logo.svg';
import { ReactComponent as Github } from 'images/github.svg';

const Header = ({ siteTitle, version, github, setOpenMenu }) => (
  <header className="flx-none px-x.75 h-60 ai-center d-flx pos-fxd top-0 lft-0 rgt-0 bg-txt c-white z-3">
    <div className="mr-auto flx-none">
      <Link
        className="d-flx ai-center"
        to="/"
        onClick={() => setOpenMenu(false)}
      >
        <Logo className="fl-white" />
        <span className="fw-bold pl-x.5">{siteTitle}</span>
      </Link>
    </div>
    <div className="o-0.6 mr-x1 fs-14 fw-500">{version}</div>
    <a className="o-0.5:hover ts-opacity ts-200" href={github}>
      <Github className="fl-white d-blk" />
    </a>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
