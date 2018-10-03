import React, { Component } from 'react'
import { Loader } from 'semantic-ui-react'
import Audition from '../Audition'
import { connect } from 'react-redux'
import AuditionTab from './AuditionTab'

class ActorUpcomingAuditions extends Component {


filteredUpcoming = () => {
  return this.props.appliedAuditions.filter(audition => {

      return new Date(audition.audition_date).getTime() > Date.now() && audition.show_name.match(this.props.search)
    })
  }

  mappedAuditions = () => {
    return this.filteredUpcoming().map(audition => {
      return <AuditionTab audition={audition}/>
    })
  }


  render(){
    console.log(this.props.tryouts);
    if (this.props.appliedAuditions === undefined) {
      return (
        <div>
          <Loader />
        </div>
      )
    } else if (this.props.appliedAuditions.length === 0) {
      return (
        <div>
          You have no upcoming auditions
        </div>
      )
    } else {
      return (
        <div>
          Upcoming Auditions
          {this.mappedAuditions()}
        </div>
      )
    }
  }
}

export default connect(state => ({ appliedAuditions: state.appliedAuditions, tryouts: state.tryouts }))(ActorUpcomingAuditions)
