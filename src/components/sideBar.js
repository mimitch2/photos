import React from 'react';
import { Link } from 'gatsby';
import Camera from '../assets/camera-retro-light.svg';
import Mail from '../assets/envelope-light.svg';
import Info from '../assets/info-circle-light.svg';
import Instagram from '../assets/instagram-brands.svg';
import sideBarStyles from './sideBar.module.scss';

const Sidebar = () => {
    const { container, icon } = sideBarStyles;

    return (
        <div className={container}>
            <Link to="/">
                <Camera className={icon} />
            </Link>
            <Link to="/about">
                <Info className={icon} />
            </Link>
            <a href="https://www.instagram.com/mimitch/" target="__blank">
                <Instagram className={icon} />
            </a>
            <a href="mailto: mimitch@mac.com">
                <Mail className={icon} />
            </a>

        </div>
    );
};

export default Sidebar;
