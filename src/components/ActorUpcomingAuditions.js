import React, { Component } from 'react'
import { Loader } from 'semantic-ui-react'
import Audition from '../Audition'
import { connect } from 'react-redux'
import AuditionTab from './AuditionTab'

class ActorUpcomingAuditions extends Component {


filteredUpcoming = () => {
  return this.props.appliedAuditions.filter(audition => {

      return new Date(audition.audition_date).getTime() > Date.now() && audition.show_name.toLowerCase().match(this.props.search.toLowerCase())
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
        </tr>
          {this.mappedAuditions()}
        </tbody>
        </table>
      </div>
      )
    }
  }
}

export default connect(state => ({ appliedAuditions: state.appliedAuditions, tryouts: state.tryouts }))(ActorUpcomingAuditions)
