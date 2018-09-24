import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class AuditionShow extends Component {

  state = {
    audition: {}
  }

     componentDidMount(){
       console.log(this.props.match.params.id)
       fetch(`http://localhost:3001/api/v1/auditions/${this.props.match.params.id}`).then(resp => resp.json()).then(audition => {
         this.setState({
            audition: audition.data.attributes
         }, () => console.log(this.state.audition))
       })

     }
render() {
  console.log(this.props);
     return (
        <div>
          {this.state.audition.show_name}
          {this.state.audition.audition_information}
          {this.state.audition.audition_time}
          <Link to={`/audition/${this.props.match.params.id}/resume_submit`}>
            <button>Submit For This Audition</button>
          </Link>
        </div>

     )
   }
 };


 export default AuditionShow
