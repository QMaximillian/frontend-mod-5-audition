import React, { Component } from 'react'
import { fetchGet, fetchPostTryout } from '../adapters/actorAdapter'
import { Link } from 'react-router-dom'
import { Loader, Button } from 'semantic-ui-react'
import { loadAudition } from '../actions/actions'
import { connect } from 'react-redux'

class AuditionConfirmation extends Component {


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
    this.props.loadAudition(this.props.match.params.id)
  }

  handleTimeChange = (event) => {
    this.setState({
      confirmedTime: event.target.value
    })
  }

  handleTryoutPost = (event) => {
    fetchPostTryout({audition_name: this.props.audition.show_name,actor_id: 1, audition_id: this.props.match.params.id, audition_time: this.state.confirmedTime, location: this.state.confirmedAudition.location, starred: false, callback: false, cast: false})


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

    let newTime = new Date(auditionTimes.getTime() + timeSlot * 60000)

    for (let i = 0; i < slotsAvailable; i++) {
      newNewTime.push(new Date(newTime.getTime() + (timeSlot * i) * 60000))
    }

     const allSlotsWithTimes = newNewTime.filter((time) => {
       return !this.state.confirmedAudition.submitted_times.includes(new Date(time.getTime() + (0) * 60000).toString())
     })


    const slots = allSlotsWithTimes.map(time => {
        return (
         <option
           value={time}>{time.toLocaleTimeString()}
         </option>
        )
     })
    return slots
  }






  render() {

    if (typeof this.state.confirmedAudition.begin_audition === 'undefined') {
      return (
        <div><Loader active inline='centered' /></div>
      )
    } else if (this.props.audition[0] !== 'undefined'){
      return (
        <div style={{textAlign: 'center'}} className="card" >
          <div>
        <div style={{textAlign: 'center', fontSize: '2em'}}>
          Audition Confirmation
        </div><br />
          <div>
            <select
              onChange={this.handleTimeChange}
              value={this.state.confirmedTime}>
              {this.getDateHours()}
            </select>
          </div><br />
          <Link to={`/audition/${this.props.match.params.id}/audition-confirmation/confirmed`}>
            <div>
              <Button
                onClick={this.handleTryoutPost}
                type="submit">Submit
              </Button>
            </div>
          </Link>
        </div>
      </div>
      )
    }
  }
}

export default connect(state => ({ audition: state.audition }), { loadAudition })(AuditionConfirmation)
