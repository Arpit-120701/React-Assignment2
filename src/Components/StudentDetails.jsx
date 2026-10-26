import React from 'react'

function StudentDetails(props) {
  return (
    <div>
    <h1>Candidate Specific Details</h1>
    <hr/>
    <h3>Candidate name : {props.sname}</h3>
    <h3>Candidate Opted Course : {props.cname}</h3>
    <h3>Center Alloted : {props.center} </h3>
    <h3>Batch joined :{props.batch}</h3>
    <h3>Date of Birth : {props.dob}</h3>
    <h3>Passed Out Year :{props.passedYear}</h3>
      
    </div>
  )
}

export default StudentDetails
