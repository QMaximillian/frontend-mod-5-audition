import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { fetchGet } from '../adapters/actorAdapter'
import { connect } from 'react-redux'
import moment from 'moment'
import {Button} from 'semantic-ui-react'
import withAuth from '../hocs/withAuth'
// import { loadInitialActorState } from '../actions/actions.js'



class AuditionShow extends Component {

  state = {
    audition: {}
  }

     componentDidMount(){
       // this.props.loadInitialActorState()

       if (this.props.match.params.auditionId) {
       fetchGet('auditions', this.props.match.params.auditionId).then(audition => {
         this.setState({
            audition: audition.data.attributes
         })
       })
     } else {
       fetchGet('auditions', this.props.match.params.id).then(audition => {
         this.setState({
            audition: audition.data.attributes
         })
       })
     }
    }

  handleLineBreak = (value) => {
    return value.split("\n").map((i,key) => {
            return <div key={key}>{i}</div>;
        })
  }

render() {
  console.log(this.props);
  if (this.state.audition.show_name && this.props.currentActor.attributes !== undefined) {
     return (
      <div className='card' style={{textAlign: 'left'}}>
          <div style={{fontSize: '2em'}}>
            <h1>{this.state.audition.show_name}</h1><br/>
            <h5>{this.handleLineBreak(this.state.audition.location)}</h5>
            <span>
            {this.props.currentActor.attributes.equity === true ?
                <Link to={`/audition/${this.props.match.params.id}/resume_submit`}>
                  <Button>Submit For This Audition</Button>
                </Link>
              : <div>This an equity only audition</div>
              }

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

 export default withAuth(connect(state => ({ currentActor: state.currentActor }))(AuditionShow))
