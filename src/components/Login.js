import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { Form, Grid, Header, Segment } from 'semantic-ui-react'
import { fetchLoginActor } from '../adapters/actorAdapter'
import '../Audition.css'


export default class Login extends Component {

  state = {
    actor: {
      email: "",
      password: ""
    },
    redirect: false
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
    .then(resp => {
      console.log(resp)
      this.props.handleLoginActor(resp)
    }).then(() => this.setState({
      redirect: true
    }))
  }


  render() {
    const { actor } = this.state

    if (this.state.redirect) return <Redirect push to={'/home'}/>
    
    return (
      <div style={{height: '100%'}}>
          <Grid textAlign='center' style={{height: '100%', 'paddingTop': '150px'}} verticalAlign='middle'>

            <Grid.Column width={6}>
            <Header>
              Login
            </Header>
              <Form size="large">
                <Segment stacked>
                <Form.Input
                  fluid
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
                    fluid
                    size="large"
                    color='yellow'
                    content="Login"
                    primary/>
                  </Segment>
              </Form>
              </Grid.Column>
          </Grid>
          </div>
          )
    }
}
