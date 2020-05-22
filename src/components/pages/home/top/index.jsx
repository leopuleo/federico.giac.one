import React from "react";
import Image from "gatsby-image";

import { useStaticQuery, graphql } from "gatsby";

import {
  Content,
  ImageContainer,
  Heading,
  HeadingContainer,
  Shade,
} from "./styled";

const Top = () => {
  const { TopImage } = useStaticQuery(graphql`
    query {
      TopImage: file(
        relativePath: { eq: "progettazione-costruzione-legno.jpg" }
      ) {
        childImageSharp {
          fluid(
            quality: 80
            duotone: { highlight: "#000000", shadow: "#000000", opacity: 40 }
          ) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  return (
    <Content>
      <ImageContainer>
        <Image
          alt="Progettazione e costruzione in legno"
          fluid={TopImage.childImageSharp.fluid}
        />
      </ImageContainer>
      <HeadingContainer>
        <Heading>Progettazione e costruzione in legno</Heading>
      </HeadingContainer>
      <Shade />
    </Content>
  );
};

export default Top;
