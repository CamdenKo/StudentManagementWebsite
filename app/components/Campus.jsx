import React from 'react'
import { connect } from 'react-redux'

export function Campus(props){
  return(
    <div>
      {
        props.name + " " + props.imageUrl
      }
    </div>
  )
}

function mapStateToProps(state, oldProps){
  console.log('oldProps', oldProps.campus)
  return{
    name: oldProps.name,
    imageUrl: oldProps.imageUrl
  }
}

export default connect(mapStateToProps)(Campus)
