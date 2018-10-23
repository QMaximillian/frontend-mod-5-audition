import React, { Component } from 'react'
import { fetchPostTryout, fetchGet } from '../adapters/actorAdapter'
import { Link, Redirect } from 'react-router-dom'
import { Button, Input } from 'semantic-ui-react'
import { connect } from "react-redux"
import { loadAudition } from '../actions/actions'
import { push } from 'connected-react-router'
import Moment from 'react-moment'
import moment from 'moment'

class ResumePDFSubmit extends Component {


  state = {
    file: '',
    redirect: false,
    confirmedTime: 0,
    confirmedAudition: {}
  }

  componentDidMount(){
    fetchGet('auditions', this.props.match.params.id).then(resp => this.setState({
      confirmedAudition: resp.data.attributes
    })
  )
    this.props.loadAudition(this.props.match.params.id)
  }

  handleFileChange = (event) => {
    this.setState({
      file: event.target.files[0]
    }, () => console.log(this.state))
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const formData = new FormData()
    formData.append('tryout[resume]', this.state.file)
    formData.append('tryout[actor_id]', 1)
    formData.append('tryout[audition_id]', this.props.match.params.id)
    formData.append('tryout[audition_time]', this.state.confirmedTime)


    fetchPostTryout(formData)

    this.setState({
       redirect: true
    })

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
    console.log(beginTime, endTime);
    let auditionTimes = new Date(this.state.confirmedAudition.begin_audition)

    console.log(beginTime);

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

  getDateHoursMoment = () => {
    let newNewTime = []

    // if (this.state.confirmedAudition.begin_audition !== undefined) {
    //   let difference = this.state.confirmedAudition.begin_audition.diff(this.state.confirmedAudition.end_audition, 'hours')

      console.log(moment.utc(this.state.confirmedAudition.begin_audition).diff( moment.utc(this.state.confirmedAudition.end_audition), 'hours'))
    // }
  }

   render() {
    if (this.state.redirect) {
      return <Redirect push to={`/audition/${this.props.match.params.id}/audition-confirmation/confirmed`}/>
    } else {
     return (
      <React.Fragment>
      <Moment>{this.state.confirmedAudition.begin_audition}</Moment>
      <div className="card">
        <div style={{textAlign: 'center'}}>
         <div>
            <Input
              multiple
              name="pdf"
              type="file"
              onChange={this.handleFileChange}
              filename={this.state.file}>
            </Input>
            {/* <Input
              name="img"
              type="file"
              onChange={this.handleFileChange}
              filename={this.state.headshot}>
            </Input> */}
            <div>
              <select
                onChange={this.handleTimeChange}
                value={this.state.confirmedTime}>
                {this.getDateHoursMoment()}
              </select>
            </div>
         </div>
         <Button onClick={(event) => this.handleSubmit(event)}>
           Submit for Audition
         </Button>
       </div>
      </div>
      </React.Fragment>
    )
   }
 }
}

 export default connect(state => ({ audition: state.audition }), { loadAudition })(ResumePDFSubmit)
