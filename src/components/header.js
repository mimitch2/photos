import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Camera from '../assets/camera-retro-light.svg'
import headerStyles from './header.module.scss'
import _ from 'lodash';

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
            <Camera style={{width: 30, fontWeight: 200, margin: '8px 13px 0 0'}} />
            <h1 style={{ margin: 0, textAlign: 'center', }}>
            {_.toUpper(siteTitle)}
            </h1>

          </Link>
      </header>
  )

};

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
