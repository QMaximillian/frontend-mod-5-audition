import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { loadAudition } from '../actions/actions'

class MyAudition extends Component {


    componentDidMount(){
      // this.props.loadAudition(this.props.tryout.audition_id)
    }


   render() {
     if (this.props.currentActor.attributes.tryouts) {
     return (
         <Link to={`/my-auditions/tryouts/${this.props.tryout.id}`}>
        <div className="play-tab-card-1">

          {this.props.tryout.location}
          {/* <div>{this.props.tryout.audition_time.slice(0, 21)}</div> */}

        </div>
        </Link>
     )
   }
   }
 };

export default connect(state => ({ currentActor: state.currentActor }), { loadAudition })(MyAudition)
