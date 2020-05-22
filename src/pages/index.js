import React from "react";

import Layout from "../components/layout";
import Seo from "../components/seo";

import Top from "../components/pages/home/top";

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Top />
  </Layout>
);

export default IndexPage;
