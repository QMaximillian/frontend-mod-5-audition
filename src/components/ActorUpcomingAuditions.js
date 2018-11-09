import React, { Component } from 'react'
import { Loader } from 'semantic-ui-react'
import { connect } from 'react-redux'
import AuditionTab from './AuditionTab'
import moment from 'moment'
class ActorUpcomingAuditions extends Component {


  filteredUpcoming = () => {
    return this.props.currentActor.attributes.tryouts.filter(tryout => {

       let show_name = this.props.currentActor.attributes.auditions.filter(audition => {
        if (audition.id === tryout.audition_id) {
          return audition.show_name
        }
      })

      if (moment.utc((tryout.audition_time)).isAfter(moment().format()) &&       show_name.toString().toLowerCase().match(this.props.search.toLowerCase())) {
          return tryout
        }
    })
  }

  filteredPast = () => {
    return this.props.currentActor.attributes.tryouts.filter(tryout => {
      let show_name = this.props.currentActor.attributes.auditions.map(audition => {
        if (audition.id === tryout.audition_id) {
          return audition.show_name
        }
      })

      if (moment.utc((tryout.audition_time)).isBefore(moment().format()) &&       show_name.toString().toLowerCase().match(this.props.search.toLowerCase())) {
          return tryout
        }
    })
  }

  mappedFutureAuditions = () => {
    return this.filteredUpcoming().map(tryout => {
      return <AuditionTab tryout={tryout}/>
    })
  }

  mappedPastAuditions = () => {
    return this.filteredPast().map(tryout => {
      return <AuditionTab tryout={tryout} />
    })
  }


  render(){
    if (this.props.currentActor === undefined) {
      return (
        <div>
          <Loader />
        </div>
      )
    } else if (this.props.currentActor.attributes === undefined) {
      return (
        <div>
          You have no upcoming auditions
        </div>
      )
    } else {
      return (
        <div style={{transform: 'scale(0.8, 0.8)'}}><br />
        <div style={{fontSize: '2rem'}}>
        Upcoming Auditions
        </div>
        <table className="ui celled striped padded table">
    <tbody>
      <tr>
        <th>
          <h3 className="ui center aligned header">
            Show
          </h3>
        </th>
        <th>
          <h3 className="ui center aligned header">
            Tryout Location
          </h3>
        </th>
        <th>
          <h3 className="ui center aligned header">
            Day
          </h3>
        </th>
      </tr>
        {this.mappedFutureAuditions()}
      </tbody>
      </table>

{/*  */}
        <div style={{fontSize: '2rem'}}>
        Past Auditions
        </div>
        <table className="ui celled striped padded table">
    <tbody>
      <tr>
        <th>
          <h3 className="ui center aligned header">
            Show
          </h3>
        </th>
        <th>
          <h3 className="ui center aligned header">
            Tryout Location
          </h3>
        </th>
        <th>
          <h3 className="ui center aligned header">
            Day
          </h3>
        </th>
      </tr>
        {this.mappedPastAuditions()}
      </tbody>
      </table>
      </div>
      )
    }
  }
}

export default connect(state => ({ currentActor: state.currentActor }))(ActorUpcomingAuditions)
