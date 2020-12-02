import React from "react";

import { useStaticQuery, graphql } from "gatsby";

import Slider from "react-slick";
import scrollTo from "gatsby-plugin-smoothscroll";

import {
    Content,
    DiscoverButton,
    ImageContainer,
    ImageCover,
    Heading,
    HeadingContainer
} from "./styled";

const Top = () => {
    const { TopImages } = useStaticQuery(graphql`
        query {
            TopImages: allFile(
                filter: {
                    extension: { regex: "/jpg/" }
                    relativeDirectory: { eq: "cover" }
                }
                sort: { fields: [name], order: ASC }
            ) {
                nodes {
                    id
                    childImageSharp {
                        fluid(
                            quality: 80
                            duotone: {
                                highlight: "#000000"
                                shadow: "#000000"
                                opacity: 40
                            }
                        ) {
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
            }
        }
    `);

    const settings = {
        dots: true,
        infinite: true,
        lazyLoad: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 6000,
        speed: 1000,
        fade: true,
        swipeToSlide: false,
        dots: false,
        arrows: false
    };

    return (
        <Content>
            <Slider {...settings}>
                {TopImages.nodes.map((node, index) => (
                    <ImageContainer>
                        <ImageCover
                            key={node.id}
                            alt={`Progettazione e costruzione in legno - ${
                                index + 1
                            }`}
                            fluid={node.childImageSharp.fluid}
                        />
                    </ImageContainer>
                ))}
            </Slider>
            <HeadingContainer>
                <Heading>Progettazione e costruzione in legno</Heading>
            </HeadingContainer>
            <DiscoverButton onClick={() => scrollTo("#about")}>
                Scopri di più
            </DiscoverButton>
        </Content>
    );
};

export default Top;
