import axios from 'axios'

const GOT_STUDENTS_FROM_SERVER = 'GOT_STUDENTS_FROM_SERVER'
const GET_STUDENT = 'GET_STUDENT'
const REMOVE_STUDENT = 'REMOVE_STUDENT'
const EDIT_STUDENT = 'EDIT_STUDENT'

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

export function editStudent(student){
  return{
    type: EDIT_STUDENT,
    student
  }
}

export function putStudent(id, name, email, campusId, imageUrl){
  console.log('put',id,name,email,campusId,imageUrl)
  return function thunk(dispatch){
    axios.put(`/api/students/${id}`,{name, email, campusId, imageUrl})
    .then(res => res.data)
    .then(student => {
      console.log(student)
      dispatch(editStudent(student))
    })
    .catch(err => console.log(err))
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

export function postStudent(name,email,campusId,imageUrl){
  return function thunk(dispatch){
    axios.post('/api/students', {name, email, campusId,imageUrl})
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
    .then(student => {
      return dispatch(removeStudent(student))
    })
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
    case EDIT_STUDENT:
      let out = [...state]
      return out.map(stud => {
        if(stud.id == action.student.id) return action.student
        else rçeturn stud
      })
    default:
      return state
  }
}
