import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../Audition.css'

class NavbarNew extends Component {




render(){
  return (
      <div className="header">
        <nav>
          <ul>
              <Link to="/">Audition</Link>
              <span style={{textAlign: "right"}}>
              <Link to="/search">Search</Link>
            <li class="sub-menu-parent">
              <Link to="#">Settings</Link>
              <ul class="sub-menu">
                <Link to="/actor/1">Profile</Link>
                <Link to="/my-auditions">My Auditions</Link>
              </ul>
            </li>
          </span>
          </ul>
          </nav>
          </div>
  )
 }
}




export default NavbarNew
