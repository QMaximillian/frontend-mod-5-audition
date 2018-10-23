import React, { Component } from 'react';
import './Audition.css';
import ActorHomeContainer from './containers/ActorHomeContainer'
import { loadInitialActorState } from './actions/actions'
import {connect} from 'react-redux'
import './Audition.css'
import Moment from 'react-moment'


class Audition extends Component {

  componentDidMount(){
    this.props.loadInitialActorState()

    // PUT MY AUDITIONS IN STORE
    //PUT AUDITIONS IN STORE
    //PUT RESUMES IN STORE
    //PUT MY RESUMES IN STORE
    //PUT MY AUDITION_JOURNALS IN STORE
    //PUT MY APPLIED TRYOUTS IN STORE
    //PUT MY TRYOUT AUDITIONS IN STORE
    //PUT RESUMES IN STORE
    //PUT MY DEFAULT RESUME IN STORE
  }

  render() {
    return (
      <div className="sitelayout">
        <ActorHomeContainer />
      </div>
    )
  }
}

export default connect(null, { loadInitialActorState })(Audition)
