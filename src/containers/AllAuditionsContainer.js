import React, { Component } from 'react'
import Audition from '../components/Audition.js'
import { connect } from 'react-redux'
import { loadAllAuditions } from '../actions/actions'
import { Loader } from 'semantic-ui-react'



class AllAuditionContainer extends Component {



mappedAuditions = () => {
  return this.filteredAuditions().map(audition => {

    return <Audition key={audition.id} audition={audition}/>
  })
}

filteredAuditions = () => {
  return this.props.auditionIndex.filter(audition => {
    return !audition.attributes.tryouts.map(actor => actor.id).includes(parseInt(this.props.currentActor.id, 10))
  })

}


componentDidMount(){
  this.props.loadAllAuditions()
}

   render() {
     console.log(this.props.currentActor);
     if (typeof this.props.tryouts === 'undefined') {
       return (
         <div><Loader active inline='centered' /></div>
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
