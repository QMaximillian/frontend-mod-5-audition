import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class MyAudition extends Component {


    onClick = () => {

    }

   render() {
     console.log(this.props)
     return (
       <div>
        <div className="card-container">
         <Link to={`/my-auditions/tryouts/${this.props.audition.id}`}>
        <div className="card">

          <div>{this.props.audition.show_name}</div>

        </div>
        </Link>
      </div>

    </div>
     )
   }
 };

export default connect(state => ({ currentActor: state.currentActor }))(MyAudition)
