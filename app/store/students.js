import axios from 'axios'

const GOT_STUDENTS_FROM_SERVER = 'GOT_STUDENTS_FROM_SERVER'
const GET_STUDENT = 'GET_STUDENT'
const REMOVE_STUDENT = 'REMOVE_STUDENT'

export function gotStudentsFromServer(students){
  return{
    type: GOT_STUDENTS_FROM_SERVER,
    students
  }
}

export function getStudent(student){
  return{
    type: GET_STUDENT,
    student
  }
}

export function removeStudent(student){
  return{
    type: REMOVE_STUDENT,
    student
  }
}

export function fetchStudents() {
  return function thunk(dispatch){
    axios.get('/api/students')
    .then(res => res.data)
    .then(students => dispatch(gotStudentsFromServer(students)))
    .catch(console.error.bind(console))
  }
}

export function postStudent(name,email,campus){
  return function thunk(dispatch){
    axios.post('/api/students', {name, email, campus})
    .then(res => res.data)
    .then(student => {
      dispatch(getStudent(student))
    })
    .catch(console.error.bind(console))
  }
}

export function deleteStudent(id){
  return function thunk(dispatch){
    axios.delete(`/api/students/${id}`)
    .then(res => res.data)
    .then(student => dispatch(removeStudent(student)))
    .catch(console.error.bind(console))
  }
}

export default function studentReducer(state = [], action){
  switch(action.type){
    case GOT_STUDENTS_FROM_SERVER:
      return action.students
    case GET_STUDENT:
      return [...state, action.student]
    case REMOVE_STUDENT:
      return [...state].filter(function(student){
        return +student.id !== +action.student.id
      })
    default:
      return state
  }
}
