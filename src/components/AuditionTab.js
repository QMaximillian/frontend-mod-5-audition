import React from 'react'
// import { Link } from 'react-router-dom'
const AuditionTab = (props) => {

console.log(props.audition.show_id);
  return (
    // <Link to={`audition/${props.audition.show_name}/`}>
    <tr>
      <th style={{textAlign: 'center'}}>{props.audition.show_name}</th>
      <th style={{textAlign: 'center'}}>{props.audition.location}</th>
      <th style={{textAlign: 'center'}}>{props.audition.audition_date.slice(0, 10)}</th>
    </tr>
    // </Link>
  )
}

export default AuditionTab
