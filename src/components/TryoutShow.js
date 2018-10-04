import React, { Component } from 'react'
import { loadTryout, loadAudition } from '../actions/actions'
import { connect } from 'react-redux'

class TryoutShow extends Component {

    componentDidMount(){
      this.props.loadTryout(this.props.match.params.id)

    }

     render() {

       console.log(this.props)
       if (this.props.audition.attributes) {
       return (
          <div className="tryout-show-grid profile-card">
            <div>
              <h1 >{this.props.audition.attributes.show_name}
              </h1>
            </div>
            <div>
            <hr style={{color: 'black', width: 500, height: 10, zIndex: 1}} />
            </div>

              <h1>{this.props.audition.attributes.audition_date}</h1>

            <div>
              <h1>{this.props.audition.attributes.audition_information}</h1>
            </div>
              <h1>{this.props.audition.attributes.state}</h1>
            <div>
              <h1>{this.props.audition.attributes.location}</h1>
            </div>
              <h1>{new Date(this.props.tryout.attributes.audition_time).toUTCString().slice(0, 22)}</h1>
          </div>
       )
     } else {
       return (
         <div>
           LOADING
         </div>
       )
     }
   }
 }

 export default connect(state => ({ tryout: state.tryout, audition: state.audition, currentActor: state.currentActor }), { loadTryout, loadAudition })(TryoutShow)
