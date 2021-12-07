import * as React from 'react';
import Layout from '../../components/layout';
import { graphql, Link } from 'gatsby';


const BlogPage = ({ data }) => {
    return (
        <Layout pageTitle="Blog Posts">
                {
                    data.allMdx.nodes.map(
                        node => (
                        <article key={node.id}>
                            <Link to={`/blog/${node.slug}`}><h2>{node.frontmatter.name}</h2></Link>
                            <p>Posted: {node.frontmatter.datePublished}</p>
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
            slug
        }
    }
}`

export default BlogPage;