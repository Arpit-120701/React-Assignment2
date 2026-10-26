import React from 'react'
import StudentDetails from './StudentDetails'

function StudentInfo(props) {
  return (
    <div>
      <StudentDetails 
      sname ={props.sname}
      cname={props.cname}
      center={props.center}
      batch={props.batch}
      dob={props.dob}
      passedYear ={props.passedYear} />
    </div>
  )
}

export default StudentInfo
