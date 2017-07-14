import React from 'react'
import {connect} from 'react-redux'
import {Modal} from 'react-materialize'
import {toggleAddStudent, toggleEditCampus} from '../store'

import Students from './Students'
import AddCampus from './AddCampus'
import AddStudent from './AddStudent'
import EditCampus from './EditCampus'

function AllCampuses(props){
  return(
    <div>
      <ul className = 'collection with-header'>
        <li className = 'collection-header center'><h4>Campuses</h4></li>
      </ul>
      <div className = 'row'>
        {
          props.campuses.map(campus => (
          <div key = {campus.id} className = 'col s12 m6 l4'>
            <div  className = "card">
              <div className="card-image waves-effect waves-block waves-light">
                <img className="activator" src={`${campus.imageUrl}`}  />
              </div>
              <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">{campus.name}<i className="material-icons right">more_vert</i></span>
                <p><a>See Students</a></p>
              </div>
              <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">{campus.name}<i className="material-icons right">close</i></span>
                <Students campusId={campus.id} />
                <div>
                  <div className='left'>
                    <a onClick={() => props.toggleStudentState(campus.id)} className="waves-effect waves-teal btn-flat center">Add Student</a>
                  </div>
                  <div className='right'>
                    <a onClick = {() => props.toggleCampusState(campus.id)} className='waves-effect waves-teal btn-flat center'>Edit Campus</a>
                  </div>
                </div>
                {
                  console.log('student field? ', props.studentField[campus.id])
                }
                {
                  props.studentField[campus.id] && <AddStudent campusId={campus.id} />
                }
                {
                  props.campusField[campus.id] && <EditCampus campusId={campus.id} />
                }
              </div>
            </div>
          </div>
          ))
        }
      </div>

      <Modal
        header='Add Campus'
        trigger={
          <div className="fixed-action-btn">
            <a className="btn-floating btn-large red">
              <i className="large material-icons">add</i>
            </a>
          </div>
        }>
        <AddCampus />
      </Modal>
    </div>

  )
}

function mapStateToProps(state){
  // console.log(state.campuses, state.fields)
  return {
    fields: state.fields,
    campuses: state.campuses,
    studentField: state.fields.student,
    campusField: state.fields.campus,
  }
}

function mapDispatchToProps(dispatch){
  return{
    toggleStudentState(id){
      dispatch(toggleAddStudent(id))
    },
    toggleCampusState(id){
      dispatch(toggleEditCampus(id))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(AllCampuses)
