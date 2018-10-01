import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadInitialActorState, updateCurrentActorForm } from '../actions/actions'
import { fetchUpdateCurrentActor } from '../adapters/actorAdapter'
import { Loader, Form, Input, Select, Button } from 'semantic-ui-react'
import '../Audition.css'


const options = [
  { text: 'True', value: true },
  { text: 'False', value: false },
]

class ActorProfile extends Component {


  componentDidMount() {
    this.props.loadInitialActorState()
  }

  handleChange = (event) => {
    this.props.updateCurrentActorForm({
      [event.target.name]: event.target.value
    })
    console.log([event.target.name], event.target.value)
  }



  updateActor = (event) => {
    event.preventDefault()

    const { first_name, last_name, email, height, vocal_range, equity, gender, birthday, ethnicity, city } = this.props.currentActor.attributes

      fetchUpdateCurrentActor(this.props.currentActor.id, {first_name: first_name, last_name: last_name, email: email, height: height, vocal_range: vocal_range, equity: equity, gender: gender, birthday: birthday, ethnicity: ethnicity, city: city }).then(data => console.log(data))
    }



  render() {
  if (typeof this.props.currentActor.attributes === 'undefined') {

    return (
      <div><Loader active inline='centered' /></div>
    )

  } else {

    const { first_name, last_name, email, height, vocal_range, equity, gender, birthday, ethnicity, city } = this.props.currentActor.attributes


    // {display: "flex",       justifyContent: "center",
    //   alignItems:"center",
    // backgroundImage: "linear-gradient(to bottom right, red, yellow)"}
      return(
        <div className="sitelayout">
          <Form
            onSubmit={this.updateActor}>
            <Form.Field
              className="input-shadow"
              control={Input}
              width={4}
              name="first_name"
              onChange={this.handleChange}
              value={first_name}
              color="orange"
              label='First Name'/>
            <Form.Field
              control={Input}
              width={4}
              name="last_name"
              onChange={this.handleChange}
              value={last_name}
              label='Last Name'/>
            <Form.Field
              control={Input}
              width={4}
              name="email"
              onChange={this.handleChange}
              value={email}
              label='E-Mail'/>
            <Form.Field
              control={Input}
              width={4}
              name="height"
              onChange={this.handleChange}
              value={height}
              label='Height'/>
            <Form.Field
              control={Input}
              width={4}
              name="vocal_range"
              onChange={this.handleChange}
              value={vocal_range}
              label='Vocal Range'/>

            <Form.Select
              control={Select}
              name="equity"
              onChange={this.handleChange}
              label='Equity'
              options={options}
              value={equity}/>

            <label>Equity</label>
            <select
              name="equity"
              value={equity}
              onChange={this.handleChange}>
              <option
                value="true">True</option>
              <option
                value="false">False</option>
            </select>

            {/* <Form.Field
              control={Select}
              width={4}
              name="gender"
              onChange={this.handleChange}
              value={gender}
              label='Gender'/> */}

            <label>Gender</label>
            <select
              name="gender"
              value={gender}
              onChange={this.handleChange}>
              <option
                value="Male">Male</option>
              <option
                value="Female">Female</option>
              </select>


            <label>Birthday</label>
            <input
              name="birthday"
              onChange={this.handleChange}
              value={birthday}
              >
            </input>
            <label>Ethnicity</label>
            <input
              name="ethnicity"
              onChange={this.handleChange}
              value={ethnicity}
              >
            </input>
            <select>
              <option
                name="NYC"
                value={city}
                onChange={this.handleChange}>NYC
              </option>
            </select>
            <Button type="submit">Save</Button>
          </Form>
        </div>
      )
    }
  }
}

/* <label>First Name</label>
<input
  name="first_name"
  onChange={this.handleChange}
  value={first_name}
  >
</input> */

export default connect(state => ({ currentActor: state.currentActor }), { loadInitialActorState, updateCurrentActorForm })(ActorProfile)
