import React from 'react';
import Sidebar from 'components/sidebar';
import Header from 'components/header';
import { useStaticQuery, graphql } from 'gatsby';

export default ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          version
          github
        }
      }
    }
  `);

  return (
    <>
      <Header
        siteTitle={data.site.siteMetadata.title}
        version={data.site.siteMetadata.version}
        github={data.site.siteMetadata.github}
      />
      <Sidebar />
      {children}
    </>
  );
};
