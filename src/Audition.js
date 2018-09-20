import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './Audition.css';


class Audition extends Component {
  render() {
    return (
      <div>
        <Link to="/login">
          <button>Go to Login</button>
        </Link>
      </div>
    );
  }
}

export default Audition;
