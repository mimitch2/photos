/* eslint-disable no-undef */
import {
    useStaticQuery, graphql, navigate,
} from 'gatsby';
import PropTypes from 'prop-types';
import React, { useEffect, useContext } from 'react';
import _ from 'lodash';
import Img from 'gatsby-image';
import Chevron from '../assets/chevron-left-regular.svg';
import headerStyles from './header.module.scss';
import LayoutContext from '../context/layoutContext';

const Header = ({ picData }) => {
    const {
        container, icon, backLink, hiddenBackLink, back, title, pic,
    } = headerStyles;
    const { isPost, setIsPost } = useContext(LayoutContext);

    const data = useStaticQuery(graphql`
    query imageQuery {
      placeholderImage: file(relativePath: { eq: "camera-512.png" }) {
        childImageSharp {
          fluid(maxWidth: 100,) {
            ...GatsbyImageSharpFluid
        }
        }
      }
    }
  `);

    useEffect(() => {
        const isItPost = _.includes(window.location.pathname, 'post');

        if (isItPost) {
            setTimeout(() => {
                setIsPost(true);
            }, 5);
        }
    }, []);

    const nav = () => {
        if (isPost) {
            setIsPost(false);
            setTimeout(() => {
                navigate('/');
            }, 150);
        } else {
            navigate('/');
        }
    };

    return (
        <header
            className={container}
        >
            <div className={isPost ? backLink : hiddenBackLink}>
                <span
                    role="button"
                    tabIndex="0"
                    onKeyDown={(e) => {
                        if (e.keyCode === 13 || e.keyCode === 32) {
                            nav();
                        }
                    }}
                    onMouseDown={(e) => {
                        e.preventDefault();
                        nav();
                    }}
                    className={back}
                >
                    <Chevron className={icon} />
                </span>
                <h4>{picData}</h4>
            </div>

            <span
                role="button"
                tabIndex="0"
                onKeyDown={(e) => {
                    if (e.keyCode === 13 || e.keyCode === 32) {
                        nav();
                    }
                }}
                onMouseDown={(e) => {
                    e.preventDefault();
                    nav();
                }}
                className={title}
            >
                <Img
                    fluid={data.placeholderImage.childImageSharp.fluid}
                    className={pic}
                />
                <h2 style={{ margin: 0, textAlign: 'center' }}>
                    MIKE MITCHELL
                </h2>
            </span>
        </header>
    );
};

Header.propTypes = {
    picData: PropTypes.string,
};

Header.defaultProps = {
    picData: null,
};


export default Header;
