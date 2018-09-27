import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { Input, Form, Grid, Button, Container, Segment } from 'semantic-ui-react'
import { fetchLoginActor } from '../adapters/actorAdapter'


export default class Login extends Component {

  state = {
    actor: {
      email: "",
      password: ""
    }
  }

  handleChange = (event) => {
    event.persist()
    this.setState(prevState => {
      return {
        actor: {
          ...prevState.actor,
          [event.target.name]:event.target.value
        }
      }
    }, () => console.log(this.state.actor))
    }

  handleSubmit = (event) => {
    event.preventDefault()
    console.log(event);
    fetchLoginActor(this.state.actor)
  }

  render() {

    const { actor } = this.state
    return(
    // <Link to='/actor/audition-home'>
    // </Link>
    <div>
    <Grid>
      
      <Container>
          <Form centered>
              <Form.Input
                name="email"
                onChange={this.handleChange}
                value={actor.email}
                label="Enter E-Mail"/>
              <Form.Input
                type="password"
                name="password"
                onChange={this.handleChange}
                value={actor.password}
                label="Enter Password"/>

                <Form.Button
                  onClick={this.handleSubmit}
                  content="Log In"
                  primary/>
                <Form.Button
                  content="Sign Up"
                  />
            </Form>
      </Container>
    </Grid>

      </div>
    )
  }
}
