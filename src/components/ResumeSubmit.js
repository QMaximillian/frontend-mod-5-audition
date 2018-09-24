import React, { Component } from 'react'
import { connect } from 'react-redux'
import Resume from './Resume'


class ResumeSubmit extends Component {


mappedResumes = () => {
  return this.props.resumes.map(resume => {
    return <Resume resume={resume}/>
  })
}
   render(){
     console.log(this.props.resumes)
     return (
        <div>
          {this.mappedResumes()}
          {/* <label>Shows</label><br />
          <label>Training</label><br />
          <label>Education</label><br /> */}
          
        </div>
     )
   }
 }

 export default connect(state => ({ resumes: state.resumes }))(ResumeSubmit)
