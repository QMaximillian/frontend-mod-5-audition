import React, { Component } from 'react';
import './Audition.css';
import ActorHomeContainer from './containers/ActorHomeContainer'
import { loadInitialActorState } from './actions/actions'
import {connect} from 'react-redux'
import './Audition.css'
import { Route, Switch } from 'react-router'
import Login from './components/Login'
import SignUp from './components/SignUp'
import ActorProfile from './components/ActorProfile'
import MyAuditionsContainer from './containers/MyAuditionsContainer'
import AuditionShow from './components/AuditionShow'
import AuditionConfirmation from './components/AuditionConfirmation'

import ResumePDFSubmit from './components/ResumePDFSubmit'
// import AllAuditionsContainer from './containers/AllAuditionsContainer'
import SearchContainer from './containers/SearchContainer'
import 'semantic-ui-css/semantic.min.css'
import './Audition.css'
import './index.css'
import TryoutShow from './components/TryoutShow'
import TheatersContainer from './containers/TheatersContainer'
import SeasonShow from './components/SeasonShow'
import PlayShow from './components/PlayShow'
import AuditionConfirmed from './components/AuditionConfirmed'



class Audition extends Component {


    // PUT MY AUDITIONS IN STORE
    //PUT AUDITIONS IN STORE
    //PUT RESUMES IN STORE
    //PUT MY RESUMES IN STORE
    //PUT MY AUDITION_JOURNALS IN STORE
    //PUT MY APPLIED TRYOUTS IN STORE
    //PUT MY TRYOUT AUDITIONS IN STORE
    //PUT RESUMES IN STORE
    //PUT MY DEFAULT RESUME IN STORE


  state = {
    auth: {
      currentActor: {}
    }
  }

  handleLoginActor = (actor) => {
    const newAuth = {
        ...this.state.auth,
        currentActor: actor
    }
    this.setState({
      auth: newAuth
    }, () => this.props.loadInitialActorState(this.state.auth.currentActor.actor))
  }

  componentDidMount() {
    if (localStorage.getItem('token')) {
      const options = {
        headers : {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: localStorage.getItem('token')
      }
    }
    fetch('http://localhost:3001/api/v1/reauth', options)
    .then(resp => resp.json())
    .then(resp =>
      this.setState({
        auth: {
          ...this.state.auth,
          currentActor: resp
        }
      }, () => this.props.loadInitialActorState(this.state.auth.currentActor.actor)))
     }
   }

  render() {
    const loggedIn = !!this.state.auth.currentActor.actor

    return (
      <div className="content">
        <Switch>
          <Route exact path="/theater/:theaterId/season/:seasonId" render={() => <SeasonShow loggedIn={loggedIn}/>}/>
          <Route exact path="/audition/:id/resume_submit" render={() => <ResumePDFSubmit loggedIn={loggedIn}/>}/>
          <Route exact path="/my-auditions" render={() => <MyAuditionsContainer loggedIn={loggedIn}/>}/>
          <Route exact path="/search" render={() => <SearchContainer loggedIn={loggedIn}/>}/>
          <Route exact path="/auditions/:id" render={() => <AuditionShow loggedIn={loggedIn}/>}/>
          <Route exact path="/tryout/:id" render={() => <TryoutShow loggedIn={loggedIn}/>}/>
          {/* <Route exact path="/actor/audition-journals" component={AuditionJournal}/> */}
          <Route exact path="/actor/1" render={() => <ActorProfile loggedIn={loggedIn}/>}/>
          <Route exact path="/login" render={() => <Login
            loggedIn={loggedIn}  handleLoginActor={this.handleLoginActor}/>} />
          <Route exact path="/sign-up" component={SignUp} />
          <Route exact path="/audition/:id/audition-confirmation" render={() => <AuditionConfirmation loggedIn={loggedIn}/>} />
          <Route exact path="/home" render={() => <ActorHomeContainer loggedIn={loggedIn}/>}/>
          {/* <Route exact path="/theaters"
        render={() => <TheatersContainer loggedIn={loggedIn}/>}/> */}
          <Route exact path="/theater/:theaterId/season/:seasonId/show/:showId"
        render={() => <PlayShow loggedIn={loggedIn}/>}/>
          <Route exact path="/audition/:id/audition-confirmation/confirmed"
        render={() => <AuditionConfirmed loggedIn={loggedIn}/>}/>
          <Route exact path="/my-auditions/tryouts/:id"
        render={() => <TryoutShow loggedIn={loggedIn}/>}/>
        </Switch>
      </div>
    )
  }
}

export default connect(null, { loadInitialActorState })(Audition)
