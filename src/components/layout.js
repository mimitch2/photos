import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import Sidebar from './sideBar';
import layoutStyles from './layout.module.scss';
import Header from './header';

const Layout = ({ children }) => {
    const { container, gatsbyLogo } = layoutStyles;
    const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
      placeholderImage: file(relativePath: { eq: "gatsby-logo.png" }) {
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
            <div
                className={container}

            >
                <Sidebar />
                <main style={{ width: '100%' }}>{children}</main>
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
