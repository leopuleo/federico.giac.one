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
          email
          phone
          vat
          navigation {
            label
            link
          }
          social {
            type
            link
          }
        }
      }
    }
  `);

  const {
    title,
    description,
    email,
    phone,
    vat,
    navigation,
    social,
  } = data.site.siteMetadata;

  return (
    <>
      <Header title={title} description={description} navigation={navigation} />
      <main>{children}</main>
      <Footer
        title={title}
        description={description}
        email={email}
        phone={phone}
        vat={vat}
        social={social}
      />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
