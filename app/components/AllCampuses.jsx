import React from 'react'
import {connect} from 'react-redux'
import Students from './Students'

function AllCampuses(props){
  return(
    // <div>
    //   {
    //     props.campuses.map(campus => <Campus name = {`${campus.name}`} imageUrl = {`${campus.imageUrl}`}/>)
    //   }
    // </div>
    <div className = 'row'>

      {
        props.campuses.map(campus => (
        <div key = {`${campus.id}`} className = 'col s12 m6'>
          <div  className = "card">
            <div className="card-image waves-effect waves-block waves-light">
              <img className="activator" src={`${campus.imageUrl}`}  />
            </div>
            <div className="card-content">
              <span className="card-title activator grey-text text-darken-4">{`${campus.name}`}<i className="material-icons right">more_vert</i></span>
              <p><a href="#">See Students</a></p>
            </div>
            <div className="card-reveal">
              <span className="card-title grey-text text-darken-4">{`${campus.name}`}<i className="material-icons right">close</i></span>
              <Students campusId = {`${campus.id}`} />
            </div>
          </div>
        </div>
        ))
      }

    </div>

  )
}

function mapStateToProps(state){
  console.log(state.campuses)
  return {
    campuses: state.campuses
  }
}

export default connect(mapStateToProps)(AllCampuses)
