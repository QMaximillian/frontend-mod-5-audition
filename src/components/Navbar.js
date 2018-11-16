import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'
// import { connect } from 'react-redux'



class Navbar extends Component {

  state = {

  }

handleItemClick = (e, { name }) => this.setState({ activeItem: name })

render(){
  const { activeItem } = this.state

  return (
    <Menu style={{textAlign: "center"}} className="">
      <Menu.Item
        as={ Link }
        name='Audition'
        to='/'
        active={activeItem === 'home'} onClick={this.handleItemClick}>
      </Menu.Item>
      <Menu.Item
        as={ Link }
        name='Find Auditions'
        to='/find-auditions'
        active={activeItem === 'find-auditions'} onClick={this.handleItemClick}>
      </Menu.Item>
      <Menu.Item
        as={ Link }
        name='My Auditions'
        to='/my-auditions'
        active={activeItem === 'my-auditions'} onClick={this.handleItemClick}>
      </Menu.Item>
      {/* <Menu.Item
        as={ Link }
        name='Audition Journals'
        to='/actor/audition-journals'
        active={activeItem === 'audition-journals'} onClick={this.handleItemClick}>
        Audition Journals
      </Menu.Item> */}
      <Menu.Item
        as={ Link }
        name='My Profile'
        to='/actor/1'
        active={activeItem === 'profile'} onClick={this.handleItemClick}>
        My Profile
      </Menu.Item>
      <Menu.Item
        as={ Link }
        name='Find Theaters'
        to='/theaters'
        active={activeItem === 'theaters'} onClick={this.handleItemClick}>
        Find Theaters
      </Menu.Item>
      </Menu>
  )
 }
}




export default Navbar
