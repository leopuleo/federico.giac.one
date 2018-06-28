import { applyMiddleware, compose, createStore } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'

export default () => {
  const loadDevTools = () =>
    process.env.NODE_ENV === 'development' && window.devToolsExtension
      ? window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
      : f => f
  return createStore(
    rootReducer,
    compose(
      applyMiddleware(thunk),
      loadDevTools()
    )
  )
}
