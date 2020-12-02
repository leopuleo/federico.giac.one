import React from "react";
import Image from "gatsby-image";

import { useStaticQuery, graphql } from "gatsby";

import Container from "../../../container";
import { Heading2, Heading3, Paragraph } from "../../../elements";

import {
    Content,
    ImageCol,
    ImageColInner,
    TextCol,
    WrapperMain
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
        <WrapperMain id="about">
            <Container>
                <Heading2>{"Chi è il Maisdabòsch"}</Heading2>
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
                        <Paragraph>
                            Parola composta, Maisdabòsch, ci racconta che è
                            chiamato così chi si intende di legno con una certa
                            esperienza, dall’abbattimento di un albero alla
                            lavorazione in bottega, tant’è che viene formata da
                            Mèistr (mastro, maestro) da bòsch (bosco, legno): il
                            falegname, il carpentiere.
                        </Paragraph>
                        <Paragraph>
                            Il maisdabòsch è un progettista, un costruttore, un
                            conoscitore del legno e della materia da
                            costruzione.
                        </Paragraph>
                        <Heading3>{"Lavori in legno e non solo"}</Heading3>
                        <Paragraph>
                            Il lavoro di un Maisdabòsch è quello di creare
                            manufatti in legno che si sposano con materiali
                            differenti della tradizione.
                        </Paragraph>
                        <Paragraph>
                            La sua opera si basa su principi semplici e
                            fondamentali, come la sostenibilità e la
                            funzionalità, uniti per creare oggetti che
                            racchiudano bellezza e solidità.
                        </Paragraph>
                    </TextCol>
                </Content>
            </Container>
        </WrapperMain>
    );
};

export default About;
