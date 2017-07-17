import React from 'react'
import { Input } from 'react-materialize'
import { connect } from 'react-redux'
import { putStudent, toggleEditStudent } from '../store'

//Small thing, but maybe try and make the add student window bigger?  It took me awhile to figure out that
//the submit button was out of sight and you had to scroll to see it haha
function EditStudent(props){
  const options = props.campuses.map(campus => (
                     <option value = {campus.id} key = {campus.id}>{campus.name}</option>
                  ))
  return(
    <div className="row">
      <form id = {props.student.id} className="col s12" onSubmit = {props.updateStudent}>
        <div className="row">
          <div className="input-field col s12">
            <input defaultValue = {props.student.name} id="name" type="text" className="validate" />
            <label className = 'active'>Name</label>
          </div>
        </div>
        <div className = 'row'>
          <div className="input-field col s12">
            <input defaultValue = {props.student.email} id="email" type="text" className="validate" />
            <label className = 'active'>Email</label>
          </div>
        </div>
        <div className = 'row'>
          <div className="input-field col s12">
            <input defaultValue = {props.student.imageUrl} id="imageUrl" type="text" className="validate" />
            <label className = 'active'>Image Url</label>
          </div>
        </div>
        <div className = 'row'>
          <Input id = 'selectCampus' s = {12} type = 'select' defaultValue = {props.student.campusId} label = 'Select Campus'>
            {
              options
            }
          </Input>
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

function mapStateToProps(state, oldProps){
  return{
    campuses: state.campuses,
    student: state.students.find((stud) => stud.id === oldProps.studentId)
  }
}

function mapDispatchToProps(dispatch, oldProps){
  return{
    updateStudent(evt){
      evt.preventDefault()
      dispatch(putStudent(oldProps.studentId,evt.target.name.value, evt.target.email.value, evt.target.selectCampus.value, evt.target.imageUrl.value))
      dispatch(toggleEditStudent(oldProps.studentId))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditStudent)
