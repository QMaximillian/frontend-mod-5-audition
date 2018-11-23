import React, { Component } from 'react'
import ActorUpcomingAuditions from '../components/ActorUpcomingAuditions'
import { connect } from 'react-redux'
import { loadInitialActorState } from '../actions/actions'
import '../Audition.css'
import Search from '../components/Search'
import withAuth from '../hocs/withAuth'



class ActorHomeContainer extends Component {

  // State is holding information related to searching for the name of an audition in the future or the past
  state = {
    search: ''
  }

  // This handleChange is handling the onChange input in the <Search /> component and updating this.state.search in ActorHomeContainer
  handleChange = (event) => {
      this.setState({
        search: event.target.value
      })
  }

  // Loads all of the relevant information associated with the Actor signed-in
    componentDidMount(){
      this.props.loadInitialActorState()
    }

  render() {
    console.log(this.props)
    return(
      <div style={{textAlign: 'center'}} >
            <div>
            <h1>Welcome to Audition</h1>
            <Search search={this.state.search}
              handleChange={this.handleChange}/>
            <ActorUpcomingAuditions search={this.state.search}/>
            </div>
          </div>
        )
  }
}

  // mapping loaded in values from loadInitialActorState in componentDidMount
const mapStateToProps = (state) => {
  return {
    currentActor: state.currentActor,
    auditions: state.auditions,
    tryouts: state.tryouts,
    auditionJournals: state.auditionJournals
  }
}

export default withAuth(connect(mapStateToProps, { loadInitialActorState })(ActorHomeContainer))
