import React, { Component } from 'react'
import Audition from '../components/Audition.js'
import { connect } from 'react-redux'
import { loadAllAuditions } from '../actions/actions'


class AllAuditionContainer extends Component {

mappedAuditions = () => {
  return this.props.auditionIndex.map(audition => {
    return <Audition key={audition.id} audition={audition}/>
  })
}

componentDidMount(){
  this.props.loadAllAuditions()
}

   render() {
     console.log(this.props);
     return (
        <div>
          {this.mappedAuditions()}
        </div>
     )
   }
 };

// mapStateToProps = () => {
//   allAuditions: state.allAuditions
// }

 export default connect(state => ({ auditionIndex: state.auditionIndex }), { loadAllAuditions })(AllAuditionContainer)
