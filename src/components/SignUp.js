import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { Grid, Form, Header, Segment } from 'semantic-ui-react'
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

      const actor = 
      { 
        actor: { 
          first_name: this.state.firstName,
          last_name: this.state.lastName,
          email: this.state.email,
          password: this.state.password
        }
      }

       return (
         <div style={{height: '100%'}}>
             <Grid textAlign='center' style={{height: '100%', 'padding-top': '150px'}} verticalAlign='middle'>

               <Grid.Column width={6}>
               <Header>
                 Sign Up
               </Header>
               <Segment stacked>
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
                      onClick={() => fetchActorCreate(actor).then((resp) => {
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
                      fluid
                      size='large'
                      content="Sign Up"
                      primary/>
                  </Form>
                  </Segment>
                  </Grid.Column>
                  </Grid>
                  </div>
     )
   }
   }
 }
