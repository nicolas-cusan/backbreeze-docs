import React from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';

const SidebarLink = ({ to, title }) => (
  <Link
    className="d-blk px-x.75 py-2 brsl-solid brwt-4 brcl-transparent c-accentDark:hover tsp-color tsd-200"
    activeClassName="td-underline brcl-accent bgc-accentLight"
    to={to}
  >
    {title}
  </Link>
);

export default () => (
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
        allDocPage {
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
        allDocPage: { edges: docs },
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
        <nav className="d-none pos-fxd top-60 lft-0 btm-0 w-220@sm w-320@md pt-x.75 pb-x2 of-scroll z-6 bgc-powder d-blk@sm brwr-1 brcr-dust brsr-solid">
          <ul className="mb-x1">
            {pages.map(item => (
              <li className="" key={item.id}>
                <SidebarLink to={item.link} title={item.name} />
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
                    <SidebarLink to={`/${i.name}`} title={i.name} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      );
    }}
  />
);
