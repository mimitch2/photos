import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import _ from 'lodash';
import Layout from '../components/layout';
import postStyles from './post.module.scss';

const Post = ({ data }) => {
    const {
        state, city, image,
    } = data.graphCMS.photos;
    const { pic } = postStyles;

    return (
        <Layout>
            <p style={{ textAlign: 'center', marginLeft: '80px' }}>
                {_.toUpper(`${city.name}  ${state ? `, ${state.name}` : ''}`)}
            </p>
            <Img
                className={pic}
                fluid={image.localFile.childImageSharp.fluid}
                imgStyle={{ objectFit: 'contain' }}
            />
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
                        ...GatsbyImageSharpFluid_withWebp_noBase64
                    }
                  }
                }
            }
        }
    }
    }
`;

export default Post;
