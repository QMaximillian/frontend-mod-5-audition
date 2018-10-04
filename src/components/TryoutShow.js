import React, { Component } from 'react'
import { loadTryout } from '../actions/actions'
import { connect } from 'react-redux'

class TryoutShow extends Component {

    componentDidMount(){
      this.props.loadTryout(this.props.match.params.id)
    }

     render() {
       console.log(this.props.tryout.attributes);
       if (this.props.tryout.attributes) {
       return (
          <div className="play-show-grid profile-card">
            TryoutShow
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

 export default connect(state => ({ tryout: state.tryout }), { loadTryout })(TryoutShow)
