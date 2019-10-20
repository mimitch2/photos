import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import Sidebar from './sideBar';
import layoutStyles from './layout.module.scss';
import Header from './header';
// import SEO from './seo';


const Layout = ({ children }) => {
    const { container, innerContainer, gatsbyLogo } = layoutStyles;
    const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
      placeholderImage: file(relativePath: { eq: "gatsby-icon.png" }) {
        childImageSharp {
          fluid(maxWidth: 200,) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

    return (
        <>

            <Header siteTitle={data.site.siteMetadata.title} />
            <Sidebar />
            <div className={container}>
                <div className={innerContainer}>
                    <main>{children}</main>
                </div>
            </div>
            <footer>
          © MIKE J. MITCHELL {new Date().getFullYear()}, BUILT WITH
                <a href="https://www.gatsbyjs.org" target="__blank" className={gatsbyLogo}>
                    <Img fluid={data.placeholderImage.childImageSharp.fluid} />
                </a>
            </footer>
        </>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
