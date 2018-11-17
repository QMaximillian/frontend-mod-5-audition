import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../Audition.css'

class NavbarNew extends Component {




render(){
  return (
      <div className="header">
        <div className="nav-grid">
          <Link to="/">Audition</Link>
          <Link to="/search">Search</Link>

        </div>

        <nav>
          <ul>
            <li class="sub-menu-parent" tab-index="0">
              <Link to="#">Settings</Link>
          <ul class="sub-menu">
             <Link to="/actor/1">Profile</Link>
             <Link to="/my-auditions">My Auditions</Link>
          </ul>
            </li>
            </ul>
            </nav>

      </div>


  )
 }
}




export default NavbarNew
