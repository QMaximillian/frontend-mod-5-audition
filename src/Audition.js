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
// import TheatersContainer from './containers/TheatersContainer'
import SeasonShow from './components/SeasonShow'
import PlayShow from './components/PlayShow'
import AuditionConfirmed from './components/AuditionConfirmed'
import LandingPage from './containers/LandingPage'
import NavbarNew from './components/NavbarNew'
// import { Redirect } from 'react-router-dom'



class Audition extends Component {

  state = {
    auth: {
      actor: {}
    }
  }

  handleLoginActor = (actor) => {
    const newAuth = {
        ...this.state.auth,
        actor: actor
    }
    this.setState({
      auth: newAuth
    }, () => console.log(this.state.auth.actor))
    localStorage.setItem('token', this.state.auth.actor.jwt)
    this.props.loadInitialActorState(this.state.auth.actor.actor_id)
    // fetchActor(this.state.auth.actor.actor_id).then(console.log)
  }

  handleLogout = () => {
    localStorage.removeItem('token')
    this.setState({
      auth: {
        actor: {}
      }
    })
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
          actor: resp
        }
      }, () => this.props.loadInitialActorState(this.state.auth.actor.actor_id)))
    }
   }

  render() {
    const loggedIn = !!this.state.auth.actor.actor_id
    console.log(loggedIn)
    return (
      <div className="content">
      <NavbarNew
      loggedIn={loggedIn}
      handleLogout={this.handleLogout}/>
        <Switch>
          <Route exact path="/" render={(props) => <LandingPage loggedIn={loggedIn} {...props}/>}/>
          <Route exact path="/theater/:theaterId/season/:seasonId" render={(props) => <SeasonShow loggedIn={loggedIn} {...props}/>}/>
          <Route exact path="/audition/:id/resume_submit" render={(props) => <ResumePDFSubmit loggedIn={loggedIn} {...props}/>}/>
          <Route exact path="/my-auditions" render={(props) => <MyAuditionsContainer loggedIn={loggedIn} {...props}/>}/>
          <Route exact path="/search" render={(props) => <SearchContainer loggedIn={loggedIn} {...props}/>}/>
          <Route exact path="/auditions/:id" render={(props) => <AuditionShow loggedIn={loggedIn} {...props}
          {...props}/>}/>
          <Route exact path="/tryout/:id" render={(props) => <TryoutShow loggedIn={loggedIn} {...props}/>}/>
          {/* <Route exact path="/actor/audition-journals" component={AuditionJournal}/> */}
          <Route exact path="/actor/1" render={(props) => <ActorProfile loggedIn={loggedIn} {...props}/>}/>
          <Route exact path="/login" render={(props) => <Login
            loggedIn={loggedIn} {...props}  handleLoginActor={this.handleLoginActor}/>} />
          <Route exact path="/sign-up" component={SignUp} />
          <Route exact path="/audition/:id/audition-confirmation" render={(props) => <AuditionConfirmation loggedIn={loggedIn} {...props}/>} />
          <Route exact path="/home" render={(props) => <ActorHomeContainer loggedIn={loggedIn} {...props}/>}/>
          {/* <Route exact path="/theaters"
        render={(props) => <TheatersContainer loggedIn={loggedIn} {...props}/>}/> */}
          <Route exact path="/theater/:theaterId/season/:seasonId/show/:showId"
        render={(props) => <PlayShow loggedIn={loggedIn} {...props}/>}/>
          <Route exact path="/audition/:id/audition-confirmation/confirmed"
        render={(props) => <AuditionConfirmed loggedIn={loggedIn} {...props}/>}/>
          <Route exact path="/my-auditions/tryouts/:id"
        render={(props) => <TryoutShow loggedIn={loggedIn} {...props}/>}/>
        </Switch>
      </div>
    )
  }
}

export default connect(null, { loadInitialActorState })(Audition)
