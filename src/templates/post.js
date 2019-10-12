import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import Layout from '../components/layout';

const Post = ({ data }) => {
    const {
        slug, state, city, image,
    } = data.graphCMS.photos;
    console.log('TCL: Post -> image', image);
    return (
        <Layout>
            <div style={{ maxWidth: 1200, margin: '0 auto' }}>
                {`${slug} - ${city.name} - ${state ? state.name : ''}`}
                <Img fluid={image.localFile.childImageSharp.fluid} />
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
                    fluid( maxWidth: 1024, quality: 100 ) {
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
