import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { fetchGet } from '../adapters/actorAdapter'
import { connect } from 'react-redux'
import moment from 'moment'
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

  handleLineBreak = (value) => {
    return value.split("\n").map((i,key) => {
            return <div key={key}>{i}</div>;
        })
  }

render() {
  if (this.state.audition.show_name) {
     return (
      <div className='card' style={{textAlign: 'left'}}>
          <div style={{fontSize: '2em'}}>
            <h1>{this.state.audition.show_name}</h1><br/>
            <h5>{this.handleLineBreak(this.state.audition.location)}</h5>
            <span>
            <Link to={`/audition/${this.props.match.params.id}/resume_submit`}>
              <Button>Submit For This Audition</Button>
            </Link>
            </span>
          </div>
          <hr/>
          <h2>Details</h2>
          <h4>Call Type: <div>{this.state.audition.call_type}</div></h4>
          <h4>Contract: <div>{this.state.audition.contract}</div></h4>
          <h4>Personnel; <div>{this.handleLineBreak(this.state.audition.personnel)}</div></h4>
          <h4>Dates: <div>{this.handleLineBreak(this.state.audition.show_dates)}</div></h4>
          <h4>Other: <div>{this.state.audition.other}</div></h4>
          <h4>Seeking: {this.state.audition.seeking}</h4>
          <h4>Breakdown: {this.handleLineBreak(this.state.audition.breakdown)}</h4>


          <h1>Audition Information</h1>
          <h3>Day:</h3>
          <h4>{moment(this.state.audition.begin_audition).format('ddd, MMM DD YYYY')}<br/>{moment(this.state.audition.begin_audition).format('H:mm A')} - {moment(this.state.audition.end_audition).format('H:mm A')}</h4>
          <h3>Preparation:</h3>
          <h4>{this.state.audition.audition_information}</h4>
        </div>

       )
     } else {
       return (
       <div>LOADING</div>
     )
     }
     }
 }

 connect(state => ({ auditionIndex: state.auditionIndex }))(AuditionShow)

 export default AuditionShow
