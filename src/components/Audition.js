import React, { Component } from 'react'
import { Link } from 'react-router-dom'




class Audition extends Component {

   render() {
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
 }

export default Audition
