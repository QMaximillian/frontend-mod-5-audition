import React, { Component } from 'react'
import { fetchPostTryout, fetchGet } from '../adapters/actorAdapter'
import { Button, Input } from 'semantic-ui-react'
import { connect } from "react-redux"
import { loadAudition } from '../actions/actions'

class ResumePDFSubmit extends Component {


  state = {
    file: '',
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


   render() {
     console.log(this.props.audition)
     return (
      <React.Fragment>
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
                {this.getDateHours()}
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

 export default connect(state => ({ audition: state.audition }), { loadAudition })(ResumePDFSubmit)
