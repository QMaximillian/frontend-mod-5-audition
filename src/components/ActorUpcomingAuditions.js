import React, { Component } from 'react'
import { Loader } from 'semantic-ui-react'
import Audition from '../Audition'


class ActorUpcomingAuditions extends Component {

mappedUpcoming = () => {
  return this.props.currentActor.attributes.tryout_auditions.map(tryout_audition => {
    console.log(tryout_audition);
      return <Audition audition={tryout_audition}/>
  })
}

render(){
  if (this.props.currentActor.attributes !== undefined) {
    return(
      <div>
      </div>
    )
  } else {
    return (
      <div><Loader /></div>
    )
  }
  }
}
export default ActorUpcomingAuditions
