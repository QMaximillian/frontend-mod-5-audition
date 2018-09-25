import React, { Component } from 'react'
// import { Link } from 'react-router-dom'


export default class Login extends Component {

  state = {
    first_name: "",
    last_name: "",
    password: ""
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]:event.target.value
    }, () => console.log(this.state))
  }

  render() {
    return(
    // <Link to='/actor/audition-home'>
    // </Link>
        <div>
          <label>First Name</label>
          <input
            name="first_name" onChange={this.handleChange}>
            </input>
          <label>Last Name</label>
          <input
            name="last_name"
            onChange={this.handleChange}>
          </input>
          <label>Password</label>
          <input
            name="password"
            onChange={this.handleChange}>
          </input>
          <button>Submit</button>
        </div>
    )
  }
}
