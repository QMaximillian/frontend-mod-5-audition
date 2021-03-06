import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadInitialActorState, updateCurrentActorForm } from '../actions/actions'
import { fetchUpdateCurrentActor } from '../adapters/actorAdapter'
import { Loader, Form, Input, Select, Button, Grid } from 'semantic-ui-react'
import '../Audition.css'
import withAuth from '../hocs/withAuth'



class ActorProfile extends Component {

  state = {
    success: false
  }

  handleChange = (event) => {
    event.persist();
    if (event.name) {
      this.props.updateCurrentActorForm({
        [event.name]: event.value
      })
    } else {
      this.props.updateCurrentActorForm({
        [event.target.name]: event.target.value
      })
    }
  }


  updateActor = (event) => {
    event.preventDefault()

    const { first_name, last_name, email, height, vocal_range, equity, gender, birthday, city } = this.props.currentActor.attributes

      fetchUpdateCurrentActor(this.props.currentActor.id, {first_name, last_name, email, height, vocal_range, equity, gender, birthday, city }).then(
        this.setState({ success: !this.state.success }, () => {
          alert('Profile Saved')
          this.setState({ success: !this.state.success })
        })
      )
    }


  render() {

    const { first_name, last_name, email, feet, inches, vocal_range, equity, gender, birthday } = this.props.currentActor.attributes

    const booleans = [
      { key: 'true', text: "True", value: true },
      { key: 'false', text: "False", value: false }
    ]

    const genders = [
      {key: 'female', text: "Female", value: "Female"},
      {key: 'male', text: "Male", value: "Male"},
      {key: 'Transgender', text: "Transgender", value: "transgender"}
    ]

  if (typeof this.props.currentActor.attributes === 'undefined') return <Loader active inline='centered' />

      return (
        <div className="profile-card">
          <div style={{textAlign: 'center', fontSize: '2rem'}}>
            {first_name}'s Profile
          </div>

          <Grid container style={{'padding-top': '100px'}}>
            <Grid.Row centered>
              <Grid.Column >
              <Form
                onSubmit={this.updateActor}>

                <Form.Field
                  control={Input}
                  width={12}
                  name="first_name"
                  onChange={this.handleChange}
                  value={first_name}
                  color="orange"
                  label='First Name'/>

                <Form.Field
                  control={Input}
                  width={12}
                  name="last_name"
                  onChange={this.handleChange}
                  value={last_name}
                  label='Last Name'/>

                <Form.Field
                  control={Input}
                  width={12}
                  name="email"
                  onChange={this.handleChange}
                  value={email}
                  label='E-Mail'/>

                <Form.Field
                  control={Input}
                  width={12}
                  name="feet"
                  onChange={this.handleChange}
                  value={feet}
                  placeholder="Feet"
                  label='Feet'/>

                <Form.Field
                  control={Input}
                  width={12}
                  name="inches"
                  onChange={this.handleChange}
                  value={inches}
                  placeholder="Inches"
                  label='Inches'/>

                <Form.Field
                  control={Input}
                  width={12}
                  name="vocal_range"
                  onChange={this.handleChange}
                  value={vocal_range}
                  label='Vocal Range'/>

                <Form.Select
                  control={Select}
                  width={12}
                  name="equity"
                  onChange={(event, state) => this.handleChange(state)}
                  label='Equity'
                  options={booleans}
                  value={equity}
                  />

                <Form.Field
                  control={Select}
                  width={12}
                  name="gender"
                  onChange={(event, state) => this.handleChange(state)}
                  value={gender}
                  options={genders}
                  label='Gender'
                />

                <Form.Field
                control={Input}
                width={12}
                name="birthday"
                onChange={this.handleChange}
                value={birthday}
                placeholder="YYYY-MM-DD"
                label='Birthday'/>

                <br />

                <Button type="submit">Save</Button>
              </Form>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      )
    }
  }


export default withAuth(connect(state => ({ currentActor: state.currentActor }), { loadInitialActorState, updateCurrentActorForm })(ActorProfile))
