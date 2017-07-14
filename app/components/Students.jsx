import React from 'react'
import { connect } from 'react-redux'
import AddStudent from './AddStudent'
import {toggleAddStudent} from '../store'

function Students(props){
  return (
    <div>
      <ul className="collection">
        {
          props.students.filter(student => +student.campusId === +props.campusId).map(student => {

            return (
            <li key = {student.id} className="collection-item avatar">
              <img src={`${student.imageUrl}`} alt={`${student.name}`} className="circle" />
              <span className="title">{`${student.name}`}</span>
              <p>Email: {`${student.email}`} <br />
                Joined: {`${student.createdAt}`}
              </p>
            </li>
          )})
        }
      </ul>
    </div>
  )
}

function mapStateToProps(state, oldProps){
  return{
    students: state.students,
  }
}


export default connect(mapStateToProps)(Students)
