import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadInitialActorState, updateCurrentActorForm } from '../actions/actions'
import { fetchUpdateCurrentActor } from '../adapters/actorAdapter'
import { Loader, Form, Input, Select, Button, Grid } from 'semantic-ui-react'
// import moment from 'moment'
import '../Audition.css'



class ActorProfile extends Component {

  state = {
    success: false
  }
  componentDidMount() {
    this.props.loadInitialActorState()
  }

  handleChange = (event) => {
    if (event.name) {
      console.log("Dropdown State");
      this.props.updateCurrentActorForm({
        [event.name]: event.value
      })
    } else {
    event.persist()
    this.props.updateCurrentActorForm({
      [event.target.name]: event.target.value
    })
    }
  }

  saveAlert = () => {

  }



  updateActor = (event) => {
    event.preventDefault()

    const { first_name, last_name, email, height, vocal_range, equity, gender, birthday, city } = this.props.currentActor.attributes

      fetchUpdateCurrentActor(this.props.currentActor.id, {first_name: first_name, last_name: last_name, email: email, height: height, vocal_range: vocal_range, equity: equity, gender: gender, birthday: birthday, city: city }).then(
        this.setState({
            success: true
        })
      )
    }




  render() {

    const booleans = [
      { key: 'true', text: "True", value: true },
      { key: 'false', text: "False", value: false }
    ]

    const genders = [
      {key: 'female', text: "Female", value: "Female"},
      {key: 'male', text: "Male", value: "Male"}
    ]

  if (typeof this.props.currentActor.attributes === 'undefined') {
    return (
      <div><Loader active inline='centered' /></div>
    )
  } else {
// city
    const { first_name, last_name, email, height, vocal_range, equity, gender, birthday } = this.props.currentActor.attributes

      return(
        <div className="profile-card">
          <div style={{textAlign: 'center', fontSize: '2rem'}}>
            {first_name}'s Profile
          </div>

            <Grid>
          <Grid.Row centered>
          <Grid.Column >
          <Form
            centered
            onSubmit={this.updateActor}>
              <div>
            <Form.Field
              control={Input}
              width={6}
              name="first_name"
              onChange={this.handleChange}
              value={first_name}
              color="orange"
              label='First Name'/>


            <Form.Field
              control={Input}
              width={6}
              name="last_name"
              onChange={this.handleChange}
              value={last_name}
              label='Last Name'/>
              </div>

            <Form.Field
              control={Input}
              width={6}
              name="email"
              onChange={this.handleChange}
              value={email}
              label='E-Mail'/>

            <Form.Field
              control={Input}
              width={6}
              name="height"
              onChange={this.handleChange}
              value={height}
              placeholder="Height in inches"
              label='Height'/>



            <Form.Field
              control={Input}
              width={6}
              name="vocal_range"
              onChange={this.handleChange}
              value={vocal_range}
              label='Vocal Range'/>

            <Form.Select
              control={Select}
              width={6}
              name="equity"
              onChange={(event, state) => this.handleChange(state)}
              label='Equity'
              options={booleans}
              value={equity}
              />

              <Form.Field
                control={Select}
                width={6}
                name="gender"
                onChange={(event, state) => this.handleChange(state)}
                value={gender}
                options={genders}
                label='Gender'
              />

                <Form.Field
                control={Input}
                width={6}
                name="birthday"
                onChange={this.handleChange}
                value={birthday}
                placeholder="YYYY-MM-DD"
                label='Birthday'/>


              {/* <Form.Field
                control={Input}
                width={4}
                name="ethnicity"
                onChange={this.handleChange}
                value={ethnicity}
                label='Ethnicity'/> */}
            <br />

            <Button type="submit">Save</Button>
          </Form>
        </Grid.Column>
     </Grid.Row>
 </Grid>

          <div className={this.state.success ? 'fadeIn' : 'fadeOut'}>Saved</div>

          {/* {this.state.success ?  : <div></div>} */}
        </div>
      )
    }
  }
}

export default connect(state => ({ currentActor: state.currentActor }), { loadInitialActorState, updateCurrentActorForm })(ActorProfile)
