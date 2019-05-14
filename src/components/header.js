import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Image from './image';

const Header = ({ siteTitle }) => (
  <header
    style={{
      backgroundColor: '#983939',
      marginBottom: `1.5rem`,
    }}
  >
    <div
      style={{
        display: 'flex',
        margin: `0 auto`,
        maxWidth: 960,
        padding: `0.5rem 1.0875rem`
      }}
    >
      <Image />
      <h1 style={{ margin: 0, fontSize: '2.2rem', lineHeight: '2.1rem' }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
