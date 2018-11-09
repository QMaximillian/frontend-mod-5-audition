import React from 'react'
import { Link } from 'react-router-dom'

const PlayTab = (props) => {
  
  if (props.parent === "Theater") {
    return (
      <Link to={`theater/${props.theaterId}/season/${props.seasonId}/show/${props.show.id}`}>
        <div className="card-no-hover">
          {props.show.show_name}
        </div>
       </Link>
    )
  } else {
    return(
      <Link to={`${props.match.params.seasonId}/show/${props.show.id}`}>
        <div className="card">
          {props.show.show_name}
        </div>
      </Link>
    )
  }
}

export default PlayTab
