import React , {useState} from 'react'
import EmployeesInfo from './components/EmployeesInfo'
import EmployeeInfo from './components/EmployeeInfo'
import {
   Routes, Route
} from 'react-router-dom'

function Appp() {

  const [getID , setGetId] = useState();

  function getId(index){
    setGetId(index)
  }
  
  return (
    <>
       <Routes>
        <Route path='/' exact element={<EmployeesInfo getData={getId}/>} />
        <Route path='/employee/:id' exact element={<EmployeeInfo getID={getID}/>} />       
       </Routes>
      </>
  )
}

export default Appp
