import React, { Component } from 'react'
import { loadShow } from '../actions/actions'
import { connect } from 'react-redux'
import { Loader } from 'semantic-ui-react'
import withAuth from '../hocs/withAuth'
// import { Link } from 'react-router-dom'

class PlayShow extends Component {

  componentDidMount(){
    this.props.loadShow(this.props.match.params.showId)
  }



   render() {
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

          </div>
       )
     } else {
     return (
       <Loader />
     )
    }
  }
}

export default withAuth(connect(state => ({ show: state.show }), { loadShow })(PlayShow))
