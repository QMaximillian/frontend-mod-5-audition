import React, { Component } from 'react'
import Audition from '../components/Audition.js'
import { connect } from 'react-redux'
import { loadAllAuditions } from '../actions/actions'
import { Loader, Table } from 'semantic-ui-react'



class AllAuditionContainer extends Component {

  // Load in all auditions from the backend
  componentDidMount(){
    this.props.loadAllAuditions()
  }

  filteredAuditions = () => {
    return this.props.auditionIndex.filter(audition => {
      return !audition.attributes.tryouts.map(tryout => tryout.actor_id).includes(parseInt(this.props.currentActor.id, 10))
    })

  }

  // Iterate through the entire index of auditions and if an audition's tryouts and has the currently signed-in actor included, do not show that audition
  searchFilterAuditions = () => {

    return this.filteredAuditions().filter(audition => {
      switch(this.props.equity) {
        case 'true': 
          return (
            this.props.equity === "true" &&
            audition.attributes.equity === true
          )
        case 'false':
          return (
            this.props.equity === "false" &&
            audition.attributes.equity === false
          )
        case 'all': 
          return (audition)
        default:
            return audition
      }
    })
}

  // Map over the filtered auditions and return an <Audition /> component for each audition
  mappedAuditions = () => {
    if (this.searchFilterAuditions().length === 0) return "You have no available auditions"

    return this.searchFilterAuditions().map(audition => {
      return (
        <Table.Row>
          <Audition key={audition.id} audition={audition}/>
        </Table.Row>
      )
    })
  }



      render() {
      if (this.props.tryouts === 'undefined' || this.props.audition === 'undefined') return <Loader active inline='centered' />
            
            return (
              <Table >
              <Table.Header>
                  <Table.Row>
                  <Table.HeaderCell>Show Name</Table.HeaderCell>
                  <Table.HeaderCell>Location</Table.HeaderCell>
                  <Table.HeaderCell>Call Type</Table.HeaderCell>
                  </Table.Row>
              </Table.Header>
              <Table.Body>
                {this.mappedAuditions()}
              </Table.Body>
                </Table>
            )
      }
   }

 export default connect(state => ({ auditionIndex: state.auditionIndex, tryouts: state.tryouts, currentActor: state.currentActor }), { loadAllAuditions })(AllAuditionContainer)
