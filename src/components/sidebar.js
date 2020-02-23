import React, { Fragment } from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';

const isActive = ({ isCurrent }) => {
  const className =
    'd-blk px-x.75 py-2 bl-solid bl-4 bl-transparent ts-color ts-200';
  const activeClassName = 'td-underline bl-accent bg-accentLight';
  return isCurrent
    ? { className: `${className} ${activeClassName}` }
    : { className: `${className} c-accentDark:hover` };
};

const SidebarLink = ({ to, title, setOpenMenu }) => (
  <Link getProps={isActive} to={to} onClick={() => setOpenMenu(false)}>
    {title}
  </Link>
);

export default ({ openMenu, setOpenMenu }) => {
  return (
    <StaticQuery
      query={graphql`
        query NavQuery {
          site {
            siteMetadata {
              pages {
                id
                name
                link
              }
            }
          }
          allPropPage {
            edges {
              node {
                id
                name
                group
              }
            }
          }
        }
      `}
      render={data => {
        let {
          site: {
            siteMetadata: { pages },
          },
          allPropPage: { edges: docs },
        } = data;

        docs = docs
          .map(item => item.node)
          .reduce((acc, item) => {
            const group = item.group;

            if (group in acc) {
              acc[group].push(item);
            } else {
              acc[group] = [item];
            }

            return acc;
          }, {});

        return (
          <Fragment>
            <nav
              className={`
                tr-300 tr-ot z-100 z-auto@sm pos-fxd top-60 lft-0 btm-0 w-100% w-220@sm w-320@md pt-x.75 pb-x2 of-scroll z-6 bg-powder br-1@sm br-dust@sm br-solid@sm pointer-auto@sm o-1@sm tf-y-0@sm
                ${
                  openMenu
                    ? 'pointer-auto o-1 tf-y-0'
                    : 'pointer-none o-0 tf-y-6'
                }
              `}
            >
              <ul className="mb-x1">
                {pages.map(item => (
                  <li className="" key={item.id}>
                    <SidebarLink
                      to={item.link}
                      title={item.name}
                      setOpenMenu={setOpenMenu}
                    />
                  </li>
                ))}
              </ul>

              {Object.keys(docs).map((item, idx) => (
                <div className="mb-x1" key={`group-${idx}`}>
                  <h5 className="fs-14 mb-x.25 py-1 tt-caps lh-1.3 fw-bold o-0.4 d-blk px-x.75">
                    {item}
                  </h5>
                  <ul>
                    {docs[item].map(i => (
                      <li key={i.id}>
                        <SidebarLink
                          to={`/${i.name}/`}
                          title={i.name}
                          setOpenMenu={setOpenMenu}
                        />
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </nav>
            <button
              className="pos-fxd w-60 h-60 bg-primary rad-50% rgt-x1 btm-x1 bxs-lg z-100 d-none@sm"
              aria-label="Toggle Menu"
              onClick={() => setOpenMenu(!openMenu)}
            >
              <span
                className={`
                  rad-2 pos-abs lft-50% -ml-13 w-26 h-2 bg-white top-50% -mt-1
                  tr-t tr-200
                  ${openMenu ? '-tf-xy-0-rotare-45' : '-tf-y-4'}
                `}
              ></span>
              <span
                className={`
                  rad-2 pos-abs lft-50% -ml-13 w-26 h-2 bg-white top-50% -mt-1
                  tr-t tr-200
                  ${openMenu ? 'tf-xy-0-rotare-45' : 'tf-y-4'}
                `}
              ></span>
            </button>
          </Fragment>
        );
      }}
    />
  );
};
