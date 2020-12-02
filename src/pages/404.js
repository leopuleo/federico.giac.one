import React from "react";

import Container from "../components/container";
import Layout from "../components/layout";
import Seo from "../components/seo";

import { Heading1, Paragraph } from "../components/elements";

const NotFoundPage = () => (
    <Layout theme="light">
        <Seo title="Pagina non trovata" />
        <div className="mt-20 mb-32 md:mt-10">
            <Container>
                <Heading1>Pagina non trovata</Heading1>
                <Paragraph className="text-center">
                    Spiacente, la pagina che hai cercato non esiste.
                </Paragraph>
            </Container>
        </div>
    </Layout>
);

export default NotFoundPage;
