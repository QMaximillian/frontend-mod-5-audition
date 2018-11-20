import React, { Component } from 'react'
import Audition from '../components/Audition.js'
import { connect } from 'react-redux'
import { loadAllAuditions } from '../actions/actions'
import { Loader } from 'semantic-ui-react'



class AllAuditionContainer extends Component {

  // Load in all auditions from the backend
  componentDidMount(){
    this.props.loadAllAuditions()
  }

  // Iterate through the entire index of auditions and if an audition's tryouts and has the currently signed-in actor included, do not show that audition
  filteredAuditions = () => {
    if (this.props.parent === "tryThis") {

    return this.props.auditionIndex.filter(audition => {
      if (this.props.equity === 'true' && audition.attributes.equity === true) {
        return audition
      } else if (this.props.equity === 'false' && audition.attributes.equity === false) {
        return audition
      } else if (this.props.equity === 'all') {
        return audition
      }


    })
  }
  // return this.props.auditionIndex.filter(audition => {
  //   return !audition.attributes.tryouts.map(tryout => tryout.actor_id).includes(parseInt(this.props.currentActor.id, 10))
  // })
}

//   filteredReduceAuditions = () => {
//     return this.props.auditionIndex.filter(audition => {
//       return !audition.attributes.tryouts.map(tryout => tryout.actor_id).includes(parseInt(this.props.currentActor.id, 10))
//     })
// }

  // Map over the filtered auditions and return an <Audition /> component for each audition
  mappedAuditions = () => {
    if (this.filteredAuditions().length === 0) {
      return "You have no available auditions"
    }

    return this.filteredAuditions().map(audition => {
      return <Audition key={audition.id} audition={audition}/>
    })
  }



   render() {
     console.log(this.mappedAuditions());
     if (typeof this.props.tryouts === 'undefined') {
       return (
         <div><Loader active inline='centered' /></div>
       )
     } else if (this.props.audition === 'undefined') {
       return(<div>
         <section className='card-container'>
         {this.mappedAuditions()}
         </section>
       </div>
     )
     } else {
          return (
             <div>
               <section className='card-container'>
               {this.mappedAuditions()}
               </section>
             </div>
          )
     }
   }

 }

 export default connect(state => ({ auditionIndex: state.auditionIndex, tryouts: state.tryouts, currentActor: state.currentActor }), { loadAllAuditions })(AllAuditionContainer)
