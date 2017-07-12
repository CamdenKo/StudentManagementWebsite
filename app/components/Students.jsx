import React from 'react'
import { connect } from 'react-redux'
import AddStudent from './AddStudent'

export function Students(props){
  return (
    <div>
      <ul className="collection">
        {
          props.students.filter(student => +student.campusId === +props.campusId).map(student => (
            <li className="collection-item avatar">
              <img src={`${student.imageUrl}`} alt={`${student.name}`} className="circle" />
              <span className="title">{`${student.name}`}</span>
              <p>Email: {`${student.email}`} <br />
                Joined: {`${student.createdAt}`}
              </p>
            </li>
          ))
        }
      </ul>
      <div className = 'center'>
        <a className="btn-floating waves-effect waves-light red"><i className="large material-icons">add</i></a>
      </div>
      {
        props.showAdd ? <AddStudent campus = {props.campusId} /> : null
      }
    </div>
  )
}

function mapStateToProps(state, oldProps){
  return{
    students: state.students,
    campusId: oldProps.campusId,
    showAdd: false
  }
}

export default connect(mapStateToProps)(Students)
