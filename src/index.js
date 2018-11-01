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
// import Login from './components/Login'
//
// import ActorHomeContainer from './containers/ActorHomeContainer'
// // import AuditionJournal from './components/AuditionJournal'
// import SignUp from './components/SignUp'
// import ActorProfile from './components/ActorProfile'
// import MyAuditionsContainer from './containers/MyAuditionsContainer'
// import AuditionShow from './components/AuditionShow'
// import AuditionConfirmation from './components/AuditionConfirmation'
//
// import ResumePDFSubmit from './components/ResumePDFSubmit'
// import AllAuditionsContainer from './containers/AllAuditionsContainer'
// import 'semantic-ui-css/semantic.min.css'
// import './Audition.css'
// import './index.css'
// import TryoutShow from './components/TryoutShow'
// import TheatersContainer from './containers/TheatersContainer'
// import SeasonShow from './components/SeasonShow'
// import PlayShow from './components/PlayShow'
// import AuditionConfirmed from './components/AuditionConfirmed'
import Audition from './Audition'


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
        <Audition />
      </Switch>
    </div>

    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)
