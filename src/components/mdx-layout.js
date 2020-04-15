import React from 'react';
import SEO from 'components/seo';
import Layout from 'components/layout';
import { MDXProvider } from '@mdx-js/react';
import components from 'utils/mdx-components';

export default ({ title, subline, children }) => {
  // console.log(children);
  return (
    <Layout>
      <SEO title={title} />
      <h1 className="fs-34 lh-1.2 fw-bold">{title}</h1>
      {subline && <p className="fs-22 lh-1.3 o-0.5 pt-x.25">{subline}</p>}
      <hr className="my-x1.5 o-0.1" />
      <div className="typography">
        <MDXProvider components={components}>{children}</MDXProvider>
      </div>
    </Layout>
  );
};
