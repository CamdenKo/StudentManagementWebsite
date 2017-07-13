import React from 'react'
import { connect } from 'react-redux'
import {postCampus} from '../store'

function AddCampus(props){
  return(
    <div className = 'row'>
      <form className = 'col s12' onSubmit = {props.sendCampus}>
        <div className = 'row'>
          <div className = 'input-field col s12'>
            <input id = 'name' type = 'text' className = 'validate'/>
            <label>Campus Name</label>
          </div>
        </div>
        <div className = 'row'>
          <div className = 'input-field col s12'>
            <input id = 'imageUrl' type = 'text' className = 'validate'/>
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
  return {}
}

function mapDispatchToProps(dispatch){
  return {
    sendCampus(evt){
      console.log('sendCampus')
      evt.preventDefault()
      dispatch(postCampus(evt.target.name.value, evt.target.imageUrl.value))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddCampus)
