import axios from 'axios'

const GOT_CAMPUSES_FROM_SERVER = 'GOT_CAMPUSES_FROM_SERVER'
const GET_CAMPUS = 'GET_CAMPUS'
const REMOVE_CAMPUS = 'REMOVE_CAMPUS'
const EDIT_CAMPUS = 'EDIT_CAMPUS'

export function gotCampusesFromServer(campuses){
  return {
    type: GOT_CAMPUSES_FROM_SERVER,
    campuses
  }
}

export function getCampus(campus){
  return{
    type: GET_CAMPUS,
    campus
  }
}

export function removeCampus(campus){
  return{
    type: REMOVE_CAMPUS,
    campus
  }
}

export function editCampus(campus){
  return{
    type: EDIT_CAMPUS,
    campus
  }
}

export function putCampus(id, name, imageUrl){
  return function thunk(dispatch){
    axios.put(`/api/campus/${id}`, {name,imageUrl})
    .then(res => res.data)
    .then(campus => dispatch(editCampus(campus)))
    .catch(err => console.error(err).bind(console))
  }
}
export function fetchCampuses() {
  return function thunk(dispatch){
    axios.get('/api/campus')
    .then(res => res.data)
    .then(campuses => dispatch(gotCampusesFromServer(campuses)))
    .catch(console.error.bind(console))
  }
}

export function postCampus(name, imageUrl){
  return function thunk(dispatch){
    axios.post('/api/campus', {name,imageUrl})
    .then(res => res.data)
    .then(campus => {
      dispatch(getCampus(campus))
    })
    .catch(console.error.bind(console))
  }
}

export function deleteCampus(id){
  return function thunk(dispatch){
    axios.delete(`/api/campus/${id}`)
    .then(res => res.data)
    .then(campus => {
      dispatch(removeCampus(campus))
    })
  }
}

export default function campusReducer(state = [], action){
  switch(action.type){
    case GOT_CAMPUSES_FROM_SERVER:
      return action.campuses
    case GET_CAMPUS:
      return [...state, action.campus]
    case REMOVE_CAMPUS:
      return [...state].filter(function(campus){
        return +campus.id !== +action.campus.id
      })
    case EDIT_CAMPUS:
      return state.map(campus => +campus.id === action.campus.id ? action.campus : campus)
    default:
      return state
  }
}
