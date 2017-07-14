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
        <BrowserRouter>
          <main>
            <div>
              <Route path='/' component={Navbar} />
              <div className='container'>
                <Switch>
                  <Route exact path='/students' component={AllStudents} />
                  <Route exact path='/campuses' component={AllCampuses} />
                  <Redirect from='/' to='/campuses' />
                </Switch>
              </div>
            </div>
          </main>
        </BrowserRouter>
      </Provider>
    )
  }
}
