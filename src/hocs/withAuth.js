import React , { Component }from 'react'
import { Redirect } from 'react-router-dom'

const withAuth = (WrappedComponent) => {
  return class extends Component {
    render() {
      if (this.props.loggedIn) {
      return <WrappedComponent {...this.props}/>
    } else {
      return <Redirect to='/login' />
    }
}
}
}

export default withAuth
