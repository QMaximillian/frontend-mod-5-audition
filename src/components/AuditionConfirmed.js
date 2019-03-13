import React, { Component } from 'react'
import withAuth from '../hocs/withAuth'


class AuditionConfirmed extends Component {

  render() {
  return(
    <div>
      <div className="profile-card">
        <h1 style={{textAlign: 'center', marginTop: '100px'}}>Audition Confirmed</h1>
      </div>
    </div>
  )
}
}

export default withAuth(AuditionConfirmed)
