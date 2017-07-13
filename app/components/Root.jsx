import React, { Component } from 'react';
import Navbar from './Navbar'
import {Router, Switch, BrowserRouter, Route, Redirect} from 'react-router-dom'
import { Provider } from 'react-redux'

import AllStudents from './AllStudents'
import AllCampuses from './AllCampuses'

import store, {fetchCampuses, fetchStudents} from '../store'

export default class Root extends Component{

  componentDidMount(){
    store.dispatch(fetchStudents())
    store.dispatch(fetchCampuses())
  }

  render() {
    return (
      <Provider store={store}>
        <main>
          <BrowserRouter>
            <div>
              <Route path='/' component={Navbar} />
              <div className='container'>
                <div className='col s12 m9 l10'>
                  <Route exact path='/campuses' component={AllCampuses} />
                  <Route exact path='/students' component={AllStudents} />
                  <Redirect from='/' to='/campuses' />
                </div>
              </div>
            </div>
          </BrowserRouter>
        </main>
      </Provider>
    )
  }
}
