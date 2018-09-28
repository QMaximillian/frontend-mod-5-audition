import React, { Component } from 'react'
import { connect } from 'react-redux'
import Resume from './Resume'
import { Redirect } from 'react-router-dom'


class ResumeSubmit extends Component {

state = {
  redirect: false,
  characterChildren: 0,
  trainingChildren: 0,
  skillChildren: 0
}

// mappedResumes = () => {
//   return this.props.resumes.map(resume => {
//     return <Resume key={resume.id} resume={resume}/>
//   })
// }

handleChange = (event) => {
  this.setState({
    [event.target.name]:event.target.value
  })
}

onAddChild = (event) => {
  event.persist()
  event.preventDefault()
  this.setState(prevState => {
    return {
      [event.target.name]: ++event.target.value
    }
  },()=> console.log(this.state.trainingChildren))
}

handleClick = (event) => {
  event.preventDefault()

  // console.log(this.state);
  const concatCharacters = this.state.character1 + ", " + this.state.character2 + ", " + this.state.character3

  const concatShows = this.state.show1 + ", " + this.state.show2 + ", " + this.state.show3

  const concatTraining = this.state.training1 + ", " + this.state.training2

  const concatSkills = this.state.skills1 + ", " + this.state.skills2

  // console.log({actor_id: this.props.currentActor.id, audition_id: this.props.match.params.id, shows: concatShows, training: concatTraining, characters: concatCharacters, skills: concatSkills})

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

    //Created arrays for each input
     const characters = []
     const show = []
     const training = []
     const skills = []
     console.log(training)
     console.log(skills)

// For loop to instantiate new inputs for character and show values
  //and add  them to the array to display on the page
    for (let i = 0; i < this.state.characterChildren; i++) {
      characters.push(<input
      name={`character${i}`}
      onChange={(event) => this.handleChange(event)} key={this.props.currentActor.id + `character${i}`}/>)

      show.push(<input
      name={`show${i}`}
      onChange={(event) => this.handleChange(event)} key={i}/>)
    }


    for (let i = 0; i < this.state.trainingChildren; i++) {
      training.push(<input
      name={`training${i}`}
      onChange={(event) => this.handleChange(event)} key={i}/>)
    }

    for (let i = 0; i < this.state.skillChildren; i++) {
      training.push(<input
      name={`character${i}`}
      onChange={(event) => this.handleChange(event)} key={i}/>)
    }



    // console.log(this.state.character1);

     if (this.state.redirect) {
       return <Redirect push to={`/audition/${this.props.match.params.id}/audition-confirmation`}/>
     } else {
     return (
        <div>
          {/* {this.mappedResumes()} */}
          <div>

            <label>New Resume</label>
            <form onChange={this.handleChange}>


              <label>Character</label>

              {characters}

              <label>Show</label>
              <button
                onClick={event => this.onAddChild(event)}
                name="characterChildren">
                +
              </button>

              {show}

              <label>Training</label>
              <button
                onClick={event => this.onAddChild(event)}
                name="trainingChildren">
                +
              </button>

              {training}

              <label>Skills</label>
              <button
                onClick={event => this.onAddChild(event)}
                name="skillChildren">
                +
              </button>

              {training}





              {/* <label>Character</label>
              <input
                name="character1">
              </input> */}

              {/* <label>Show</label>
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
              </input><br /> */}
            </form>
          </div>

          <button onClick={this.handleClick} type='submit'>Submit</button>

        </div>

     )
   }
 }
 }

 export default connect(state => ({ resumes: state.resumes, currentActor: state.currentActor }))(ResumeSubmit)
