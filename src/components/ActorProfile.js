import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadActor, updateResumeForm } from '../actions/actions'




class ActorProfile extends Component {


  componentDidMount() {
    this.props.loadActor()
  }

  handleChange = (event) => {
    console.log(event.target.value);
    // this.props.updateResumeForm({
    //   [event.target.name]: event.target.value
    // })
  }

  render() {
    console.log(this.props);
    const { first_name, last_name, email, height, vocal_range, equity, gender, birthday, ethnicity, city } = this.props.currentActor
    return(
      <div>
        <input
          name="firstName"
          onChange={this.handleChange}
          value={first_name}
          >
        </input>
        <input
          name="lastName"
          onChange={this.handleChange}
          value={last_name}
          >
        </input>
        <input
          name="email"
          onChange={this.handleChange}
          value={email}
          >
        </input>

      </div>
    )
  }
}



const mapStateToProps = (state) => {

  return {
    currentActor: state.currentActor,
    resumeFormData: state.resumeFormData
  }
}

export default connect(mapStateToProps, { loadActor, updateResumeForm })(ActorProfile)
