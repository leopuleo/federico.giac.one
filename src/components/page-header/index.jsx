import React from "react";
import PropTypes from "prop-types";

import { Heading1 } from "../elements";
import { Wrapper } from "./styled";

const PageHeader = ({ children }) => (
    <Wrapper>
        <Heading1>{children}</Heading1>
    </Wrapper>
);

PageHeader.propTypes = {
    children: PropTypes.node.isRequired
};

export default PageHeader;
