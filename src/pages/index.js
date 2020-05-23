import React from "react";

import Layout from "../components/layout";
import Seo from "../components/seo";

import Top from "../components/pages/home/top";
import About from "../components/pages/home/about";

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Top />
    <About />
  </Layout>
);

export default IndexPage;
