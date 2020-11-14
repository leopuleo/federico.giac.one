import React from "react";
import Image from "gatsby-image";

import { useStaticQuery, graphql } from "gatsby";

import Container from "../../../container";

import {
  ContentBuilding,
  ContentFurniture,
  ContentArchitecture,
  ImageCol,
  ImageColInner,
  Text,
  TextCol,
  Title,
  Wrapper,
} from "./styled";

const Services = () => {
  const {
    BuildingImage,
    FurnitureImage,
    ArchitectureImage,
  } = useStaticQuery(graphql`
    query {
      BuildingImage: file(relativePath: { eq: "costruzione-legno.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, maxHeight: 800, quality: 80) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      FurnitureImage: file(relativePath: { eq: "mobili-legno-ferro.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, maxHeight: 700, quality: 80) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      ArchitectureImage: file(
        relativePath: { eq: "progettazione-architetto.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1000, maxHeight: 500, quality: 80) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  return (
    <Wrapper>
      <ContentBuilding>
        <ImageCol>
          <ImageColInner>
            <Image
              alt="Costruzione"
              fluid={BuildingImage.childImageSharp.fluid}
            />
          </ImageColInner>
        </ImageCol>
        <TextCol>
          <Title>{'"L\'arte di costruire, per durare nel tempo..."'}</Title>
          <Text>
            L’arte di costruire deve essere fatta per durare nel tempo, per
            cercare un integrazione tra le preesistenze, la natura del
            contesto circostante e il nuovo manufatto che sarà realizzato.
          </Text>
          <Text>
            Il tempo che scorre non deve rappresentare solo noioso impiccio
            per il mantenimento della costruzione, ma anche un fattore che ne
            risalti la bellezza e la durabilità.
          </Text>
          <Text>
            La ricerca della perfezione nella realizzazione dei dettagli deve
            essere l’obbiettivo a cui deve ambire qualsiasi costruttore.
          </Text>
        </TextCol>
      </ContentBuilding>
      
      <Container>
        <ContentFurniture>
          <ImageCol>
            <ImageColInner>
              <Image
                alt="Furniture design"
                fluid={FurnitureImage.childImageSharp.fluid}
              />
            </ImageColInner>
          </ImageCol>
          <TextCol>
            <Title>{"Furniture design"}</Title>
            <Text>
              Gli edifici non sono solo involucri vuoti e scheletri robusti, ma
              per essere considerati accoglienti vanno arredati di oggetti
              utili, duraturi e piacevoli agli occhi del fruitore.
            </Text>
            <Text>
              Il legno è un materiale che si presta bene a questo compito,
              specialmente quando viene accoppiato a materiali differenti che
              possono esaltarne le caratteristiche o colmare alcune sue lacune.
            </Text>
          </TextCol>
        </ContentFurniture>
      </Container>

      <ContentArchitecture>
        <ImageCol>
          <ImageColInner>
            <Image
              alt="Progettazione"
              fluid={ArchitectureImage.childImageSharp.fluid}
            />
          </ImageColInner>
        </ImageCol>
        <TextCol>
          <Title>{"Progettazione"}</Title>
          <Text>
            A monte del processo di costruzione ci deve essere sempre una
            progettazione oculata e consapevole. Lo studio del contesto, i
            gusti e le esigenze del committente, l’uso corretto dei materiali
            sono gli ingredienti di base per un buon risultato finale.
          </Text>
        </TextCol>
      </ContentArchitecture>
    </Wrapper>
  );
};

export default Services;
