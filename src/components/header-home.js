import React from 'react';
import { Link } from 'gatsby';
import { ReactComponent as Logo } from 'images/logo.svg';

export default ({ siteTitle, version, github, setOpenMenu }) => (
  <header className="bg-txt c-white ta-center pb-x.75 mb-x.5">
    <div className="px-x.5 py-x2 py-x3@sm mx-auto maxw-800 px-x1@sm">
      <Logo className="fl-white w-120 h-120 d-blk mx-auto" />
      <h1 className="fw-bold -mt-x.5 fs-34">{siteTitle}</h1>

      <p className="fs-18 o-0.7 py-x1 maxw-500 mx-auto">
        A highly configurable utility class library written in Sass.
      </p>

      <div className="pt-4 d-flx flxw-wrap jfy-center ai-center">
        <Link
          className="bg-white px-x.5 -ls-sm fw-bold minw-120 py-x.25 b-2 b-solid b-white m-x.25 rad-4 c-txt ts-colors ts-200 bg-primaryLight:hover b-primaryLight:hover c-white:hover"
          to="/installation/"
        >
          Read the documentation
        </Link>
        <a
          className="px-x.5 fw-bold -ls-sm py-x.25 minw-120 b-2 b-solid b-white m-x.25 rad-4 ts-colors ts-200 c-primaryLight:hover b-primaryLight:hover"
          href={github}
        >
          View on Github
        </a>
      </div>
    </div>
  </header>
);
