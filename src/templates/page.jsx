import React from "react";
import { graphql } from "gatsby";

import Container from "../components/container";
import Layout from "../components/layout";
import PageContent from "../components/page-content";
import PageHeader from "../components/page-header";
import Seo from "../components/seo";

const createMarkp = html => {
    return {
        __html: html
    };
};

const Page = ({ data: { prismicPage } }) => {
    const { data, lang } = prismicPage;
    return (
        <Layout>
            <Seo
                title={data.seo_title}
                description={data.description}
                lang={lang}
            />
            <PageHeader>{data.title.text}</PageHeader>
            <Container>
                <PageContent>{data.content.html}</PageContent>
            </Container>
        </Layout>
    );
};

export const query = graphql`
    query($slug: String!) {
        prismicPage(uid: { eq: $slug }) {
            lang
            data {
                title {
                    text
                }
                content {
                    html
                }
                seo_title
                seo_description
            }
        }
    }
`;

export default Page;
