import React from 'react'

function Student(props) {
  return (
    <div>
    
      <h1>Student  name : {props.name}</h1>
      <h1>Course opted : {props.course}</h1>
      <h1>Center Allotted : {props.clgname}</h1>
    </div>
  )
}

export default Student
