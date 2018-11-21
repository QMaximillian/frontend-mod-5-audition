import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadTheaters } from '../actions/actions'
import Theater from '../components/Theater'
import '../Audition.css'

class TheatersContainer extends Component {

  // Load all theaters into reducer
  componentDidMount() {
    this.props.loadTheaters()
  }

  // Map over all theaters and return a <Theater /> component for each theater
  mappedTheaters = () => {
    return this.props.theatersIndex.map(theater => {
      return <Theater key={theater.id} theater={theater}/>
    })
  }
  
   render() {
     return (
        <div>
          {this.mappedTheaters()}
        </div>
     )
   }
 }

 export default connect(state => ({ theatersIndex: state.theatersIndex}), { loadTheaters })(TheatersContainer)
