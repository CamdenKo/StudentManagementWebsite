import React from 'react'
import { connect } from 'react-redux'

function AddStudent(props){
  return(
    <div class="row">
      <form class="col s12">
        <div class="row">
          <div class="input-field col s12">
            <input id="name" type="text" class="validate" />
            <label for="name">Name</label>
          </div>
          <div class="input-field col s6">
            <input id="email" type="text" class="validate" />
            <label for="email">Email</label>
          </div>
        </div>
        <div className='row'>
          <div class="input-field col s12">
            <select>
              <option value="" disabled selected>Select Campus</option>
              <option value="1">Option 1</option>
            </select>
            <label>Materialize Select</label>
          </div>
        </div>
      </form>
    </div>
  )
}

function mapStateToProps(state,oldProps){
  return{
    defaultCampus: oldProps.campus || 1
  }
}
