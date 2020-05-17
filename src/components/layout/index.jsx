import React from "react";
import PropTypes from "prop-types";

import { useStaticQuery, graphql } from "gatsby";

import Header from "../header";
import Footer from "../footer";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteDataQuery {
      site {
        siteMetadata {
          title
          description
          navigation {
            label
            link
          }
        }
      }
    }
  `);

  return (
    <>
      <Header
        title={data.site.siteMetadata.title}
        description={data.site.siteMetadata.description}
        navigation={data.site.siteMetadata.navigation}
      />
      <main>{children}</main>
      <Footer siteTitle={data.site.siteMetadata.title} />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
