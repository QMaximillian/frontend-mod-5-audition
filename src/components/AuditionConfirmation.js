import React, { Component } from 'react'
import { fetchGet } from '../adapters/actorAdapter'


class AuditionConfirmation extends Component {

  state = {
    confirmedAudition: {},
    confirmedTime: 0
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
      if (typeof this.state.confirmedAudition.begin_audition === 'undefined') {
        return (
          <div>LOADING</div>
        )
      } else {
        console.log(this.state.confirmedAudition)
      return (
        <div>
          <select onChange={this.handleTimeChange} value={this.state.confirmedTime}>
            {this.getDateHours()}
          </select>


        </div>
      )
    }
  }
}

export default AuditionConfirmation
