import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import Layout from "../components/layout";

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <h1>Welcome to my Gatsby site!</h1>
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        alt="Purple flower"
        src="../images/flower.jpeg"
      />
    </Layout>

  )
}

export default IndexPage
