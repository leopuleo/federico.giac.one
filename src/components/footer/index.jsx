import React from "react";
import PropTypes from "prop-types";

const Footer = ({ siteTitle }) => <footer>{siteTitle}</footer>;

Footer.propTypes = {
  siteTitle: PropTypes.string,
};

Footer.defaultProps = {
  siteTitle: ``,
};

export default Footer;
