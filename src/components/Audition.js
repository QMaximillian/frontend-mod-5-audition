import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'


class Audition extends Component {

// /
    availableAuditions = () => {
      if (this.props.tryouts === undefined || this.props.tryouts.length === 0) {
      return (
         <div>
             <Link to={`/auditions/${this.props.audition.id}`}>
             {this.props.audition.attributes.show_name}
             {this.props.audition.attributes.audition_time}
             {this.props.audition.attributes.location}
           </Link>
         </div>
      )
    } else {
      return this.props.tryouts.map(tryout => {
        if (tryout.audition_id === parseInt(this.props.audition.id, 10)) {
          return (
            <div>
                {this.props.audition.attributes.show_name}
                {this.props.audition.attributes.audition_time}
                {this.props.audition.attributes.location}
            </div>
          )
        } else {
          return (
             <div>
                 <Link to={`/auditions/${this.props.audition.id}`}>
                 {this.props.audition.attributes.show_name}
                 {this.props.audition.attributes.audition_time}
                 {this.props.audition.attributes.location}
               </Link>
             </div>
          )
        }
      })
    }
  }


    // availableAuditions = () => {
    //
    //
    //   if (typeof this.props.auditionIndex !== 'undefined') {
    //
    //   const audition = this.props.auditionIndex.filter(audition => {
    //     return parseInt(audition.attributes.actors_submitted) !== this.props.currentActor.id
    //   })
    //
    //   return <Audition audition={audition}/>
    //   }
    // }


   render() {

     return (
      <div className='card'>
        {this.availableAuditions()}
      </div>
      )
    }
}

export default connect(state => ({ currentActor: state.currentActor, auditionIndex: state.auditionIndex, tryouts: state.tryouts }))(Audition)
