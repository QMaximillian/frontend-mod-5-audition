import React, { Component } from 'react'
import { connect } from 'react-redux'
// import Resume from './Resume'
import { Redirect } from 'react-router-dom'
import { Button, Input, Form } from 'semantic-ui-react'
import '../Audition.css'

class ResumeSubmit extends Component {

state = {
  redirect: false,
  characterChildren: 0,
  trainingChildren: 0,
  skillChildren: 0
}

handleChange = (event) => {
  this.setState({
    [event.target.name]:event.target.value
  }, ()=> console.log(this.state))
}


handleClick = (event) => {
  event.preventDefault()

  // console.log(this.state);
  const concatCharacters =   this.state.character1 + ", " + this.state.character2 + ", " + this.state.character3

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
          <div className="card">
            <div>
              <label style={{textAlign: 'center'}}><br/>
                Add any performance, training, and skills information
              </label><br/>
              <Form centered>
              <label style={{padding: '10px'}}>Character</label>
              <Input
                onChange={(event) => this.handleChange(event)}
                name="character1">
              </Input>

               <label style={{padding: '10px'}}>Show</label>
              <Input
                onChange={(event) => this.handleChange(event)}
                name="show1">
              </Input><br /><br />

              <label style={{padding: '10px'}}>Character</label>
              <Input
                onChange={(event) => this.handleChange(event)}
                name="character2">
              </Input>

              <label style={{padding: '10px'}}>Show</label>
              <Input
                onChange={(event) => this.handleChange(event)}
                name="show2">
              </Input><br /><br />

              <label style={{padding: '10px'}}>Character</label>
              <Input
                onChange={(event) => this.handleChange(event)}
                name="character3">
              </Input>

              <label style={{padding: '10px'}}>Show</label>
              <Input
                onChange={(event) => this.handleChange(event)}
                name="show3">
              </Input><br /><br /><br /><br />


              <label style={{padding: '10px'}}>Training</label>
              <Input
                onChange={(event) => this.handleChange(event)}
                name="training1">
              </Input><br /><br />
              <label style={{padding: '10px'}}>Training</label>
              <Input
                onChange={(event) => this.handleChange(event)}
                name="training2">
              </Input><br /><br />

              <label style={{padding: '10px'}}>Skills</label>
              <Input
                onChange={(event) => this.handleChange(event)}
                name="skills1">
              </Input><br /><br />

              <label style={{padding: '10px'}}>Skills</label>
              <Input
                onChange={(event) => this.handleChange(event)}
                name="skills2">
              </Input><br /><br />
              <Button onClick={this.handleClick} type='submit'>Submit</Button>
            </Form>
          </div>

        </div>
     )
   }
 }
}


 export default connect(state => ({ resumes: state.resumes, currentActor: state.currentActor }))(ResumeSubmit)
