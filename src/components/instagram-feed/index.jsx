import React from "react";
import Image from "gatsby-image";

import { useStaticQuery, graphql } from "gatsby";

import {
    ImageWrapper,
    Wrapper,
    WrapperInner
} from "./styled"

const InstagramFeed = () => {
    const { InstagramImages } = useStaticQuery(graphql`
        query {
            InstagramImages: allInstaNode(limit: 24) {
                nodes {
                    id
                    username
                    likes
                    caption
                    localFile {
                        childImageSharp {
                            fluid(
                                quality: 70
                                maxWidth: 600
                                maxHeight: 600
                            ) {
                                ...GatsbyImageSharpFluid_withWebp
                            }
                        }
                    }
                }
            }
        }
  `);

  return(
    <Wrapper>
        <WrapperInner>
            {InstagramImages.nodes.map(node => (
                <ImageWrapper>
                    <Image id={node.CC75dnhiCHU} alt={node.caption && node.caption.replace(/(\r\n|\n|\r)/gm," ")} fluid={node.localFile.childImageSharp.fluid} />
                </ImageWrapper>
            ))}
        </WrapperInner>
    </Wrapper>
  )
}

export default InstagramFeed;
