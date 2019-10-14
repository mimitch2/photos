import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import _ from 'lodash';
import Camera from '../assets/camera-retro-light.svg';
import headerStyles from './header.module.scss';

const Header = ({ siteTitle }) => {
    const { container, link } = headerStyles;
    return (
        <header
            className={container}
        >
            <Link
                to="/"
                className={link}
            >
                <Camera style={{ width: 24, margin: '8px 13px 0 0' }} />
                <h2 style={{ margin: 0, textAlign: 'center' }}>
                    {_.toUpper(siteTitle)}
                </h2>

            </Link>
        </header>
    );
};

Header.propTypes = {
    siteTitle: PropTypes.string,
};

Header.defaultProps = {
    siteTitle: '',
};

export default Header;
