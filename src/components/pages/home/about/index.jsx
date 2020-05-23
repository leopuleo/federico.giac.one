import React from "react";
import Image from "gatsby-image";

import { useStaticQuery, graphql } from "gatsby";

import Container from "../../../container";

import {
  Content,
  ImageCol,
  ImageColInner,
  Text,
  TextCol,
  Title,
  WrapperMain,
  WrapperSecondary,
} from "./styled";

const About = () => {
  const { AboutImage } = useStaticQuery(graphql`
    query {
      AboutImage: file(relativePath: { eq: "carpentiere-legno.jpg" }) {
        childImageSharp {
          fluid(quality: 80) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  return (
    <>
      <WrapperMain>
        <Container>
          <Title>{"Chi è il Maisdabòsch"}</Title>
          <Content>
            <ImageCol>
              <ImageColInner>
                <Image
                  alt="Chi è il Maisdabòsch: lavori di carpenteria in legno"
                  fluid={AboutImage.childImageSharp.fluid}
                />
              </ImageColInner>
            </ImageCol>
            <TextCol>
              <Text>
                Parola composta, Maisdabòsch, ci racconta che è chiamato così
                chi si intende di legno con una certa esperienza,
                dall’abbattimento di un albero alla lavorazione in bottega,
                tant’è che viene formata da Mèistr (mastro, maestro)
                da bòsch (bosco, legno): il falegname, il carpentiere.
              </Text>
              <Text>
                Il maisdabòsch è un progettista, è un costruttore, un
                conoscitore del legno e della materia da costruzione.
              </Text>
            </TextCol>
          </Content>
        </Container>
      </WrapperMain>

      <WrapperSecondary>
        <Container>
          <TextCol>
            <Title>{"Lavori in legno e non solo"}</Title>
            <Text>
              Dalla progettazione alla costruzione, dal pensiero all’artefatto,
              il Maisdabòsch si assume il compito di creare manufatti in legno
              che si sposano con materiali differenti della tradizione.
            </Text>
            <Text>
              L’opera del Maisdabòsch si basa su principi semplici e
              fondamentali, come la sostenibilità e la funzionalità, uniti per
              creare oggetti che racchiudano bellezza e solidità.
            </Text>
          </TextCol>
        </Container>
      </WrapperSecondary>
    </>
  );
};

export default About;
