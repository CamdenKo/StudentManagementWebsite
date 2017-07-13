import React from 'react'
import { connect } from 'react-redux'
import  {postStudent, toggleField} from '../store'

function AddStudent(props){
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
          <div className = 'col s12'>
            <button type = 'submit' className = 'btn waves-effect waves-light'>
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
    campusId: oldProps.campusId
  }
}

const mapDispatchToProps = function(dispatch, oldProps){
  return{
    sendStudent(evt){
      evt.preventDefault()
      dispatch(postStudent(evt.target.name.value,evt.target.email.value,oldProps.campusId,evt.target.imageUrl.value))
      dispatch(toggleField(oldProps.campusId))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddStudent)
