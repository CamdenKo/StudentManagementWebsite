import React from 'react'
import { connect } from 'react-redux'
// import Student from './Student'

function AllStudents(props){
  return(
    <div>
      {
        props.students.map(student => <div>{`${student.name}`}</div>)
      }
    </div>
  )
}

function mapStateToProps(state, oldProps){
  return{
    students: state.students
  }
}

export default connect(mapStateToProps)(AllStudents)
