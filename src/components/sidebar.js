import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
export default () => (
  <StaticQuery
    query={graphql`
      query NavQuery {
        site {
          siteMetadata {
            pages {
              name
              link
            }
          }
        }
        allDocPage {
          edges {
            node {
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

      // docs = docs.map(item => item.node).reduce((acc, item) => (), [])

      return (
        <nav>
          <ul>
            {pages.map(item => (
              <li className="" key={item.id}>
                <Link to={item.link}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
      )
    }}
  />
)
