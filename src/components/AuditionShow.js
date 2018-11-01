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





render() {

     return (
      <div className='card' style={{textAlign: 'center'}}>
          <div style={{fontSize: '2em'}}>
            {this.state.audition.show_name}<br/>
          </div>

          {this.state.audition.audition_information}<br/>
          {moment(this.state.audition.begin_audition).format('ddd, MMM DD YYYY')}<br/>
          <h4>{this.state.audition.personnel}</h4>
          <h4>{this.state.audition.call_type}</h4>
          <h4>{this.state.audition.breakdown}</h4>
          <h4>{this.state.audition.contract}</h4>
          <h4>{this.state.audition.seeking}</h4>
          <h4>{this.state.audition.show_dates}</h4>
          <h4>{this.state.audition.other}</h4>
          <h4>{this.state.audition.location}</h4>
          <Link to={`/audition/${this.props.match.params.id}/resume_submit`}>
            <Button>Submit For This Audition</Button>
          </Link>
        </div>



       )
     }
 }

 connect(state => ({ auditionIndex: state.auditionIndex }))(AuditionShow)

 export default AuditionShow
