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
import AllAuditionsContainer from './containers/AllAuditionsContainer'
import 'semantic-ui-css/semantic.min.css'
import './Audition.css'
import './index.css'
import TryoutShow from './components/TryoutShow'
import TheatersContainer from './containers/TheatersContainer'
import SeasonShow from './components/SeasonShow'
import PlayShow from './components/PlayShow'
import AuditionConfirmed from './components/AuditionConfirmed'


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
      <div className="content">
        <Switch>
          <Route exact path="/actor/audition-home/audition-journals/:id"/>
          <Route exact path="/theater/:theaterId/season/:seasonId" component={SeasonShow}/>
          <Route exact path="/audition/:id/resume_submit" component={ResumePDFSubmit}/>
          <Route exact path="/my-auditions" component={MyAuditionsContainer}/>
          <Route exact path="/find-auditions" component={AllAuditionsContainer}/>
          <Route exact path="/auditions/:id" component={AuditionShow}/>
          <Route exact path="/tryout/:id" component={TryoutShow}/>
          {/* <Route exact path="/actor/audition-journals" component={AuditionJournal}/> */}
          <Route exact path="/actor/1" component={ActorProfile}/>
          <Route exact path="/login" component={Login} />
          <Route exact path="/sign-up" component={SignUp} />
          <Route exact path="/audition/:id/audition-confirmation" component={AuditionConfirmation} />
          <Route exact path="/" component={ActorHomeContainer} />
          <Route exact path="/theaters"
        component={TheatersContainer}/>
          <Route exact path="/theater/:theaterId/season/:seasonId/show/:showId"
        component={PlayShow}/>
          <Route exact path="/audition/:id/audition-confirmation/confirmed"
        component={AuditionConfirmed}/>
          <Route exact path="/my-auditions/tryouts/:id"
        component={TryoutShow}/>
        </Switch>
      </div>
    )
  }
}

export default connect(null, { loadInitialActorState })(Audition)
