import React, { Component } from 'react'
import MyAudition from '../components/MyAudition.js'
import { connect } from 'react-redux'
import { Loader } from 'semantic-ui-react'
import "../Audition.css"


class MyAuditionsContainer extends Component {



mappedAuditions = () => {
  return this.props.appliedAuditions.map(audition => {
    return <MyAudition key={audition.id} audition={audition} />
  })
}

componentDidMount(){
    console.log(this.props);
}

   render() {
      if (typeof this.props.appliedAuditions === 'undefined') {
        return (
          <div><Loader active inline='centered' /></div>
        )
      } else if (this.props.appliedAuditions.length === 0) {
        return(
          <div>
            {this.props.currentActor.attributes.first_name} has no auditions
          </div>
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


 export default connect(state => ({ appliedAuditions: state.appliedAuditions, tryouts: state.tryouts, currentActor: state.currentActor }))(MyAuditionsContainer)
