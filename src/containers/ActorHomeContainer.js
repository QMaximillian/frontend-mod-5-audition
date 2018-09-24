import React, { Component } from 'react'
import ActorUpcomingAuditions from '../components/ActorUpcomingAuditions'
import ActorInYourAreaAuditions from '../components/ActorInYourAreaAuditions'
import { connect } from 'react-redux'
import { loadInitialActorState } from '../actions/actions'

class ActorHomeContainer extends Component {

    componentDidMount(){
      this.props.loadInitialActorState()

      // PUT MY AUDITIONS IN STORE
      //PUT AUDITIONS IN STORE
      //PUT RESUMES IN STORE
      //PUT MY RESUMES IN STORE
      //PUT MY AUDITION_JOURNALS IN STORE
      //PUT MY APPLIED TRYOUTS IN STORE
      //PUT MY TRYOUT AUDITIONS IN STORE
      //PUT RESUMES IN STORE
      //PUT MY DEFAULT RESUME IN STORE
    }

  render() {
    console.log(this.props)
  return(
    <div>
      AuditionPreviewContainer
      <ActorUpcomingAuditions actor={this.props.currentActor}/>
      {/* <ActorJournalPreview /> */}
      <ActorInYourAreaAuditions/>
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
