import React from 'react';
import { Link, navigate } from 'gatsby';
import Camera from '../assets/camera-retro-light.svg';
import Mail from '../assets/envelope-light.svg';
import Info from '../assets/info-circle-light.svg';
import Instagram from '../assets/instagram-brands.svg';
import sideBarStyles from './sideBar.module.scss';

const Sidebar = () => {
    const { container, cameraIcon, icon } = sideBarStyles;

    return (
        <div className={container}>
            <span
                className={cameraIcon}
                role="button"
                tabIndex="0"
                onKeyDown={(e) => {
                    if (e.keyCode === 13 || e.keyCode === 32) {
                        navigate('/');
                    }
                }}
                onMouseDown={(e) => {
                    e.preventDefault();
                    navigate('/');
                }}
            >
                <Camera className={icon} />
            </span>
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
