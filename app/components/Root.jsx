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

  render(){
    return(
      <Provider store={store}>
        <div>
          <Navbar />
          <main>
            <div className = 'container'>
              <div className = 'col s12 m9 l10'>
                <BrowserRouter>
                  <Switch>
                    <Route exact path='/campuses' component = {AllCampuses}/>
                    <Route exact path = '/students' component = {AllStudents}/>
                    <Redirect from = '/' to = '/campuses'/>
                  </Switch>
                </BrowserRouter>
              </div>
            </div>

          </main>
        </div>
      </Provider>
    )
  }
}
