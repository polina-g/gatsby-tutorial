import * as React from 'react';
import { Link } from 'gatsby';
import {
    container, 
    heading,
    navLinks,
    navLinkItem,
    navLinkText,
    siteTitle,
} from './layout.module.css';
import { useStaticQuery, graphql } from 'gatsby';

const Layout = ({pageTitle, children}) => {
    const result = useStaticQuery(graphql`
    query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `)
 
    return (
        <div className={container}>
            <title>{pageTitle} | {result.site.siteMetadata.title}</title>
            <header className={siteTitle}>{result.site.siteMetadata.title}</header>
            <nav>
                <ul className={navLinks}>
                    <li className={navLinkItem}><Link to='/' className={navLinkText}>Home</Link></li>
                    <li className={navLinkItem}><Link to='/about' className={navLinkText}>About</Link></li>
                    <li className={navLinkItem}><Link to='/blog' className={navLinkText}>Blog Posts</Link></li>
                </ul>
            </nav>
            <main>
                <h1 className={heading}>{pageTitle}</h1>
                {children}
            </main>
            <footer>
                <p>Copyright All Rights Resevered @ 2021 Gatsby Tutorial</p>
            </footer>
        </div>
    );
};

export default Layout;