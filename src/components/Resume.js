import React from 'react'


const Resume = (props) => {



  return(
    <div>
      <div>
        {'Resume ' + props.resume.id}
        <div>{props.resume.shows}</div>
        <div>{props.resume.characters}</div>
        <div>{props.resume.training}</div>
        <div>{props.resume.skills}</div>
      </div>
    </div>
  )
}

export default Resume
