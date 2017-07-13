import { createStore, applyMiddleware, combineReducers } from 'redux';
import createLogger from 'redux-logger'; // https://github.com/evgenyrodionov/redux-logger
import thunkMiddleware from 'redux-thunk'; // https://github.com/gaearon/redux-thunk
import {composeWithDevTools} from 'redux-devtools-extension'

import students from './students'
import campuses from './campuses'
import studentField from './studentField'

const reducer = combineReducers({
  students,
  campuses,
  studentField,
})


export default createStore(reducer, composeWithDevTools(applyMiddleware(thunkMiddleware, createLogger())))

export * from './campuses'
export * from './students'
export * from './studentField'
