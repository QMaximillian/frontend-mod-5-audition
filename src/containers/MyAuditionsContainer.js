import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { Loader } from 'semantic-ui-react'
import "../Audition.css"
import { loadAudition } from '../actions/actions'


class MyAuditionsContainer extends Component {


  mappedAuditions = () => {

    return this.props.currentActor.attributes.auditions.map(audition => {
      return (<div>
                <div>
                  {audition.show_name}
                </div>
                  {this.mappedTryout(audition)}
              </div>

            )
    })
  }

  mappedTryout = (audition) => {
  const tryouts = this.props.currentActor.attributes.tryouts.filter(tryout => {
       return tryout.audition_id === audition.id
    })

    return tryouts.map(tryout => {
      return (
        <Link to={`tryout/${tryout.id}`}>
        <div>
          {tryout.audition_time}
        </div>
        </Link>
      )
    })
  }

   render() {
      // if (typeof this.props.currentActor.auditions === 'undefined') {
      //
      if (typeof this.props.currentActor.attributes === 'undefined') {
          return (
            <div><Loader active inline='centered' /></div>
          )
        } else if (this.props.currentActor.attributes.tryouts.length === 0){
        return(
          <h1 style={{textAlign: 'center', fontSize: '2rem'}}>
            {this.props.currentActor.attributes.first_name} has no auditions
          </h1>
        )
      } else {
       return (
         <div>
           <div style={{textAlign: "center", fontSize: "2em"}}>
           {this.props.currentActor.attributes.first_name}'s Auditions
          </div>
          <div className="card-container">
            {this.mappedAuditions()}
          </div>
          </div>
       )
     }
   }


 }


 export default connect(state => ({ auditions: state.auditions, tryouts: state.tryouts, currentActor: state.currentActor }), { loadAudition })(MyAuditionsContainer)
