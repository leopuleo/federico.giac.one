import React from 'react'
import PropTypes from 'prop-types'
import { Router } from 'react-router-dom'
import { Provider } from 'react-redux'

import createStore from './src/store'

exports.replaceRouterComponent = ({ history }) => {
  const store = createStore()

  const ConnectedRouterWrapper = ({ children }) => (
    <Provider store={store}>
      <Router history={history}>{children}</Router>
    </Provider>
  )

  ConnectedRouterWrapper.propTypes = {
    children: PropTypes.element.isRequired
  }

  return ConnectedRouterWrapper
}

exports.onClientEntry = () => {
}
