import React from 'react'
import { connect } from 'react-redux'
import AddStudent from './AddStudent'
import {toggleField} from '../store'

export function Students(props){
  return (
    <div>
      <ul className="collection">
        {
          props.students.filter(student => +student.campusId === +props.campusId).map(student => (
            <li key = {student.id} className="collection-item avatar">
              <img src={`${student.imageUrl}`} alt={`${student.name}`} className="circle" />
              <span className="title">{`${student.name}`}</span>
              <p>Email: {`${student.email}`} <br />
                Joined: {`${student.createdAt}`}
              </p>
            </li>
          ))
        }
      </ul>
      <div className = 'left'>
        <a onClick = {() => props.toggleState(props.campusId)} className="waves-effect waves-teal btn-flat center">Add Student</a>
      </div>
      {
        props.studentField[props.campusId] && <AddStudent campusId = {props.campusId}/>
      }
    </div>
  )
}

function mapStateToProps(state, oldProps){
  return{
    students: state.students,
    campusId: oldProps.campusId,
    showAdd: false,
    studentField: state.studentField
  }
}

function mapDispatchToProps(dispatch){
  return{
    toggleState(id){
      dispatch(toggleField(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Students)
