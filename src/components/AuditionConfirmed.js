import React from 'react'
import withAuth from '../hocs/withAuth'


const AuditionConfirmed = () => {

    return (
      <div>
        <div className="profile-card">
          <h1 style={{textAlign: 'center', marginTop: '100px'}}>Audition Confirmed</h1>
        </div>
      </div>
    )
}

export default withAuth(AuditionConfirmed)
