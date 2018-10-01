import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'


class Audition extends Component {

   render() {

     return (
      <div className='card'>
        <Link to={`/auditions/${this.props.audition.id}`}>
        {this.props.audition.attributes.show_name}
        {this.props.audition.attributes.audition_time}
        {this.props.audition.attributes.location}
      </Link>
      </div>
      )
    }
}

export default connect(state => ({ currentActor: state.currentActor, auditionIndex: state.auditionIndex, tryouts: state.tryouts }))(Audition)
