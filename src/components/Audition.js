import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'


class Audition extends Component {


    availableAuditions = () => {
      if (this.props.tryouts === undefined || this.props.tryouts.length === 0) {
      return (
         <div>
             <Link to={`/auditions/${this.props.audition.id}`}>
             {this.props.audition.attributes.show_name}
             {this.props.audition.attributes.audition_time}
             {this.props.audition.attributes.location}
           </Link>
         </div>
      )
    } else {
      return this.props.tryouts.map(tryout => {
        if (tryout.audition_id === parseInt(this.props.audition.id)) {
          return (
            <div>
                {this.props.audition.attributes.show_name}
                {this.props.audition.attributes.audition_time}
                {this.props.audition.attributes.location}
            </div>
          )
        } else {
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
      })
    }
  }


   render() {
     console.log("Audition");
     return (
      <div>
        {this.availableAuditions()}
      </div>
      )
    }
}

export default connect(state => ({ tryouts: state.tryouts }))(Audition)
