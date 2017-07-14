const TOGGLE_ADD_STUDENT = 'TOGGLE_ADD_STUDENT'
const TOGGLE_EDIT_CAMPUS = 'TOGGLE_EDIT_CAMPUS'
const TOGGLE_EDIT_STUDENT = 'TOGGLE_EDIT_STUDENT'

export function toggleAddStudent(campusId){
  return{
    type: TOGGLE_ADD_STUDENT,
    campusId
  }
}

export function toggleEditCampus(campusId){
  return{
    type: TOGGLE_EDIT_CAMPUS,
    campusId
  }
}

export function toggleEditStudent(studentId){
  return{
    type: TOGGLE_EDIT_STUDENT,
    studentId
  }
}

export default function fieldReducer(state = {student:{},campus:{}, editStudent:{}}, action){
  let out = Object.assign({}, state)
  switch (action.type){
    case TOGGLE_ADD_STUDENT:
      out.student[action.campusId] = out.student[action.campusId] ? false : true
      out.campus[action.campusId] = false
      return out
    case TOGGLE_EDIT_CAMPUS:
      out.campus[action.campusId] = out.campus[action.campusId] ? false: true
      out.student[action.campusId] = false
      return out
    case TOGGLE_EDIT_STUDENT:
      out.editStudent[action.studentId] = out.editStudent[action.studentId] ? false: true
      return out
    default:
      return state
  }
}
