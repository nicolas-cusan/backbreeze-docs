import React, { Fragment } from "react"
import { Link, graphql } from "gatsby"

import Layout from "components/layout"
// import Image from "components/image"
// import SEO from "components/seo"

const DocPage = ({ data }) => {
  const content = data.allDocPage.edges[0].node

  console.log(content)

  return (
    <Layout>
      {/* <SEO title="Home" /> */}
      <h1>{content.name}</h1>
      <p>{content.group}</p>

      {content.data &&
        content.data.map((item, idx) => (
          <div key={`item-${idx}`}>
            <div dangerouslySetInnerHTML={{ __html: item.rendered }} />
            <pre>{`$${item.context.name}: ${item.context.value}`}</pre>
          </div>
        ))}
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    allDocPage(filter: { name: { eq: $slug } }) {
      edges {
        node {
          name
          data {
            description
            rendered
            file {
              name
              path
            }
            context {
              name
              type
              value
            }
          }
          group
        }
      }
    }
  }
`

export default DocPage
