import React, { Fragment } from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
// import { MDXProvider } from '@mdx-js/react';
// import components from 'utils/mdx-components';

import Layout from 'components/layout';
import SEO from 'components/seo';
import Code from 'components/Code';

const PropPage = ({ data }) => {
  const content = data.allPropPage.edges[0].node;

  return (
    <Layout>
      <SEO title={content.name} />
      <h1 className="fs-34 lh-1.2 fw-bold">{content.name}</h1>
      <p className="fs-22 lh-1.3 o-0.5 pt-x.25">{content.group}</p>

      <hr className="my-x1.5 o-0.1" />

      {content.data && (
        <div className="typography">
          {content.data.map((item, idx) => {
            return (
              <Fragment key={`item-${idx}`}>
                <MDXRenderer>{item.mdx}</MDXRenderer>

                <Code className="language-scss">
                  {`$${item.context.name}: ${item.context.value};`}
                </Code>
              </Fragment>
            );
          })}
        </div>
      )}
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!) {
    allPropPage(filter: { name: { eq: $slug } }) {
      edges {
        node {
          name
          data {
            description
            mdx
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

export default PropPage;
