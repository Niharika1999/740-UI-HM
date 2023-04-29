import React from 'react'
import PropTypes from 'prop-types'
// CSS
import classes from './Navbar.module.css'

const NavBar = (props) => {
  const navbarStyle = {
    color: '#fff', // set text color to white
    borderBottom: '1px solid #fff' // add a white border at the bottom of the navbar
  }

  const linksStyle = {
    borderBottom: '#fff' // add a white border at the bottom of the links
  }

  return (
    <nav className={classes.Container} style={navbarStyle}>
      <span className={classes.Main}>Hotel Name</span>
      <div className={classes.Links} style={linksStyle}>
        <span>Home</span>
        <span >Link A</span>
        <span>Link B</span>
      </div>
      {props.children}
    </nav>
  )
}

NavBar.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ])
}

export default NavBar
