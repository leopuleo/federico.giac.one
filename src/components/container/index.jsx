import React from "react";
import PropTypes from "prop-types";

import { Content } from "./styled";

const Container = ({ children }) => <Content>{children}</Content>;

Container.propTypes = {
  children: PropTypes.node,
};

export default Container;
