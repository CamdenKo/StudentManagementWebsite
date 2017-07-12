import React from 'react'
import {connect} from 'react-redux'
import Students from './Students'


function AllCampuses(props){
  return(
    <div>
      <div className = 'row'>
        <h3 className = 'center'>
          Campuses
        </h3>
        {
          props.campuses.map(campus => (
          <div key = {`${campus.id}`} className = 'col s12 m6'>
            <div  className = "card">
              <div className="card-image waves-effect waves-block waves-light">
                <img className="activator" src={`${campus.imageUrl}`}  />
              </div>
              <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">{`${campus.name}`}<i className="material-icons right">more_vert</i></span>
                <p><a>See Students</a></p>
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
      <div className="fixed-action-btn">
        <a className="btn-floating btn-large red">
          <i className="large material-icons">mode_edit</i>
        </a>
      </div>
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
