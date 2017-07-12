import { createStore, applyMiddleware, combineReducers } from 'redux';
import createLogger from 'redux-logger'; // https://github.com/evgenyrodionov/redux-logger
import thunkMiddleware from 'redux-thunk'; // https://github.com/gaearon/redux-thunk

import students from './students'
import campuses from './campuses'

const reducer = combineReducers({
  students,
  campuses
})

export default createStore(reducer, applyMiddleware(thunkMiddleware, createLogger()))

export * from './campuses'
export * from './students'
