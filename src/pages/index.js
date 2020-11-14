import React from "react";

import Layout from "../components/layout";
import Seo from "../components/seo";
import InstagramFeed from "../components/instagram-feed";

import Top from "../components/pages/home/top";
import About from "../components/pages/home/about";
import Services from "../components/pages/home/services";


const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Top />
    <About />
    <Services />
    <InstagramFeed />
  </Layout>
);

export default IndexPage;
