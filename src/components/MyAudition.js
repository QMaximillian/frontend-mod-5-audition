import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class MyAudition extends Component {

    onClick = () => {

    }

   render() {
     return (
       <div>
        <div className="card-container">
         <Link to="/">
        <div className="card">

          <div>{this.props.audition.show_name}</div>
          {console.log(this.props)}
        </div>
        </Link>
      </div>

    </div>
     )
   }
 };

export default connect(state => ({ currentActor: state.currentActor }))(MyAudition)
