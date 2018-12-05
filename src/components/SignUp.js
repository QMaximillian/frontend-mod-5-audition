import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { Grid, Container, Form } from 'semantic-ui-react'
import { fetchActorCreate } from '../adapters/actorAdapter'

export default class SignUp extends Component {

  state = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    redirect: false
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    }, () => console.log(this.state))
  }


   render() {
     if (this.state.redirect) {
       return <Redirect to='/'/>
     } else {
     return (
                <Form>
                  <div style={{textAlign: 'center'}}>
                    Please enter sign up info
                  </div>
                  <Form.Input
                    name="firstName"
                    onChange={this.handleChange}
                    value={this.state.firstName}
                    label="First Name"/>
                  <Form.Input
                    name="lastName"
                    onChange={this.handleChange}
                    value={this.state.lastName}
                    label="Last Name"/>
                  <Form.Input
                    name="email"
                    onChange={this.handleChange}
                    value={this.state.email}
                    label="E-Mail"/>

                  <Form.Input
                    type="password"
                    name="password"
                    onChange={this.handleChange}
                    value={this.state.password}
                    label="Password"/>

                    <Form.Button
                      onClick={() => fetchActorCreate(this.state.firstName, this.state.lastName, this.state.email, this.state.password).then((resp) => {
                          if (resp && resp.actor) {
                            window.alert("Success!")
                            this.setState({
                              redirect: true
                            })
                          } else {
                            window.alert("Not Valid Sign Up Credentials")
                          }
                        })
                      }
                      content="Sign Up"
                      primary/>
                  </Form>
     )
   }
   }
 }
