import React, { Component } from 'react'
import { Grid, Container, Form } from 'semantic-ui-react'

export default class SignUp extends Component {

  state = {

  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    }, () => console.log(this.state))
  }

  handleSignUp = () => {
    return fetch('http://localhost:3001/api/v1/actors', {
method: 'POST',
headers: {
  'Content-Type': 'application/json',
  Accept: 'application/json'
},
body: JSON.stringify({
  actor: {
    first_name: this.state.firstName,
    last_name: this.state.lastName,
    email: this.state.email,
    password: this.state.password
  }
})
})
.then(r => r.json()).then(console.log)
// .then(console.log)
  }

   render() {
     return (
        <div>
          <Grid>

            <Container>
                <Form centered>
                  <div style={{textAlign: 'center'}}>
                    Please enter sign up info
                  </div>
                  <Form.Input
                    name="firstName"
                    onChange={this.handleChange}
                    // value={actor.email}
                    label="First Name"/>
                  <Form.Input
                    name="lastName"
                    onChange={this.handleChange}
                    // value={actor.email}
                    label="Last Name"/>
                  <Form.Input
                    name="email"
                    onChange={this.handleChange}
                    // value={actor.email}
                    label="E-Mail"/>

                  <Form.Input
                    type="password"
                    name="password"
                    onChange={this.handleChange}
                    // value={actor.password}
                    label="Password"/>

                    <Form.Button
                      onClick={this.handleSignUp}
                      content="Sign Up"
                      primary/>
                  </Form>
            </Container>
          </Grid>
        </div>
     )
   }
 };
