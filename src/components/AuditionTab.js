import React from 'react'
import moment from 'moment'
// import { Link } from 'react-router-dom'
const AuditionTab = (props) => {

console.log(props.tryout.show_id);
  return (
    // <Link to={`audition/${props.audition.show_name}/`}>
    <tr>
      <th style={{textAlign: 'center'}}></th>
      <th style={{textAlign: 'center'}}>{props.tryout.location}</th>
      <th style={{textAlign: 'center'}}>{moment(props.tryout.audition_time).format("MM/DD/YYYY HH:mm A")}</th>
    </tr>
    // </Link>
  )
}

export default AuditionTab
