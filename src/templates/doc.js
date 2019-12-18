import React from 'react';
import { graphql } from 'gatsby';

import Layout from 'components/layout';
import SEO from 'components/seo';

const DocPage = ({ data }) => {
  const content = data.allDocPage.edges[0].node;

  return (
    <Layout>
      <SEO title={content.name} />
      <h1 className="fs-34 lh-1.2 mb-x.25">{content.name}</h1>
      <p className="fs-22 lh-1.3 o-0.5">{content.group}</p>

      {content.data &&
        content.data.map((item, idx) => (
          <div key={`item-${idx}`}>
            <div dangerouslySetInnerHTML={{ __html: item.rendered }} />
            <pre>{`$${item.context.name}: ${item.context.value}`}</pre>
          </div>
        ))}
    </Layout>
  );
};

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
`;

export default DocPage;
