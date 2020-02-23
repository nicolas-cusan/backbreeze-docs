import React, { Fragment } from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import Layout from 'components/layout';
import SEO from 'components/seo';
import Code from 'components/Code';

const MixinsPage = ({ data }) => {
  const content = data.allMixinsPage.edges[0].node;

  return (
    <Layout>
      <SEO title={content.name} />
      <h1 className="fs-34 lh-1.2 fw-bold">{content.name}</h1>
      <p className="fs-22 lh-1.3 o-0.5 pt-x.25">{content.group}</p>
      <hr className="my-x1.5 o-0.1" />

      {content.data && (
        <div className="typography">
          {content.data.map((item, idx) => (
            <Fragment key={`item-${idx}`}>
              <MDXRenderer>{item.mdx}</MDXRenderer>
              {item.example &&
                item.example.map((exp, i) => (
                  <Fragment key={`exp-${i}`}>
                    {exp.description && <h4>{exp.description}</h4>}
                    <Code className={`language-${exp.type}`}>{exp.code}</Code>
                  </Fragment>
                ))}
            </Fragment>
          ))}
        </div>
      )}
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!) {
    allMixinsPage(filter: { name: { eq: $slug } }) {
      edges {
        node {
          name
          data {
            mdx
            example {
              type
              code
              description
            }
            parameter {
              type
              name
              description
            }
            file {
              name
              path
            }
            context {
              name
              type
              code
            }
          }
          group
        }
      }
    }
  }
`;

export default MixinsPage;
