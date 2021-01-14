import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { LayoutProvider } from '../context/layoutContext';
import Sidebar from './sideBar';
import layoutStyles from './layout.module.scss';
import Header from './header';
import SEO from './seo';
import useIsPost from '../hooks/useIsPost';

const Layout = ({ metaDescription, picData, metaTitle, children }) => {
    const [isPost, setIsPost] = useIsPost();

    const { outerWrapper, container, innerContainer, gatsbyLogo } = layoutStyles;

    const data = useStaticQuery(graphql`
        query SiteTitleQuery {
            site {
                siteMetadata {
                    title
                    description
                }
            }
            placeholderImage: file(relativePath: { eq: "gatsby-icon.png" }) {
                childImageSharp {
                    fluid(maxWidth: 100) {
                        ...GatsbyImageSharpFluid_withWebp_noBase64
                    }
                }
            }
        }
    `);

    return (
        <LayoutProvider value={{ isPost, setIsPost }}>
            <Header picData={picData} />
            <Sidebar />
            <div className={outerWrapper}>
                <SEO title={metaTitle} description={metaDescription} />
                <div className={container}>
                    <div className={innerContainer}>
                        <main>{children}</main>
                    </div>
                </div>
                <div>
                    <footer>
                        © MIKE J. MITCHELL {new Date().getFullYear()}, BUILT WITH
                        <a href="https://www.gatsbyjs.org" target="__blank" className={gatsbyLogo}>
                            <Img fluid={data.placeholderImage.childImageSharp.fluid} />
                        </a>
                    </footer>
                </div>
            </div>
        </LayoutProvider>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
    metaDescription: PropTypes.string.isRequired,
    metaTitle: PropTypes.string.isRequired,
    picData: PropTypes.string,
};

Layout.defaultProps = {
    picData: null,
};

export default Layout;
