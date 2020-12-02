import React from "react";
import Image from "gatsby-image";
import Slider from "react-slick";

import { useStaticQuery, graphql } from "gatsby";

import { Wrapper } from "./styled";

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
            <Slider {...settings}>
                {InstagramImages.nodes.map(({ id, caption, localFile }) => {
                    return (
                        <Image
                            key={id}
                            alt={
                                caption &&
                                caption.replace(/(\r\n|\n|\r)/gm, " ")
                            }
                            fluid={localFile.childImageSharp.fluid}
                        />
                    );
                })}
            </Slider>
        </Wrapper>
    );
};

export default InstagramFeed;
