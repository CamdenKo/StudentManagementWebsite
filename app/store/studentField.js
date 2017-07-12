const TOGGLE_FIELD = 'TOGGLE_FIELD'

export function toggleField(campusId){
  return{
    type: TOGGLE_FIELD,
    campusId
  }
}

export default function studentFieldReducer(state = {}, action){
  switch (action.type){
    case TOGGLE_FIELD:
      let out = Object.assign({}, state)
      out[action.campusId] = out[action.campusId] ? false : true
      return out
    default:
      return state
  }
}
