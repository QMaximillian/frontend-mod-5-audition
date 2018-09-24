import React from 'react'


const Resume = (props) => {
  console.log(props);

const handleClick = (resume, event) => {

  console.log(resume, event)
}
  return(
    <div onClick={handleClick}>
      Resume
      <div>{props.resume.shows}</div>
      <div>{props.resume.training}</div>
      <div>{props.resume.skills}</div>
    </div>
  )
}

export default Resume
