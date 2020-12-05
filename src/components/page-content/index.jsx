import React from "react";
import PropTypes from "prop-types";

import { Content } from "./styled";

const createMarkup = html => {
    return {
        __html: html
    };
};

const PageContent = ({ children }) => (
    <Content dangerouslySetInnerHTML={createMarkup(children)} />
);

PageContent.propTypes = {
    children: PropTypes.node
};

export default PageContent;
