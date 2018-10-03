import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'


class Audition extends Component {

  handleClick = () => {
    console.log("Here");
  }


   render() {
     console.log(this.props);
     if (this.props.parent === 'Theater') {
       return (
         <Link to={`auditions/${this.props.audition.id}`}>
           <span
             className="card-no-hover"
             onClick={this.handleClick}>
               {this.props.audition.show_name}
               {this.props.audition.location}
           </span>
        </Link>
       )
     } else {
     return (
       <Link to={`/auditions/${this.props.audition.id}`}>
      <div className='card'>
        {this.props.audition.attributes.show_name}
        {this.props.audition.attributes.audition_time}
        {this.props.audition.attributes.location}
      </div>
      </Link>
      )
    }
  }
}

export default connect(state => ({ currentActor: state.currentActor, auditionIndex: state.auditionIndex, tryouts: state.tryouts }))(Audition)
