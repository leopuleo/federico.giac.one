import React from "react";
import PropTypes from "prop-types";

import Container from "../container";

import {
  Brand,
  Description,
  Logo,
  Title,
  Written,
  Content,
  BrandLink,
  Navigation,
  NavList,
  NavItem,
  NavLink,
} from "./styled";

const Header = ({ title, description, navigation }) => (
  <header>
    <Container>
      <Content>
        <Brand>
          <BrandLink to="/">
            <Logo />
            <Written>
              <Title>{title}</Title>
              <Description>{description}</Description>
            </Written>
          </BrandLink>
        </Brand>
        {navigation && navigation.length > 0 && (
          <Navigation>
            <NavList>
              {navigation.map((item, index) => (
                <NavItem key={`nav-item-${index}`}>
                  <NavLink to={item.link}>{item.label}</NavLink>
                </NavItem>
              ))}
            </NavList>
          </Navigation>
        )}
      </Content>
    </Container>
  </header>
);

Header.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  navigation: PropTypes.arrayOf(PropTypes.object),
};

Header.defaultProps = {
  title: "",
  description: "",
  navigation: [],
};

export default Header;
