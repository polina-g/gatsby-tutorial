import * as React from 'react';
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from '../components/layout';
import { graphql } from 'gatsby';


const BlogPage = ({ data }) => {
    return (
        <Layout pageTitle="Blog Posts">
                {
                    data.allMdx.nodes.map(
                        node => (
                        <article key={node.id}>
                            <h2>{node.frontmatter.name}</h2>
                            <p>{node.frontmatter.datePublished}</p>
                            <MDXRenderer>
                                {node.body}
                            </MDXRenderer>
                        </article>
                    ))
                } 
        </Layout>
    );
}

export const query = graphql`
    query {
        allMdx(sort: {fields: frontmatter___datePublished, order: DESC}) {
        nodes {
            frontmatter {
            name
            datePublished(formatString: "MMM DD, YYYY")
            }
            id
            body
        }
    }
}`

export default BlogPage;