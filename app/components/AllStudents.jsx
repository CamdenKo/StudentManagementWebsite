import React from 'react'
import { connect } from 'react-redux'
import AddStudent from './AddStudent'
import { deleteStudent, toggleEditStudent} from '../store'
import { Dropdown , NavItem, Button, Modal} from 'react-materialize'
import EditStudent from './EditStudent'
// import Student from './Student'

function AllStudents(props){
  return(
    <div>
       <ul className = 'collection with-header'>

         <li className = 'collection-header center'><h4>Students</h4></li>

        {

          props.students.map(student => {
            if(student.name){
              return(
              <li key = {student.id} className = 'collection-item avatar'>
                <img src = {student.imageUrl} alt = {student.name} className = 'circle'/>
                <span className = 'title'>{student.name}</span>
                <p>
                    {student.campus.name} Campus
                </p>
                <div className = 'secondary-content'>
                  <Dropdown trigger={
                    <Button>Options</Button>
                  }>
                    <NavItem onClick = {() => props.toggleEdit(student.id)} >Edit</NavItem>
                    <NavItem onClick = {() => props.delStudent(student.id)}>Delete</NavItem>
                  </Dropdown>
                </div>
                <div className = 'row'>
                  <div className = 'col s12'>
                     {props.editStudent[student.id] && <EditStudent studentId = {student.id}/> }
                  </div>
                </div>
              </li>
            )}})
        }
      </ul>
      <Modal
          header='Add Student'
          trigger={
            <div className="fixed-action-btn">
              <a className="btn-floating btn-large red">
                <i className="large material-icons">add</i>
              </a>
            </div>
          }>
          <AddStudent />
      </Modal>
    </div>
  )
}

function mapStateToProps(state){
  return{
    students: state.students,
    fields: state.fields,
    editStudent: state.fields.editStudent
  }
}

function mapDispatchToProps(dispatch){
  return{
    delStudent(id){
      dispatch(deleteStudent(id))
    },
    toggleEdit(id){
      dispatch(toggleEditStudent(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllStudents)
