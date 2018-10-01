import React, { Component } from 'react'
import Audition from '../components/Audition.js'
import { connect } from 'react-redux'
import { loadAllAuditions } from '../actions/actions'



class AllAuditionContainer extends Component {



mappedAuditions = () => {
  return this.filteredAuditions().map(audition => {

    return <Audition key={audition.id} audition={audition}/>
  })
}

filteredAuditions = () => {
  return this.props.auditionIndex.filter(audition => {
    return !audition.attributes.actor_tryouts.map(actor => actor.id).includes(parseInt(this.props.currentActor.id))
  })
    // console.log(audition.attributes.actors_submitted[0])
    // if (audition.attributes.actors_submitted.length === 0) {
    //   return <Audition key={audition.id} audition={audition}/>
    // } else {
    // return audition.attributes.actors_submitted.filter(act => {
    //     // console.log(aud.id)
    //     console.log(this.props.currentActor.id)
    //     return act.id !== parseInt(this.props.currentActor.id)
    //
    //   })
    //   console.log();
    // }

}
  // this.props.auditionIndex.attributes.map(audition => {
  //   var x = JSON.parse(JSON.stringify(audition.attributes.actors_submitted));
  //
  //     const y = x.filter(xyz => {
  //       console.log(xyz.id);
  //       return xyz.id === parseInt(this.props.currentActor.id)
  //     })
  //
  //     console.log(y);

  // })



componentDidMount(){
  this.props.loadAllAuditions()
}

   render() {
     console.log("Find Auditions");
     if (typeof this.props.appliedAuditions === 'undefined') {
       return (
       <div>LOADING</div>
      )
     } else {
          return (
             <div>
               <section className='card-container'>
               {/* {this.mappedAuditions()} */}
               {this.mappedAuditions()}
               </section>
             </div>
          )
     }

   }
 }

 export default connect(state => ({ auditionIndex: state.auditionIndex, appliedAuditions: state.appliedAuditions, currentActor: state.currentActor }), { loadAllAuditions })(AllAuditionContainer)

 // mappedAuditions = () => {
 //   return this.props.auditionIndex.map(audition => {
 //     if (audition.attributes.actors_submitted.id === this.props.currentActor.id) {
 //       return (<div>
 //         {audition.show_name} (You have already submitted)
 //       </div>)
 //     } else {
 //     return <Audition key={audition.id} audition={audition}/>
 //   }
 //   })
 // }
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
