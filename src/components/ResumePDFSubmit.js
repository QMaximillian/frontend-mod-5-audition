import React, { Component } from 'react'
import { fetchPostTryout, fetchGet } from '../adapters/actorAdapter'
import { Redirect } from 'react-router-dom'
import { Button, Input } from 'semantic-ui-react'
import { connect } from "react-redux"
import { loadAudition } from '../actions/actions'
// import Moment from 'react-moment'
import moment from 'moment'
import '../Audition.css'

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
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const formData = new FormData()
    formData.append('tryout[resume]', this.state.file)
    formData.append('tryout[actor_id]', this.props.currentActor.id)
    formData.append('tryout[audition_id]', this.props.match.params.id)
    formData.append('tryout[audition_time]', this.state.confirmedTime)
    formData.append('tryout[location]', "New York City")


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


  // getDateHours = () => {
  //   let newNewTime = []
  //
  //   let beginTime = new Date(this.state.confirmedAudition.begin_audition)
  //
  //   let endTime = new Date(this.state.confirmedAudition.end_audition)
  //
  //   let auditionTimes = new Date(this.state.confirmedAudition.begin_audition)
  //
  //
  //
  //   let timeSlot = this.state.confirmedAudition.time_slots
  //   beginTime = beginTime.getUTCHours()
  //   endTime = endTime.getUTCHours()
  //   let hoursAvailable = endTime - beginTime
  //   let slotsAvailable = (60 / timeSlot) * hoursAvailable
  //
  //   let newTime = new Date(auditionTimes.getTime() + timeSlot * 60000)
  //
  //   for (let i = 0; i < slotsAvailable; i++) {
  //     newNewTime.push(new Date(newTime.getTime() + (timeSlot * i) * 60000))
  //   }
  //
  //    const allSlotsWithTimes = newNewTime.filter((time) => {
  //      return !this.state.confirmedAudition.submitted_times.includes(new Date(time.getTime() + (0) * 60000).toString())
  //    })
  //
  //
  //   const slots = allSlotsWithTimes.map(time => {
  //       return (
  //        <option
  //          value={time}>{time.toLocaleTimeString()}
  //        </option>
  //       )
  //    })
  //   return slots
  // }

  getDateHoursMoment = () => {

    const { end_audition, begin_audition, time_slots, submitted_times } = this.state.confirmedAudition

    let startTime = moment(begin_audition)
    let endTime = moment(end_audition)

    let timeStops = []

if (time_slots !== undefined){
    while(startTime <= endTime){
      timeStops.push(moment(startTime).format('YYYY-MM-DD HH:mm Z'))
      startTime.add(time_slots, 'minutes');
    }
  }


      if (submitted_times !== undefined) {
    const allSlotsWithTimes = timeStops.filter((time) => {
      return !this.state.confirmedAudition.submitted_times.includes(time)
    })

    const slots = allSlotsWithTimes.map(time => {
        return (
          <React.Fragment>
          <option
           value={moment(time).format()}>{moment(time).format('HH:mm A')}
          </option>
          </React.Fragment>
        )
     })
    return slots
  }
    }







   render() {
    if (this.state.redirect) {
      return <Redirect push to={`/audition/${this.props.match.params.id}/audition-confirmation/confirmed`}/>
    } else {

      const { begin_audition } = this.state.confirmedAudition

      let dayOfAudition = moment(begin_audition).format('ddd, MMM DD YYYY')
      console.log(this.state.confirmedAudition);
     return (
      <React.Fragment>
      <div className="card">
        <div style={{textAlign: 'center'}}>
        <div style={{'fontSize': '2em'}}>
        <h1>
          {this.state.confirmedAudition.show_name}
        </h1>
        <h3>
          Pick an Audition Time:
        </h3>
        <h4>
          {dayOfAudition}
        </h4>
        </div>
        <br />
         <div>
            <div>
              <select
                onChange={this.handleTimeChange}
                value={this.state.confirmedTime}>
                {this.getDateHoursMoment()}
              </select>
            </div>
         </div>
         <div><br />
           <Button color="teal">
              <label
              >Upload Your Resume
                <Input
                className="ui upload icon"
                style={{"display":"none"}}
                  name="pdf"
                  type="file"
                  onChange={this.handleFileChange}
                  filename={this.state.file}>
                </Input>
              </label>
            </Button>
          </div>
  {this.state.file ? <div>Resume Attached</div> : console.log("don't render the file")}
        <br />
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

 export default connect(state => ({ audition: state.audition, currentActor: state.currentActor }), { loadAudition })(ResumePDFSubmit)
