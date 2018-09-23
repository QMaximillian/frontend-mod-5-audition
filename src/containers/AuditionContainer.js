import React, { Component } from 'react'
import Audition from '../components/Audition.js'


export default class AuditionContainer extends Component {

  state = {
    auditions: []
  }

mappedAuditions = () => {
  return this.state.auditions.map(audition => {
    return <Audition key={audition.id} audition={audition}/>
  })
}
componentDidMount(){
  fetch('http://localhost:3001/api/v1/auditions').then(resp => resp.json()).then(resp => {
    this.setState({
      auditions: resp.data
    }, () => console.log(this.state.auditions))
  })
}

   render() {
     return (
        <div>
          {this.mappedAuditions()}
        </div>
     )
   }
 };
