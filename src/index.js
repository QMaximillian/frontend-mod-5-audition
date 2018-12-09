import React from 'react'
import ReactDOM from 'react-dom'
import { createBrowserHistory } from 'history'
import { applyMiddleware, compose, createStore } from 'redux'
import thunk from 'redux-thunk'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import { Provider } from 'react-redux'
import { Switch } from 'react-router' // react-router v4
import { ConnectedRouter } from 'connected-react-router'
import { actorReducer, initialState } from './reducers/index'
// import Navbar from './components/Navbar'
// import NavbarNew from './components/NavbarNew'
import Audition from './Audition'
import "./index.css"


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


        <Switch>
          <Audition />
        </Switch>


    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)
