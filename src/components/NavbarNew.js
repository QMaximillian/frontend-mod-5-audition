import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../Audition.css'

class NavbarNew extends Component {


render(){
  return (
    <div className="header">
        <nav>
          <ul>
              <li><Link to="/">Audition</Link></li>
              <li><Link to="/search">Search</Link></li>
              <li><Link to="#">Settings</Link>
                <ul>
                  <li><Link to="/actor/1">Profile</Link></li>
                  <li><Link to="/my-auditions">My Auditions</Link></li>
                </ul>
              </li>
        </ul>
        </nav>
    </div>

  )
 }
}




export default NavbarNew
