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
import AuditionPreviewContainer from './containers/AuditionPreviewContainer'
import AuditionJournal from './components/AuditionJournal'
import ActorProfile from './components/ActorProfile'
import AuditionContainer from './containers/AuditionContainer'
import AuditionShow from './components/AuditionShow'


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
          {/* <Route exact path='/actor/audition/:id/submit' > */}
          <Route exact path="/auditions" component={AuditionContainer}/>
          <Route exact path="/auditions/:id" component={AuditionShow}/>
          <Route exact path="/actor/audition-home/audition-journals" component={AuditionJournal}/>
          <Route exact path="/actor/audition-home/profile" component={ActorProfile}/>
          <Route exact path="/actor/audition-home" component={AuditionPreviewContainer}/>
          <Route exact path="/" render={() => <Audition />} />
          <Route exact path = "/login" component={Login} />
        </Switch>
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)
