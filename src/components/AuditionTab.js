import React, { Component } from 'react'
import moment from 'moment'
import { connect } from 'react-redux'
import { loadAudition } from '../actions/actions.js'
import { Loader } from "semantic-ui-react";

class AuditionTab extends Component {


  // componentDidMount(){
    // this.props.loadAudition(this.props.tryout.audition_id)
  // }

    render() {

      if (this.props !== undefined) return <Loader />
      
      return (
        // <Link to={`audition/${props.audition.show_name}/`}>
        <tr>
          <th style={{textAlign: 'center'}}>{this.props.tryout.show_name}</th>
          <th style={{textAlign: 'center'}}>{this.props.tryout.location}</th>
          <th style={{textAlign: 'center'}}>{moment(this.props.tryout.audition_time).format("MM/DD/YYYY HH:mm A")}</th>
        </tr>
        // </Link>
      )
    }
}

export default connect(state => ({ audition: state.audition }), { loadAudition })(AuditionTab)
