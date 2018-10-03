import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadTheaters } from '../actions/actions'
import Theater from '../components/Theater'
import '../Audition.css'

class TheatersContainer extends Component {

  componentDidMount() {
    this.props.loadTheaters()
  }

  mappedTheaters = () => {
    return this.props.theatersIndex.map(theater => {
      return <Theater theater={theater}/>
    })
  }

   render() {
     console.log(this.props.theatersIndex)
     return (
        <div>
          {this.mappedTheaters()}
        </div>
     )
   }
 }

 export default connect(state => ({ theatersIndex: state.theatersIndex}), { loadTheaters })(TheatersContainer)
