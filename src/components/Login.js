import React, { Component } from 'react'
// import { Redirect } from 'react-router-dom'
import { Form, Grid, Container} from 'semantic-ui-react'
import { fetchLoginActor } from '../adapters/actorAdapter'
import '../Audition.css'


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
    })
    }

  handleLoginSubmit = (event) => {
    event.preventDefault()
    fetchLoginActor(this.state.actor)
  }

  // handleSignUp = (event) => {
  //   event.
  // }

  render() {

    const { actor } = this.state
    return(
    // <Link to='/actor/audition-home'>
    // </Link>
    <div>
    <Grid>

      <Container className="container">
          <Form>
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
                  onClick={this.handleLoginSubmit}
                  content="Log In"
                  primary/>
            </Form>
      </Container>
    </Grid>

      </div>
    )
  }
}
