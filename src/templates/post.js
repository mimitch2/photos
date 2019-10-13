import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import Layout from '../components/layout';
import postStyles from './post.module.scss';

const Post = ({ data }) => {
    const {
        slug, state, city, image,
    } = data.graphCMS.photos;
    const { container, pic } = postStyles;

    return (
        <Layout>
            <div className={container}>
                {`${slug} - ${city.name} - ${state ? state.name : ''}`}
                <Img
                    className={pic}
                    fluid={image.localFile.childImageSharp.fluid}
                    imgStyle={{ objectFit: 'contain' }}
                />
            </div>
        </Layout>
    );
};

Post.propTypes = {
    data: PropTypes.shape({
        graphCMS: PropTypes.shape({
            photos: PropTypes.shape({
                slug: PropTypes.string.isRequired,
                format: PropTypes.string.isRequired,
                city: PropTypes.shape({
                    name: PropTypes.string.isRequired,
                }),
                state: PropTypes.shape({
                    name: PropTypes.string,
                }),
                image: PropTypes.shape({
                    url: PropTypes.string,
                    localFile: PropTypes.shape({
                        childImageSharp: PropTypes.shape({
                            fluid: PropTypes.shape({}),
                        }),
                    }),
                }),
            }),
        }),
    }).isRequired,
};

export const pageQuery = graphql`
    query($id: ID) {
        graphCMS {
        photos(where: {id: $id}) {
            slug
            format
            city {
                name
            }
            state {
                name
            }
            image {
                url
                localFile {
                  childImageSharp {
                    fluid( quality: 100 ) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
            }
        }
    }
    }
`;

export default Post;
