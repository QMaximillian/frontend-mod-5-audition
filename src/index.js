import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { auditionStore } from './reducers/auditionStore'
import Root from './components/Root'

const store = createStore(auditionStore, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
render(
  <Root store={store} />,
  document.getElementById('root')
)
