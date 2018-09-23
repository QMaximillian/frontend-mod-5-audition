import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export default class Audition extends Component {


   render() {
     console.log(this.props);
     return (
        <div>
          <span>
            <Link to={`/auditions/${this.props.audition.id}`}>
            {this.props.audition.attributes.show_name}
            {this.props.audition.attributes.audition_time}
            {this.props.audition.attributes.location}
          </Link>
          </span>
        </div>
     )
   }
 }
