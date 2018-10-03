import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { fetchGet } from '../adapters/actorAdapter'
import { connect } from 'react-redux'
import {Button} from 'semantic-ui-react'


class AuditionShow extends Component {

  state = {
    audition: {}
  }

     componentDidMount(){
       if (this.props.match.params.auditionId) {
       fetchGet('auditions', this.props.match.params.auditionId).then(audition => {
         this.setState({
            audition: audition.data.attributes
         }, () => console.log(this.state.audition))
       })
     } else {
       fetchGet('auditions', this.props.match.params.id).then(audition => {
         this.setState({
            audition: audition.data.attributes
         }, () => console.log(this.state.audition))
       })
     }
    }





render() {
  console.log(this.state.audition);
  const day = new Date(this.state.audition.begin_audition)
     return (
      <div className='card' style={{textAlign: 'center'}}>
          <div style={{fontSize: '2em'}}>
            {this.state.audition.show_name}<br/>
          </div>

          {this.state.audition.audition_information}<br/>
          {day.toUTCString().slice(0,16)}<br/>
          <Link to={`/audition/${this.props.match.params.id}/resume_submit`}>
            <Button>Submit For This Audition</Button>
          </Link>
        </div>



       )
     }
 }

 connect(state => ({ auditionIndex: state.auditionIndex }))(AuditionShow)

 export default AuditionShow
