import React from 'react'
import { connect } from 'react-redux'
import  {postStudent, toggleAddStudent} from '../store'
import {Input} from 'react-materialize'

function AddStudent(props){
  const options = props.campuses.map(campus => (
                    <option value = {campus.id} key = {campus.id}>{campus.name}</option>
                  ))
  return(
    <div className="row">
      <form className="col s12" onSubmit = {props.sendStudent}>
        <div className="row">
          <div className="input-field col s12">
            <input id="name" type="text" className="validate" />
            <label>Name</label>
          </div>
        </div>
        <div className = 'row'>
          <div className="input-field col s12">
            <input id="email" type="text" className="validate" />
            <label>Email</label>
          </div>
        </div>
        <div className = 'row'>
          <div className="input-field col s12">
            <input id="imageUrl" type="text" className="validate" />
            <label>Image Url</label>
          </div>
        </div>
        <div className = 'row'>
          {
            props.campusId ? (<Input disabled id = 'selectCampus' s = {12} type = 'select' label = 'Select Campus' defaultValue = {props.campusId}>
              {
                options
              }
            </Input>
            ) : (
            <Input id = 'selectCampus' s = {12} type = 'select' label = 'Select Campus'>
              {
                options
              }
            </Input>
            )
          }
        </div>
        <div className = 'row'>
          <div className = 'col s12'>
            <button type = 'submit' className = 'btn waves-effect waves-light modal-close'>
              Submit<i className = 'material-icons right'>send</i>
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

function mapStateToProps(state,oldProps){
  return{
    campuses: state.campuses,
    campusId: oldProps.campusId || 0
  }
}

const mapDispatchToProps = function(dispatch, oldProps){
  return{
    sendStudent(evt){
      evt.preventDefault()
      dispatch(postStudent(evt.target.name.value,evt.target.email.value,evt.target.selectCampus.value,evt.target.imageUrl.value))
      if(oldProps.campusId) dispatch(toggleAddStudent(oldProps.campusId))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddStudent)
