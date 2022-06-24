import React from 'react'
import ReactDOM from 'react-dom/client'
import App from 'components/App'

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { reducers } from 'store/reducers'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'

const logger = createLogger()
const store = createStore(reducers, applyMiddleware(thunk, logger))

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <Provider store={store}>
    <App />
  </Provider>
)
