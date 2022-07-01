import React , {useState} from 'react'
// import LandingPage from './Landingpage'
// import LoginPage from './components/Loginpage'
// import SignupPage from './components/Signuppage'
import EmployeesInfo from './components/EmployeesInfo'
import EmployeeInfo from './components/EmployeeInfo'
import {
   Routes, Route
} from 'react-router-dom'
import EditEmployee from './components/EditEmployee';

function Appp() {

  const [getID , setGetId] = useState();
  const [editData , setEditData] = useState({});
  const [update , setUpdate] = useState()

  console.log(update)

  function getId(index){
    setGetId(index)
  }
  
  return (
    <>
       <Routes>
        <Route path='/' exact element={<EmployeesInfo update={update} setEditData={setEditData} getData={getId}/>} />
        <Route path='/employee/:id' exact element={<EmployeeInfo getID={getID}/>} />       
        <Route path='/edit/:id' exact element={<EditEmployee editData={editData} letID={getID}  setUpdate={setUpdate} />}></Route>
       </Routes>
       {/* <LandingPage /> */}
      </>
  )
}

export default Appp
