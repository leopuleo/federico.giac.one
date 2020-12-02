import React from "react";
import PropTypes from "prop-types";

import { Link as GatsbyLink } from "gatsby";

const Link = ({ children, to, activeClassName, partiallyActive, ...other }) => {
    const internal = /^\/(?!\/)/.test(to);

    if (internal) {
        return (
            <GatsbyLink
                to={to}
                activeClassName={activeClassName}
                partiallyActive={partiallyActive}
                {...other}
            >
                {children}
            </GatsbyLink>
        );
    }
    return (
        <a href={to} rel="noopener" rel="noreferrer" {...other}>
            {children}
        </a>
    );
};

Link.propTypes = {
    children: PropTypes.node.isRequired,
    to: PropTypes.string.isRequired,
    activeClassName: PropTypes.string,
    partiallyActive: PropTypes.string
};

export default Link;
