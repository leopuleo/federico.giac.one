import React from "react";
import PropTypes from "prop-types";

import Link from "../link";

import { StyledButton } from "./styled";

const Button = ({ children, disabled, onClick, size, to, ...rest }) => {
    return (
        <StyledButton
            as={to ? Link : "button"}
            disabled={disabled}
            onClick={onClick}
            size={size}
            to={to}
            {...rest}
        >
            {children}
        </StyledButton>
    );
};

Button.defaultProps = {
    kind: "primary",
    size: "medium"
};

Button.propTypes = {
    children: PropTypes.node,
    kind: PropTypes.oneOf(["primary", "secondary", "tertiary"]),
    size: PropTypes.oneOf(["small", "medium", "large"]),
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
    to: PropTypes.any
};

export default Button;
