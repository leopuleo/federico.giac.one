import React from "react";
import Image from "gatsby-image";
import Slider from "react-slick";

import { useStaticQuery, graphql } from "gatsby";

import Link from "../link";
import { Heading3 } from "../elements";

import { Inner, Text, Wrapper } from "./styled";

const InstagramFeed = () => {
    const { InstagramImages } = useStaticQuery(graphql`
        query {
            InstagramImages: allInstaNode(
                limit: 12
                sort: { fields: timestamp, order: DESC }
            ) {
                nodes {
                    id
                    caption
                    localFile {
                        childImageSharp {
                            fluid(quality: 70, maxWidth: 400, maxHeight: 400) {
                                ...GatsbyImageSharpFluid_withWebp
                            }
                        }
                    }
                }
            }
        }
    `);

    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 600,
        speed: 4000,
        fade: false,
        swipeToSlide: true,
        variableWidth: false,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    dots: false
                }
            }
        ]
    };

    return (
        <Wrapper>
            <Text>
                <Heading3 style={{ textAlign: "left" }}>
                    {"Immagini dal bosco..."}
                </Heading3>
            </Text>
            <Inner>
                <Slider {...settings}>
                    {InstagramImages.nodes.map(({ id, caption, localFile }) => {
                        return (
                            <Link
                                key={id}
                                to={`https://instagram.com/p/${id}`}
                                target="_blank"
                            >
                                <Image
                                    alt={
                                        caption &&
                                        caption.replace(/(\r\n|\n|\r)/gm, " ")
                                    }
                                    fluid={localFile.childImageSharp.fluid}
                                />
                            </Link>
                        );
                    })}
                </Slider>
            </Inner>
        </Wrapper>
    );
};

export default InstagramFeed;
