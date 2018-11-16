import React, { Component } from 'react'
import { Loader } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { loadAudition } from '../actions/actions'
import AuditionTab from './AuditionTab'
import moment from 'moment'
class ActorUpcomingAuditions extends Component {


  filteredUpcoming = () => {
    return this.props.currentActor.attributes.tryouts.filter(tryout => {
      if (moment.utc((tryout.audition_time)).isAfter(moment().format()) &&       tryout.show_name.toLowerCase().match(this.props.search.toLowerCase())) {
          return tryout
        }
    })
  }

  filteredPast = () => {
    return this.props.currentActor.attributes.tryouts.filter(tryout => {
      if (moment.utc(tryout.audition_time).isBefore(moment().format()) &&       tryout.show_name.toLowerCase().match(this.props.search.toLowerCase()))
      {
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

export default connect(state => ({ currentActor: state.currentActor }), { loadAudition })(ActorUpcomingAuditions)
