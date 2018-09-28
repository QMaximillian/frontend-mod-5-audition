import React, { Component } from 'react'
import Audition from '../components/Audition.js'
import { connect } from 'react-redux'
import { loadAllAuditions } from '../actions/actions'


class AllAuditionContainer extends Component {

// mappedAuditions = () => {
//   let array = []
//
//   for (let i = 0; i < this.props.auditionIndex.length; i++) {
//     for (let j = 0; j < this.props.appliedAuditions.length; j++) {
//       // console.log(parseInt(this.props.auditionIndex[i].id))
//       // console.log(this.props.appliedAuditions[j].id)
//       if (this.props.auditionIndex[i].id !== this.props.appliedAuditions[j].id.toString()) {
//         // console.log(this.props.auditionIndex[i].id)
//         console.log(this.props.auditionIndex[i])
//         // How to return all qualifying values?
//         array.push(this.props.auditionIndex[i])
//     }
//   }
// }
//   return array.map(audition => {
//     console.log(audition);
//     return <Audition key={audition.id} audition={audition}/>
// })
// }

mappedAuditions = () => {
  return this.props.auditionIndex.map(audition => {
    return <Audition key={audition.id} audition={audition}/>
  })
}



componentDidMount(){
  this.props.loadAllAuditions()
}

   render() {
     if (typeof this.props.appliedAuditions === 'undefined') {
       return (
       <div>LOADING</div>
      )
     } else {
          return (
             <div>
               {this.mappedAuditions()}
             </div>
          )
     }

   }
 }

// mapStateToProps = () => {
//   allAuditions: state.allAuditions
// }

 export default connect(state => ({ auditionIndex: state.auditionIndex, appliedAuditions: state.appliedAuditions, currentActor: state.currentActor }), { loadAllAuditions })(AllAuditionContainer)
