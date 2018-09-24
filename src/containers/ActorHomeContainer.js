import React, { Component } from 'react'
import ActorUpcomingAuditions from '../components/ActorUpcomingAuditions'
import ActorInYourAreaAuditions from '../components/ActorInYourAreaAuditions'
import { connect } from 'react-redux'
import { loadActor } from '../actions/actions'

class ActorHomeContainer extends Component {

    componentDidMount(){
      this.props.loadActor()
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
    console.log(this.props.currentActor);
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
    currentActor: state.currentActor
  }
}

export default connect(mapStateToProps, { loadActor })(ActorHomeContainer)
