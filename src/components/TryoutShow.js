//Start creating a comprehensive information page tomorrow

import React, { Component } from 'react'
import { loadAudition } from '../actions/actions'
import { connect } from 'react-redux'

class TryoutShow extends Component {

  componentDidMount(){
    if (this.props.currentActor.attributes.tryouts !== undefined) {
      const tryout =  this.props.currentActor.attributes.tryouts.find(tryout => {
          return tryout.id === parseInt(this.props.match.params.id, 10)
        })

      this.props.loadAudition(tryout.audition_id)
    }
  }

     render() {
       const tryout =  this.props.currentActor.attributes.tryouts.find(tryout => {
           return tryout.id === parseInt(this.props.match.params.id, 10)
         })
       console.log(this.props.audition);
       return (
          <div className="tryout-show-grid profile-card">
            <div style={{textAlign: 'center'}}>
            </div>
            <div>
            <hr style={{color: 'black', width: 500, height: 10, zIndex: 1}} />
            </div>
            <div>
              <h1>{tryout.location}</h1>
            </div>
              <h1>{tryout.audition_time}</h1>
            <div>
              <h1>{tryout.callback}</h1>
            </div>
          </div>
       )
   }
 }


 export default connect(state => ({ currentActor: state.currentActor, audition: state.audition}), { loadAudition })(TryoutShow)
