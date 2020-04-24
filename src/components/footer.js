import React from 'react';

export default function Footer({ isHome }) {
  return (
    <footer
      className={`fs-14 flx-none bt-1 bt-solid bt-dust ${
        !isHome ? 'pr-220@sm pr-320@md pr-0@xxl' : ''
      }`}
    >
      <div className="px-x.5 ta-center py-x1 o-0.5">
        © {new Date().getFullYear()}, Made by
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
        .{` `}
        These docs are built with
        {` `}
        <a className="td-under" href="https://www.gatsbyjs.org">
          Gatsby
        </a>
      </div>
    </footer>
  );
}
