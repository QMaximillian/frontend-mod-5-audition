import React, { Component } from 'react'
import ActorUpcomingAuditions from '../components/ActorUpcomingAuditions'
import ActorInYourAreaAuditions from '../components/ActorInYourAreaAuditions'
import ActorJournalPreview from '../components/ActorJournalPreview'
import { connect } from 'react-redux'
import { loadActor } from '../actions/actions'

class AuditionPreviewContainer extends Component {

    componentDidMount(){
      this.props.loadActor()
    }

  render() {
    console.log(this.props.currentActor);
  return(
    <div>
      AuditionPreviewContainer
      <ActorUpcomingAuditions actor={this.props.currentActor}/>
      <ActorJournalPreview />
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

export default connect(mapStateToProps, { loadActor })(AuditionPreviewContainer)
