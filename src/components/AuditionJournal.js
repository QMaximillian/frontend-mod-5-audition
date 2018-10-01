import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import { createAuditionJournal, loadAuditionJournals } from '../actions/actions'
import AuditionJournalCard from './AuditionJournalCard'
import AuditionJournalSearch from './AuditionJournalSearch.js'
import { Loader, Card } from 'semantic-ui-react'
// import { fetchPost } from '../adapters/actorAdapter'

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
    console.log(audition.attributes.show_name);

    console.log("Audition", audition)
    console.log("Tryout", tryout)
  }
  })
}


  render() {
    console.log(this.props.auditionIndex);
      if (typeof this.props.tryouts === 'undefined') {
        return (
          <div><Loader active inline='centered' />
        </div>
      )
      } else {
        return (
          <div>
            {this.mappedTryouts()}
            {console.log(this.props)}
          </div>
        )
      }
    }


}
// state = {
//   searchTerm: '',
//   newAuditionJournalText: ''
// }
//
// componentDidMount() {
//   this.props.loadAuditionJournals()
// }
//
// handleClick= () => {
//   console.log("jere");
// }
//
// handleSearch = (event) => {
//   this.setState({
//     searchTerm: event.target.value
//   }, () => console.log(this.state.searchTerm))
// }
//
// handleChange = (event) => {
//    this.setState({
//     newAuditionJournalText: event.target.value
//   }, () => console.log(this.state.newAuditionJournalText))
// }
//
// mappedAuditionJournals = () => {
//   return this.props.tryoutAuditions.map(tryoutAudition => {
//     return <Card.Group itemsPerRow={5}>
//             <Card onClick={this.handleClick}>
//               {tryoutAudition.show_name}
//               {tryoutAudition.location}
//             </Card>
//           </Card.Group>
//   })
// }
//
// fetchPostAuditionJournal = () => {
//   return fetch('http://localhost:3001/api/v1/audition_journals', {
//     method: 'POST',
//     headers: {
//       "Content-Type": "application/json",
//       "Accept": "application/json"
//     },
//     body: JSON.stringify({ journal: this.state.newAuditionJournalText, tryout_id: 1 })
//   }).then(resp => resp.json()).then(loadAuditionJournals())
// }
//
//
// render() {
//   if (typeof this.props.tryoutAuditions === 'undefined') {
//       return (
//         <div><Loader active inline='centered' /></div>
//       )
//   }
//   return(
//     <div>
//       <div>
//         <textarea
//           name=""
//           onChange={this.handleChange}/>
//         <button
//           onClick={() => this.fetchPostAuditionJournal('auditionJournal')}>
//           Create
//         </button><br />
//
//       <AuditionJournalSearch searchTerm={this.handleSearch}/>
//
//       </div>
//       <div>
//         {this.mappedAuditionJournals()}
//       </div>
//     </div>
//   )
// }
//
// }
//
export default connect(state => ({auditionJournals: state.auditionJournals, tryouts: state.tryouts, auditionIndex: state.auditionIndex }), { loadAuditionJournals, createAuditionJournal })(AuditionJournal)
