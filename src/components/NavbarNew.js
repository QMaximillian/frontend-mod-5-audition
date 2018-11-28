import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Navbar, NavItem, Nav, MenuItem, NavDropdown } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import '../Audition.css'

class NavbarNew extends Component {


render(){
  if (this.props.loggedIn) {
    return (
      <Navbar collapseOnSelect fluid fixedTop>
    <Navbar.Header>
      <Navbar.Brand>
        <Link to="/home">Audition</Link>
      </Navbar.Brand>
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav pullRight>
      <LinkContainer to="/search">
        <NavItem eventKey={1}>
          Search
        </NavItem>
      </LinkContainer>
      <NavDropdown eventKey={2} title="Me" id="basic-nav-dropdown">
        <LinkContainer to="#">
          <MenuItem eventKey={2.1}>Settings</MenuItem>
        </LinkContainer>
        <LinkContainer to="/actor/1">
          <MenuItem eventKey={2.2}>Profile</MenuItem>
        </LinkContainer>
        <LinkContainer to="/my-auditions">
          <MenuItem eventKey={2.3}>My Auditions</MenuItem>
        </LinkContainer>
      </NavDropdown>
      <LinkContainer to="/">
      {/* make loggedIn = false, and clear localStorage */}
      <MenuItem onClick={() => this.props.handleLogout()} eventKey={3.0}>Logout</MenuItem>
      </LinkContainer>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
    )
  } else {
    return (
      <Navbar collapseOnSelect fluid fixedTop>
    <Navbar.Header>
      <Navbar.Brand>
        <Link to="/">Audition</Link>
      </Navbar.Brand>
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav pullRight>
      <LinkContainer to="/login">
        <NavItem eventKey={1}>
          Login
        </NavItem>
      </LinkContainer>
      <LinkContainer to="/sign-up">
        <NavItem eventKey={2}>
          Sign Up
        </NavItem>
      </LinkContainer>
      <LinkContainer to="/about">
        <NavItem eventKey={3}>
          About
        </NavItem>
      </LinkContainer>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
    )
  }
 }
}




export default NavbarNew
