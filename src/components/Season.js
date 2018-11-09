import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Season extends Component {
   render() {
     return (
       <Link to={`theater/${this.props.season.theater_id}/season/${this.props.season.id}`}>
        <div className="card">
          <div style={{textAlign: 'center', fontSize: '2rem'}}>
          {this.props.season.season_name}<br />
          {/* {this.props.season.year} */}
          </div>
        </div>
      </Link>
     )
   }
 }
