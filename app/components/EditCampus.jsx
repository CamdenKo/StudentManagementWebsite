import React from 'react'
import { connect } from 'react-redux'
import { putCampus, deleteCampus, toggleEditCampus} from '../store'

function EditCampus(props){
  return(
    <div className="row">
      <form className="col s12" onSubmit = {props.changeCampus }>
        <div className="row">
          <div className="input-field col s12">
            <input id="name" type="text"   className="validate" />
            <label>Name</label>
          </div>
        </div>
        <div className = 'row'>
          <div className="input-field col s12">
            <input id="imageUrl" type="text" className="validate" />
            <label>Image Url</label>
          </div>
        </div>
        <div className = 'row'>
          <div className='col s12'>
            <button type = 'submit' className = 'btn waves-effect waves-light'>
              Submit<i className = 'material-icons right'>send</i>
            </button>
          </div>
        </div>
        <div className = 'row'>
          <div className = 'col s12'>
            <button onClick = {props.deleteCampus} className = 'red btn waves-effect waves-dark'>
              Delete
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

function mapStateToProps(state){
  return{
  }
}

function mapDispatchToProps(dispatch, oldProps){
  return {
    changeCampus(evt){
      evt.preventDefault()
      dispatch(putCampus(oldProps.campusId, evt.target.name.value, evt.target.imageUrl.value))
      dispatch(toggleEditCampus(oldProps.campusId))
    },
    deleteCampus(evt){
      evt.preventDefault()
      dispatch(deleteCampus(oldProps.campusId))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(EditCampus)
