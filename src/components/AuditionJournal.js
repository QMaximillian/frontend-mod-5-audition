import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import { createAuditionJournal, loadAuditionJournals } from '../actions/actions'
import AuditionJournalCard from './AuditionJournalCard'
import AuditionJournalSearch from './AuditionJournalSearch.js'
import { Loader, Card } from 'semantic-ui-react'

class AuditionJournal extends Component {

handleClick = (event) => {
  return <Redirect to="actor/audition-journals/1" />
}

mappedTryouts = () => {
  return this.props.tryouts.map(tryout => {

    const audition = this.props.auditionIndex.find(audition => {
      return parseInt(audition.id, 10) === tryout.audition_id
    })


    if (audition === 'undefined') {
      return (
        <div><Loader active inline='centered' />
      </div>
    )
  } else {
    return (
      <div>
        {audition.attributes.show_name}
        <br />
        <button onClick={this.handleClick}>Create Journal</button>
        {/* {tryout.audition_time} */}
      </div>
    )
  }
  })
}


  render() {
      if (typeof this.props.tryouts === 'undefined') {
        return (
          <div><Loader active inline='centered' />
        </div>
      )
      } else {
        return (
          <div>
            {this.mappedTryouts()}
          </div>
        )
      }
    }


}


export default connect(state => ({auditionJournals: state.auditionJournals, tryouts: state.tryouts, auditionIndex: state.auditionIndex }), { loadAuditionJournals, createAuditionJournal })(AuditionJournal)
