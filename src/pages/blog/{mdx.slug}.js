import * as React from 'react';
import Layout from '../../components/layout';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';

const BlogPost = ({data}) => {
    return(
        <Layout pageTitle={data.mdx.frontmatter.name}>
            <p>This is where my blog posts content will go</p>
            <MDXRenderer>
                {data.mdx.body}
            </MDXRenderer>
        </Layout>
    );
};

export const query = graphql`
query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        author
        datePublished(formatString: "MMM DD, YYYY")
        name
      }
      body
    }
  }  
`

export default BlogPost;