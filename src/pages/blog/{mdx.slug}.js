import * as React from 'react';
import Layout from '../../components/layout';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const BlogPost = ({data}) => {
  const image = getImage(data.mdx.frontmatter.hero_image);
    return(
        <Layout pageTitle={data.mdx.frontmatter.name}>
            <GatsbyImage  image={image} alt={data.mdx.frontmatter.hero_image_alt}/>
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
        hero_image_alt
        hero_image {
        childImageSharp {
          gatsbyImageData
          }
        }
      }
      body
    }
  }  
`

export default BlogPost;