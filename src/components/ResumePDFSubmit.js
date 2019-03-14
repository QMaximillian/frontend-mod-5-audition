import React, { Component, Fragment } from 'react'
import { fetchPostTryout, fetchGet } from '../adapters/actorAdapter'
import { Redirect } from 'react-router-dom'
import { Button, Input, Form, Dimmer, Loader} from 'semantic-ui-react'
import { connect } from "react-redux"
import { loadAudition, loadInitialActorState } from '../actions/actions'
// import Moment from 'react-moment'
import moment from 'moment'
import '../Audition.css'
import withAuth from '../hocs/withAuth'


class ResumePDFSubmit extends Component {


  state = {
    file: '',
    redirect: false,
    confirmedTime: 0,
    loading: false,
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

    if (this.state.confirmedTime === 0 || this.state.file === '' ) //check if file is pdf
    {
      alert('Please pick an actual time')
      return
    }

    this.setState({
      loading: true
    })

    const formData = new FormData()
    formData.append('tryout[resume]', this.state.file)
    formData.append('tryout[actor_id]', this.props.currentActor.id)
    formData.append('tryout[audition_id]', this.props.match.params.id)
    formData.append('tryout[audition_time]', this.state.confirmedTime)
    formData.append('tryout[location]', "New York City")
    formData.append('tryout[show_name]', this.state.confirmedAudition.show_name)


    fetchPostTryout(formData).then(() => this.props.loadInitialActorState(this.props.currentActor.id)).then(() => this.setState({
        redirect: true
     }))
  }


  handleTimeChange = (state) => {
    this.setState({
      confirmedTime: state.value
    }, () => console.log(this.state.confirmedTime))
  }

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

    let timeOptions = []

    for (let time of allSlotsWithTimes) {
      timeOptions.push({'text': moment(time).format('HH:mm A'), 'value': moment(time).format()})
    }
    return timeOptions
  }
    }


   render() {
    if (this.state.redirect) {
      return <Redirect push to={`/audition/${this.props.match.params.id}/audition-confirmation/confirmed`}/>
    } else {

      const { begin_audition } = this.state.confirmedAudition

      let dayOfAudition = moment(begin_audition).format('ddd, MMM DD YYYY')

     return (
      <Fragment>
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
              <Form.Select
              label="Pick a time"
              name="confirmedTime"
                onChange={(event, state) => this.handleTimeChange(state)}
                value={this.state.confirmedTime}
                options={this.getDateHoursMoment()}>
              </Form.Select>
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
  {this.state.file ? <div>Resume Attached</div> : <div></div>}
        <br />

        {this.state.loading === false ?
         <Button onClick={(event) => this.handleSubmit(event)}>
           Submit for Audition
         </Button>
       :
       <Fragment>
       <Dimmer active>
        <Loader size='massive'>Loading</Loader>
        </Dimmer>
        <Button onClick={(event) => this.handleSubmit(event)}>
          Submit for Audition
        </Button>
      </Fragment>
      }
       </div>
      </div>
      </Fragment>
    )
   }
 }
}

 export default withAuth(connect(state => ({ audition: state.audition, currentActor: state.currentActor }), { loadAudition, loadInitialActorState })(ResumePDFSubmit))
