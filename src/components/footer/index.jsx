import React from "react";
import PropTypes from "prop-types";

import Contacts from "../contacts";
import Container from "../container";
import Link from "../link";

import {
    DataContainer,
    Description,
    Logo,
    Title,
    Wrapper,
    Written,
    Content,
    BrandLink,
    SocialContainer,
    SocialLink,
    Facebook,
    Instagram
} from "./styled";

const Footer = ({ title, description, email, phone, vat, social }) => (
    <footer>
        <Contacts email={email} phone={phone} />
        <Wrapper>
            <Container>
                <Content>
                    <BrandLink to="/">
                        <Logo />
                        <Written>
                            <Title>{title}</Title>
                            <Description>{description}</Description>
                        </Written>
                    </BrandLink>
                    <SocialContainer>
                        {social.map(({ link, type }, index) => (
                            <SocialLink
                                to={link}
                                target="_blank"
                                key={`social-item-${index}`}
                            >
                                {(() => {
                                    switch (type) {
                                        case "facebook":
                                            return <Facebook />;
                                        case "instagram":
                                            return <Instagram />;
                                        default:
                                            return null;
                                    }
                                })()}
                            </SocialLink>
                        ))}
                    </SocialContainer>
                    <DataContainer>
                        <p>
                            email:{" "}
                            <Link
                                className="underline font-sans-semibold"
                                to={`mailto:${email}`}
                            >
                                {email}
                            </Link>{" "}
                            - telefono:
                            <Link
                                className="underline font-sans-semibold"
                                to={`tel:${phone}`}
                            >
                                {phone}
                            </Link>
                        </p>
                        <p>
                            partita iva: {vat} –{" "}
                            <Link className="underline" to="/cookie-policy/">
                                cookie policy
                            </Link>
                        </p>
                    </DataContainer>
                </Content>
            </Container>
        </Wrapper>
    </footer>
);

Footer.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string,
    vat: PropTypes.string,
    phone: PropTypes.string,
    social: PropTypes.arrayOf(PropTypes.object)
};

Footer.defaultProps = {
    title: "",
    description: "",
    email: "",
    phone: "",
    vat: "",
    social: []
};

export default Footer;
