import React from 'react'
// import { Link } from 'react-router-dom'
const AuditionTab = (props) => {

console.log(props.audition.show_id);
  return (
    // <Link to={`audition/${props.audition.show_name}/`}>
    <div>
      <div>{props.audition.show_name}</div>
      <div>{props.audition.location}</div>
    </div>
    // </Link>
  )
}

export default AuditionTab
