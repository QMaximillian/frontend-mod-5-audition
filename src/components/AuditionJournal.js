import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createAuditionJournal, loadAuditionJournals } from '../actions/actions'
import AuditionJournalCard from './AuditionJournalCard'
import AuditionJournalSearch from './AuditionJournalSearch.js'
// import { fetchPost } from '../adapters/actorAdapter'

class AuditionJournal extends Component {

state = {
  searchTerm: '',
  newAuditionJournalText: ''
}

componentDidMount() {
  this.props.loadAuditionJournals()
}

handleSearch = (event) => {
  this.setState({
    searchTerm: event.target.value
  }, () => console.log(this.state.searchTerm))
}

handleChange = (event) => {
   this.setState({
    newAuditionJournalText: event.target.value
  }, () => console.log(this.state.newAuditionJournalText))
}

mappedAuditionJournals = () => {
  return this.props.auditionJournals.map(auditionJournal => {
    return <AuditionJournalCard auditionJournal={auditionJournal} />
  })
}

fetchPostAuditionJournal = () => {
  return fetch('http://localhost:3001/api/v1/audition_journals', {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({ journal: this.state.newAuditionJournalText, tryout_id: 1 })
  }).then(resp => resp.json()).then(loadAuditionJournals())
}


render() {
  // console.log(this.props.auditionJournals);
  return(
    <div>
      <div>
        <textarea
          name=""
          onChange={this.handleChange}/>
        <button
          onClick={() => this.fetchPostAuditionJournal('auditionJournal')}>
          Create
        </button><br />

      <AuditionJournalSearch searchTerm={this.handleSearch}/>

      </div>
      <div>
        {this.mappedAuditionJournals()}
      </div>
    </div>
  )
}

}

export default connect(state => ({auditionJournals: state.auditionJournals}), { loadAuditionJournals, createAuditionJournal })(AuditionJournal)
