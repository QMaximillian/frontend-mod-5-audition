import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'


class Audition extends Component {

   render() {
     if (this.props.parent === 'Theater') {
       return (
         <Link to={`auditions/${this.props.audition.id}`}>
           <span
             className="card-no-hover">
               {this.props.audition.show_name}
               {this.props.audition.state}
           </span>
        </Link>
       )
     } else if (this.props.parent === "Season") {
       return (
         <Link to={`${this.props.match.params.seasonId}/auditions/${this.props.audition.id}`}>
           <span
             className="card"
             onClick={this.handleClick}>
               {this.props.audition.show_name}
               {this.props.audition.state}
           </span>
        </Link>
       )
     } else {
       return (
         <Link to={`/auditions/${this.props.audition.id}`}>
          <div className='card-no-hover'>
            <div style={{position: 'relative', top: '50%',
              transform: 'translateY(-50%)'}}>
              <div>
              {this.props.audition.attributes.show_name}
              </div>
              <div>
              {/* {this.props.audition.attributes.state} */}
              </div>
            </div>
          </div>
        </Link>
        )
    }
  }
}

export default connect(state => ({ currentActor: state.currentActor, auditionIndex: state.auditionIndex, tryouts: state.tryouts }))(Audition)
