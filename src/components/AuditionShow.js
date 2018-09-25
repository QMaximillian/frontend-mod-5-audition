import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { fetchGet } from '../adapters/actorAdapter'
import { connect } from 'react-redux'


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
 }

 connect(state => ({ auditionIndex: state.auditionIndex }))(AuditionShow)

 export default AuditionShow
