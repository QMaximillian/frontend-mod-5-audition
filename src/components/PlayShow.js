import React, { Component } from 'react'
import { loadShow } from '../actions/actions'
import { connect } from 'react-redux'
import { Loader, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class PlayShow extends Component {

  componentDidMount(){
    this.props.loadShow(this.props.match.params.showId)
  }



   render() {
     console.log(this.props);

     const { show } = this.props
     if (show.attributes) {
       return (
          <div className="tryout-show-grid profile-card">
          <div>
            <div
              className="play-show-item" style={{textAlign: 'left', fontSize: '2em', paddingBottom: '30px'}}>
              {show.attributes.show_name}
              {/* <Link to={`audition/${this.props.match.params.showId}/resume_submit`}>
                <Button style={{float: 'right'}}>
                  Submit for this Audition
                </Button>
              </Link> */}
            </div>
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
