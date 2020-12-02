import React from "react";
import Image from "gatsby-image";

import { useStaticQuery, graphql } from "gatsby";

import Container from "../../../container";
import { Heading3, Paragraph } from "../../../elements";

import {
    ContentBuilding,
    ContentFurniture,
    ContentArchitecture,
    ImageCol,
    TextCol
} from "./styled";

const Services = () => {
    const {
        BuildingImage,
        FurnitureImage,
        ArchitectureImage
    } = useStaticQuery(graphql`
        query {
            BuildingImage: file(relativePath: { eq: "costruzione-legno.jpg" }) {
                childImageSharp {
                    fluid(quality: 80) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
            FurnitureImage: file(
                relativePath: { eq: "mobili-legno-ferro.jpg" }
            ) {
                childImageSharp {
                    fluid(quality: 80, maxHeight: 700, maxWidth: 700) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
            ArchitectureImage: file(
                relativePath: { eq: "progettazione-architetto.jpg" }
            ) {
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
            <ContentBuilding>
                <ImageCol>
                    <Image
                        alt="Costruzione"
                        fluid={BuildingImage.childImageSharp.fluid}
                    />
                </ImageCol>
                <TextCol>
                    <Heading3>
                        {'"L\'arte di costruire, per durare nel tempo..."'}
                    </Heading3>
                    <Paragraph>
                        L’arte di costruire deve essere fatta per durare nel
                        tempo, per cercare un integrazione tra le preesistenze,
                        la natura del contesto circostante e il nuovo manufatto
                        che sarà realizzato.
                    </Paragraph>
                    <Paragraph>
                        Il tempo che scorre non deve rappresentare solo noioso
                        impiccio per il mantenimento della costruzione, ma anche
                        un fattore che ne risalti la bellezza e la durabilità.
                    </Paragraph>
                    <Paragraph>
                        La ricerca della perfezione nella realizzazione dei
                        dettagli deve essere l’obbiettivo a cui deve ambire
                        qualsiasi costruttore.
                    </Paragraph>
                </TextCol>
            </ContentBuilding>

            <Container>
                <ContentFurniture>
                    <ImageCol>
                        <Image
                            alt="Furniture design"
                            fluid={FurnitureImage.childImageSharp.fluid}
                        />
                    </ImageCol>
                    <TextCol>
                        <Heading3>{"Furniture design"}</Heading3>
                        <Paragraph>
                            Gli edifici non sono solo involucri vuoti e
                            scheletri robusti, ma per essere considerati
                            accoglienti vanno arredati di oggetti utili,
                            duraturi e piacevoli agli occhi del fruitore.
                        </Paragraph>
                        <Paragraph>
                            Il legno è un materiale che si presta bene a questo
                            compito, specialmente quando viene accoppiato a
                            materiali differenti che possono esaltarne le
                            caratteristiche o colmare alcune sue lacune.
                        </Paragraph>
                    </TextCol>
                </ContentFurniture>
            </Container>

            <ContentArchitecture>
                <ImageCol>
                    <Image
                        alt="Progettazione"
                        fluid={ArchitectureImage.childImageSharp.fluid}
                    />
                </ImageCol>
                <TextCol>
                    <Heading3>{"Progettazione"}</Heading3>
                    <Paragraph>
                        A monte del processo di costruzione ci deve essere
                        sempre una progettazione oculata e consapevole. Lo
                        studio del contesto, i gusti e le esigenze del
                        committente, l’uso corretto dei materiali sono gli
                        ingredienti di base per un buon risultato finale.
                    </Paragraph>
                </TextCol>
            </ContentArchitecture>
        </>
    );
};

export default Services;
