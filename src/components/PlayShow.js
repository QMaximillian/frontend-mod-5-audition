import React, { Component } from 'react'
import { fetchShow } from '../adapters/actorAdapter'
import { loadShow } from '../actions/actions'
import { connect } from 'react-redux'
import { Loader } from 'semantic-ui-react'
class PlayShow extends Component {

  componentDidMount(){
    this.props.loadShow(this.props.match.params.showId)
  }



   render() {
     console.log(this.props);

     const { show } = this.props
     if (show.attributes) {
       return (
          <div className="play-show-grid profile-card">
            <div
              className="play-show-item" style={{textAlign: 'left', fontSize: '2em'}}>
              {show.attributes.show_name}
            </div>
            <div style={{textDecoration: 'underline', fontSize: '1em'}}>
              Description
            </div>
            {show.attributes.show_description}
            {show.attributes.location}
          </div>
       )
     } else {
     return (
       <Loader />
     )
    }
  }
}

export default connect(state => ({ show: state.show }), { loadShow })(PlayShow)
