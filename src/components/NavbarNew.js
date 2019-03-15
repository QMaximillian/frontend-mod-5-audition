import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Navbar, NavItem, Nav, MenuItem, NavDropdown } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import '../Audition.css'

class NavbarNew extends Component {


render(){
  if (this.props.loggedIn) {
    return (
      <Navbar collapseOnSelect fluid fixedTop inverse>
    <Navbar.Header>
      <Navbar.Brand>
        <Link to="/home">Audition</Link>
      </Navbar.Brand>
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav pullRight>
      <LinkContainer to="/search">
        <NavItem>
          Search
        </NavItem>
      </LinkContainer>
      <NavDropdown title="Me" id="basic-nav-dropdown">
        <LinkContainer to="#">
          <MenuItem>Settings</MenuItem>
        </LinkContainer>
        <LinkContainer to="/actor/1">
          <MenuItem>Profile</MenuItem>
        </LinkContainer>
        <LinkContainer to="/my-auditions">
          <MenuItem>My Auditions</MenuItem>
        </LinkContainer>
      </NavDropdown>
      <LinkContainer to="/">

      <MenuItem onClick={() => this.props.handleLogout()} eventKey={3.0}>Logout</MenuItem>
      </LinkContainer>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
    )
  } else {
    return (
      <Navbar collapseOnSelect fluid fixedTop inverse>
    <Navbar.Header>
      <Navbar.Brand>
        <Link to="/">Audition</Link>
      </Navbar.Brand>
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav pullRight>
      <LinkContainer to="/login">
        <NavItem>
          Login
        </NavItem>
      </LinkContainer>
      <LinkContainer to="/sign-up">
        <NavItem>
          Sign Up
        </NavItem>
      </LinkContainer>
      <LinkContainer to="/about">
        <NavItem>
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
