import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
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
      } = data

      docs = docs
        .map(item => item.node)
        .reduce((acc, item) => {
          const group = item.group

          if (group in acc) {
            acc[group].push(item)
          } else {
            acc[group] = [item]
          }

          return acc
        }, {})

      return (
        <nav className="d-none pos-fxd top-60 lft-0 btm-0 w-220 of-scroll p-x.5 z-6 bgc-white d-blk@md">
          <ul>
            {pages.map(item => (
              <li className="" key={item.id}>
                <Link activeClassName="c-primary" to={item.link}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          {Object.keys(docs).map((item, idx) => (
            <div key={`group-${idx}`}>
              <h5>{item}</h5>
              <ul>
                {docs[item].map(i => (
                  <li key={i.id}>
                    <Link activeClassName="c-primary" to={`/${i.name}`}>
                      {i.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      )
    }}
  />
)
