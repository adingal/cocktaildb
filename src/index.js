import React from 'react'
import ReactDOM from 'react-dom/client'
import App from 'components/App'

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { reducers } from 'store/reducers'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'

const logger = createLogger()
let store = createStore(reducers, applyMiddleware(thunk))

// Re-assign store if development environment
if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
  store = createStore(reducers, applyMiddleware(thunk, logger))
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <Provider store={store}>
    <App />
  </Provider>
)
