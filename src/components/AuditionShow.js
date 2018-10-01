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

       fetchGet('auditions', this.props.match.params.id).then(audition => {
         this.setState({
            audition: audition.data.attributes
         }, () => console.log(this.state.audition))
       })

       // const audition = this.props.auditionIndex.find(audition => {
       //   return audition.id === this.props.match.params.id
       //   })
       //
       //   console.log(audition);
      }





render() {

  const day = new Date(this.state.audition.begin_audition)
// if (typeof this.props.auditionIndex === 'undefined') {
//     return (
//       <div>
//         LOADING
//       </div>
//     )
// } else {
//     const foundAudition = this.props.auditionIndex.find(audition => {
//       return audition.id === this.props.match.params.id
//     })
//
//     console.log(foundAudition);

     return (
      <div className='card' style={{textAlign: 'center'}}>
          {this.state.audition.show_name}<br/>
          {this.state.audition.audition_information}<br/>
          {day.toUTCString()}<br/>
          <Link to={`/audition/${this.props.match.params.id}/resume_submit`}>
            <Button>Submit For This Audition</Button>
          </Link>
        </div>



       )
     }
 }

 connect(state => ({ auditionIndex: state.auditionIndex }))(AuditionShow)

 export default AuditionShow
