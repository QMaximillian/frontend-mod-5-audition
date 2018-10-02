import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadTheaters } from '../actions/actions'

class TheatersContainer extends Component {

  componentDidMount() {
    this.props.loadTheaters()
  }

   render() {
     console.log(this.props.theatersIndex)
     return (
        <div>
          TheatersContainer
        </div>
     )
   }
 }

 export default connect(state => ({ theatersIndex: state.theatersIndex}), { loadTheaters })(TheatersContainer)
