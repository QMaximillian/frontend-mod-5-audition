import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class MyAudition extends Component {


    onClick = () => {

    }

   render() {
     console.log(this.props)
     return (
         <Link to={`/my-auditions/tryouts/${this.props.audition.id}`}>
        <div className="play-tab-card-1">

          <div>{this.props.audition.show_name}</div>

        </div>
        </Link>
     )
   }
 };

export default connect(state => ({ currentActor: state.currentActor }))(MyAudition)
