import React from 'react';

import Layout from 'components/layout';
import SEO from 'components/seo';

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1 className="fs-34 lh-1.2 fw-500 -ls-sm mb-x1">404 — Not found</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
);

export default NotFoundPage;
