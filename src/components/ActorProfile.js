import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadInitialActorState, updateCurrentActorForm } from '../actions/actions'
import { fetchUpdateCurrentActor } from '../adapters/actorAdapter'




class ActorProfile extends Component {


  componentDidMount() {
    this.props.loadInitialActorState()
  }

  handleChange = (event) => {
    // this.props.updateCurrentActorForm({
    //   [event.target.name]: event.target.value
    // })
    // console.log([event.target.name], event.target.value)
  }



  updateActor = (event) => {
    event.preventDefault()

    const { first_name, last_name, email, height, vocal_range, equity, gender, birthday, ethnicity, city } = this.props.currentActor.attributes

      fetchUpdateCurrentActor(this.props.currentActor.id, {first_name: first_name, last_name: last_name, email: email, height: height, vocal_range: vocal_range, equity: equity, gender: gender, birthday: birthday, ethnicity: ethnicity, city: city }).then(data => console.log(data))
    }

      // ,
      // this.props.currentActor.first_name,
      // this.props.currentActor.last_name,
      // this.props.currentActor.email,
      // this.props.currentActor.height,
      // this.props.currentActor.vocal_range,
      // this.props.currentActor.equity,
      // this.props.currentActor.gender,
      // this.props.currentActor.birthday,
      // this.props.currentActor.ethnicity,
      // this.props.currentActor.city





  render() {




if (typeof this.props.currentActor.attributes === 'undefined') {
  return (
    <div>LOADING</div>
  )
} else {

  const { first_name, last_name, email, height, vocal_range, equity, gender, birthday, ethnicity, city } = this.props.currentActor.attributes


    return(
      <div>
        <form onSubmit={this.updateActor}>
          <label>First Name</label>
          <input
            name="first_name"
            onChange={this.handleChange}
            value={first_name}
            >
          </input>
          <label>Last Name</label>
          <input
            name="last_name"
            onChange={this.handleChange}
            value={last_name}
            >
          </input>
          <label>E-Mail</label>
          <input
            name="email"
            onChange={this.handleChange}
            value={email}
            >
          </input>
          <label>Height</label>
          <input
            name="height"
            onChange={this.handleChange}
            value={height}
            >
          </input>
          <label>Vocal Range</label>
          <input
            name="vocal_range"
            onChange={this.handleChange}
            value={vocal_range}
            >
          </input>
          <label>Equity</label>
          <select name="equity" onChange={this.handleChange}>
            <option
              value="true">True</option>
            <option
              value="false">False</option>
          </select>
          <label>Gender</label>
          <input
            name="gender"
            onChange={this.handleChange}
            value={gender}
            >
          </input>
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
              name="NYC" value="NYC"
              onChange={this.handleChange}>NYC
            </option>
          </select>
          <button type="submit">Save</button>

        </form>
      </div>
    )
  }
}
}


//
// const mapStateToProps = (state) => {
//
//   return {
//     currentActor: state.currentActor,
//     resumeFormData: state.resumeFormData
//   }
// }

export default connect(state => ({ currentActor: state.currentActor }), { loadInitialActorState, updateCurrentActorForm })(ActorProfile)
