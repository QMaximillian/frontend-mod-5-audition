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
      } else {
       return (
          <div className="sitelayout">
      {this.mappedAuditions()}
          </div>
       )
     }
   }
 }


 export default connect(state => ({ appliedAuditions: state.appliedAuditions, tryouts: state.tryouts }))(MyAuditionsContainer)
