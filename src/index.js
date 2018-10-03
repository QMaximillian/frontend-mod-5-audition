import React from 'react'
import ReactDOM from 'react-dom'
import { createBrowserHistory } from 'history'
import { applyMiddleware, compose, createStore } from 'redux'
import thunk from 'redux-thunk'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import { Provider } from 'react-redux'
import { Route, Switch } from 'react-router' // react-router v4
import { ConnectedRouter } from 'connected-react-router'
import { actorReducer, initialState } from './reducers/index'
import Navbar from './components/Navbar'
import Login from './components/Login'
import Audition from './Audition'
import ActorHomeContainer from './containers/ActorHomeContainer'
// import AuditionJournal from './components/AuditionJournal'
import SignUp from './components/SignUp'
import ActorProfile from './components/ActorProfile'
import MyAuditionsContainer from './containers/MyAuditionsContainer'
import AuditionShow from './components/AuditionShow'
import AuditionConfirmation from './components/AuditionConfirmation'
import ResumeSubmit from './components/ResumeSubmit'
import AllAuditionsContainer from './containers/AllAuditionsContainer'
import 'semantic-ui-css/semantic.min.css'
import './Audition.css'
import './index.css'
import TryoutShow from './components/TryoutShow'
import TheatersContainer from './containers/TheatersContainer'
import SeasonShow from './components/SeasonShow'
import PlayShow from './components/PlayShow'


const history = createBrowserHistory()


const rootReducer = actorReducer

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    connectRouter(history)(rootReducer),
  initialState,
    composeEnhancers(
      applyMiddleware(thunk,
        routerMiddleware(history)
      )
    )
)



ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div className="top-level">
        <Navbar />
        <Switch>
          <Route exact path="/actor/audition-home/audition-journals/:id"/>
          <Route exact path="/theater/:theaterId/season/:seasonId" component={SeasonShow}/>
          <Route exact path="/audition/:id/resume_submit" component={ResumeSubmit}/>
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
        </Switch>
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)
