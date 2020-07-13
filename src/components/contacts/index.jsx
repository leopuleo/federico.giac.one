import React from "react";
import PropTypes from "prop-types";

import Container from "../container";
import Button from "../button";

import { Buttons, Text, Title, Wrapper } from "./styled";

const Contacts = ({ email, phone }) => (
  <Wrapper>
    <Container>
      <Title>Proviamo a dare forma ad un'idea</Title>
      <Text>
        Spesso può essere difficile sintetizzare un sogno o un’idea. Vediamo
        nella nostra testa la casa che vorremmo o l’arredo che meglio si
        sposerebbe con la nostra idea di “abitazione confortevole” ma può essere
        complicato dargli forma. Possiamo tentare di renderlo un po’ più reale e
        insieme proveremo a concretizzarlo.
      </Text>
      <Buttons>
        <Button to="mailto:federico@giac.one" kind="secondary" size="large">
          Scrivimi
        </Button>
        <Button to="tel:+393295356947" kind="secondary" size="large">
          Chiamami
        </Button>
      </Buttons>
    </Container>
  </Wrapper>
);

Contacts.propTypes = {
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};

Contacts.defaultProps = {
  email: "",
  phone: "",
};

export default Contacts;
