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
import AuditionJournal from './components/AuditionJournal'
import ActorProfile from './components/ActorProfile'
import MyAuditionsContainer from './containers/MyAuditionsContainer'
import AuditionShow from './components/AuditionShow'
import AuditionConfirmation from './components/AuditionConfirmation'
import ResumeSubmit from './components/ResumeSubmit'
import AllAuditionsContainer from './containers/AllAuditionsContainer'


const history = createBrowserHistory()


const rootReducer = actorReducer

const store = createStore(
    connectRouter(history)(rootReducer),
  initialState,
    compose(
      applyMiddleware(thunk,
        routerMiddleware(history)
      )
    )
)


ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/actor/audition-home/audition-journals/:id"/>
          <Route exact path="/audition/:id/resume_submit" component={ResumeSubmit}/>
          <Route exact path="/auditions" component={MyAuditionsContainer}/>
          <Route exact path="/find-auditions" component={AllAuditionsContainer}/>
          <Route exact path="/auditions/:id" component={AuditionShow}/>
          <Route exact path="/actor/audition-journals" component={AuditionJournal}/>
          <Route exact path="/actor/1" component={ActorProfile}/>
          <Route exact path="/home" component={ActorHomeContainer}/>
          <Route exact path="/" render={() => <Audition />} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/audition/:id/audition-confirmation" component={AuditionConfirmation} />
        </Switch>
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)
