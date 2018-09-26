import React, { Component } from 'react'
import { fetchGet, fetchPostTryout } from '../adapters/actorAdapter'
import { Redirect } from 'react-router-dom'
import { Loader } from 'semantic-ui-react'
class AuditionConfirmation extends Component {


  // Gotta take the audition time selected out of the array for this specific show

  //Gotta prevent a user from submitting for multiple shows

  //Gotta remove the show from being able to be selected for an audition from the user


  state = {
    confirmedAudition: {},
    confirmedTime: 0,
    redirect: false
  }

  componentDidMount(){
    fetchGet('auditions', this.props.match.params.id).then(resp => this.setState({
      confirmedAudition: resp.data.attributes
    })
  )
  }

  handleTimeChange = (event) => {
    this.setState({
      confirmedTime: event.target.value
    })
  }

  handleTryoutPost = (event) => {
    fetchPostTryout({actor_id: 1, audition_id: this.props.match.params.id, audition_time: this.state.confirmedTime, city: this.state.confirmedAudition.location, starred: false, callback: false, cast: false}).then(console.log)

    this.setState({
      redirect: true
    })


  }

  getDateHours = () => {

    let newNewTime = []

    let beginTime = new Date(this.state.confirmedAudition.begin_audition)

    let endTime = new Date(this.state.confirmedAudition.end_audition)

    let auditionTimes = new Date(this.state.confirmedAudition.begin_audition.slice())

    let timeSlot = this.state.confirmedAudition.time_slots
    beginTime = beginTime.getUTCHours()
    endTime = endTime.getUTCHours()
    let hoursAvailable = endTime - beginTime
    let slotsAvailable = (60 / timeSlot) * hoursAvailable

    let newTime = new Date(auditionTimes.getTime() + 15*60000)

    for (let i = 0; i < slotsAvailable; i++) {
      newNewTime.push(new Date(newTime.getTime() + (15 * i) * 60000))
    }

     let allSlotsWithTimes = newNewTime.map(time => {

      // let foundTime  = this.state.confirmedAudition.tryouts.find(tryout => {
        // let theTryout = tryout.audition_time.slice(1)
         // tryout.audition_time === this.state.confirmedTime
         // console.log(time);
         // console.log(tryout.audition_time);

         // console.log(tryout.audition_time.slice(1).slice(0, 8))
         // console.log(JSON.stringify(time).slice(12, 20));
         //
         //
         // console.log(time);

         // console.log("Time", time.slice(20))

       // })


          return (
          <option
            value={time}>{time.toLocaleTimeString()}
          </option>
        )
    })

    console.log(allSlotsWithTimes)
    return allSlotsWithTimes

  }






  render() {
    console.log(this.state.confirmedAudition.tryouts)

    if (this.state.redirect) {
      return <Redirect to='/home'/>
    } else if (typeof this.state.confirmedAudition.begin_audition === 'undefined') {
      return (
        <div><Loader active inline='centered' /></div>
      )
    } else {
        console.log(this.state.confirmedTime)
      return (
        <div>
          <select
            onChange={this.handleTimeChange} value={this.state.confirmedTime}>
            {this.getDateHours()}
          </select>

        <button
          onClick={this.handleTryoutPost}
          type="submit">Submit
        </button>


        </div>
      )
    }
  }
}

export default AuditionConfirmation
