import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const Navbar = (props) => {
  return(
    <div>
      <ul>
        <Link to='/home'>
          <li>
            Home
          </li>
        </Link>
        <Link to='/auditions'>
          <li>
            My Auditions
          </li>
        </Link>
        <Link to='/find-auditions'>
          <li>
            Find Auditions
          </li>
        </Link>
        <Link to="/actor/audition-journals">
          <li>
            Audition Journals
          </li>
        </Link>
        {/* if logged in, show this*/}
        <Link to='/actor/:id'>
          <li>
            Profile
          </li>
        </Link>
      </ul>
    </div>
  )
}

const mapStateToProps = (state) => {
  console.log(state);
}

export default connect(mapStateToProps)(Navbar)
