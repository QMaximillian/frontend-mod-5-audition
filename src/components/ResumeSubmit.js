import React, { Component } from 'react'
import { connect } from 'react-redux'
import Resume from './Resume'
import { Link, Redirect } from 'react-router-dom'


class ResumeSubmit extends Component {

state = {
  redirect: false
}

mappedResumes = () => {
  return this.props.resumes.map(resume => {
    return <Resume key={resume.id} resume={resume}/>
  })
}

handleChange = (event) => {
  this.setState({
    [event.target.name]:event.target.value
  })
}

handleClick = (event) => {
  event.preventDefault()

  console.log(this.state);
  const concatCharacters = this.state.character1 + ", " + this.state.character2 + ", " + this.state.character3

  const concatShows = this.state.show1 + ", " + this.state.show2 + ", " + this.state.show3

  const concatTraining = this.state.training1 + ", " + this.state.training2

  const concatSkills = this.state.skills1 + ", " + this.state.skills2

  console.log({actor_id: this.props.currentActor.id, audition_id: this.props.match.params.id, shows: concatShows, training: concatTraining, characters: concatCharacters, skills: concatSkills})

  fetch('http://localhost:3001/api/v1/resumes', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify({
      actor_id: this.props.currentActor.id, audition_id: this.props.match.params.id, shows: concatShows, training: concatTraining, characters: concatCharacters, skills: concatSkills, default_resume: false
    })
  })

  this.setState({
     redirect: true
  })


}



   render(){
     if (this.state.redirect) {
       return <Redirect push to={`/audition/${this.props.match.params.id}/audition-confirmation`}/>
     } else {
     return (
        <div>
          {this.mappedResumes()}
          <div>

            <label>New Resume</label>
            <form onChange={this.handleChange}>

              <label>Character</label>
              <input
                name="character1">
              </input>

              <label>Show</label>
              <input
                name="show1">
              </input><br />

              <label>Character</label>
              <input
                name="character2">
              </input>

              <label>Show</label>
              <input
                name="show2">
              </input><br />

              <label>Character</label>
              <input
                name="character3">
              </input>

              <label>Show</label>
              <input
                name="show3">
              </input><br /><br />


              <label>Training</label>
              <input
                name="training1">
              </input>
              <label>Training</label>
              <input
                name="training2">
              </input><br />

              <label>Skills</label>
              <input
                name="skills1">
              </input>

              <label>Skills</label>
              <input
                name="skills2">
              </input><br />
            </form>
          </div>

          <button onClick={this.handleClick} type='submit'>Submit</button>

        </div>

     )
   }
 }
 }

 export default connect(state => ({ resumes: state.resumes, currentActor: state.currentActor }))(ResumeSubmit)
