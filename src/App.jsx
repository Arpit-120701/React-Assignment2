import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Student from './Components/Student'
import StudentInfo from './Components/StudentInfo'

function App() {
  return (
    <>
    <h1><b>STUDENT DETAILS </b></h1>
      <br/>
      <hr/>
     <Student name='CDAC' course='PGCP-AC' clgname='CDAC-Bangalore' /><br/>
     <hr/>
     <Student name ='Ravi' course='PGCP-ITIS' clgname='CDAC-Bangalore' />
     <hr/>
     <Student name = 'Sita ' course='PGCP-BDA' clgname='CDAC-Banaglore' />
     <hr/>
     <h1>TASK 2 : PROPS DRILLING</h1>
     <br/>
     <StudentInfo name='Arpit Sangamnerkar'
    </>
  )
}

export default App
