import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
export default () => (
  <StaticQuery
    query={graphql`
      query NavQuery {
        allSitePage(
          filter: {
            isCreatedByStatefulCreatePages: { eq: true }
            # path: { regex: "/(?!.*404*)/" }
          }
        ) {
          edges {
            node {
              id
              path
              isCreatedByStatefulCreatePages
            }
          }
        }
      }
    `}
    render={data => {
      console.log(data)
      return <nav>Hey</nav>
    }}
  />
)
