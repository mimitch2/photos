import React from 'react';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';
import _ from 'lodash';
import PropTypes from 'prop-types';
import Layout from '../components/layout';
import SEO from '../components/seo';
import indexStyles from './index.module.scss';

const IndexPage = ({ data }) => {
    const { edges } = data.graphCMS.allPhotoPost;
    const { container, imageDiv, camera } = indexStyles;

    return (
        <Layout>
            <SEO title="Home" />
            <div className={container}>
                {
                    _.map(edges, (edge) => {
                        const { image, slug } = edge.node;

                        return (
                            <div>
                                <div className={imageDiv}>
                                    <Link to={`/post/${slug}`}>
                                        <Img fluid={image.localFile.childImageSharp.fluid} key={image.url} />
                                    </Link>
                                </div>
                            </div>

                        );
                    })
                }
            </div>
        </Layout>
    );
};
export const pageQuery = graphql`
  query {
    graphCMS {
      allPhotoPost: photosesConnection {
        edges {
          node {
            image {
              url
              localFile {
                childImageSharp {
                  fluid(maxWidth: 240) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
            id
            slug
          }
        }
      }
    }
  }
`;

IndexPage.propTypes = {
    data: PropTypes.shape({
        graphCMS: PropTypes.shape({
            allPhotoPost: PropTypes.shape({
                edges: PropTypes.arrayOf(PropTypes.shape({
                    image: PropTypes.shape({
                        url: PropTypes.string,
                        localFile: PropTypes.shape({
                            childImageSharp: PropTypes.shape({}),
                        }),
                    }),
                })),
            }),
        }),


    }).isRequired,
};
export default IndexPage;
