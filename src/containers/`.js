import React, { Component } from 'react'
import Audition from '../components/Audition.js'
import { connect } from 'react-redux'
import { loadAllAuditions } from '../actions/actions'


class AllAuditionContainer extends Component {

mappedAuditions = () => {
  const difference = this.props.auditionIndex.filter(audition => {
    return !this.props.appliedAuditions.includes(audition.id)
      // GOTTA FIGURE OUT HOW TO MATCH IDS WITH DIFFERENT OBJECT BEING RETURN
      // console.log(applied.id);
      // console.log(audition.id);
      // applied.id !== audition.id
    })
console.log(difference);

     // return !this.props.appliedAuditions.includes(audition)
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
     console.log(this.props.appliedAuditions)
     console.log(this.props.auditionIndex)
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

 export default connect(state => ({ auditionIndex: state.auditionIndex, appliedAuditions: state.appliedAuditions }), { loadAllAuditions })(AllAuditionContainer)
