import React, { Component } from 'react'
import ActorUpcomingAuditions from '../components/ActorUpcomingAuditions'
import { connect } from 'react-redux'
import { loadInitialActorState } from '../actions/actions'
import '../Audition.css'
import Search from '../components/Search'



class ActorHomeContainer extends Component {


  state = {
    search: ''
  }

  handleChange = (event) => {
      this.setState({
        search: event.target.value
      })
  }

    componentDidMount(){
      this.props.loadInitialActorState()
    }

  render() {
    return(
          <div className="home-grid">
            <div className="sidebar" style={{textAlign: 'center'}}>
            <h1>Welcome to Audition</h1>
            <Search search={this.state.search}
              handleChange={this.handleChange}/>
            <ActorUpcomingAuditions search={this.state.search}/>
            </div>
          </div>
    )
}
}

const mapStateToProps = (state) => {
  return {
    currentActor: state.currentActor,
    appliedAuditions: state.appliedAuditions,
    resumes: state.resumes,
    tryoutAuditions: state.tryoutAuditions,
    auditionJournals: state.auditionJournals,
    tryouts: state.tryouts

  }
}

export default connect(mapStateToProps, { loadInitialActorState })(ActorHomeContainer)
