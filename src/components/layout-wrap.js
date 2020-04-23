import React, { useState } from 'react';
import Sidebar from 'components/sidebar';
import Header from 'components/header';
import HeaderHome from 'components/header-home';
import { useStaticQuery, graphql } from 'gatsby';

export default ({ children, location }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const isHome = location.pathname === '/';

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
      {isHome ? (
        <HeaderHome
          siteTitle={data.site.siteMetadata.title}
          version={data.site.siteMetadata.version}
          github={data.site.siteMetadata.github}
          setOpenMenu={setOpenMenu}
        />
      ) : (
        <>
          <Header
            siteTitle={data.site.siteMetadata.title}
            version={data.site.siteMetadata.version}
            github={data.site.siteMetadata.github}
            setOpenMenu={setOpenMenu}
          />
          <Sidebar openMenu={openMenu} setOpenMenu={setOpenMenu} />
        </>
      )}
      {children}
    </>
  );
};
