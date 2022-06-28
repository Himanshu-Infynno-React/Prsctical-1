import React, { useState } from 'react'
import LoginPage from '../components/Loginpage'

function LoginButton() {
  const [show , setShow] = useState(false)

  function handleClick(){
    setShow(true)
    console.log(show)
  }
  return (
    <>
      <button className='loginBtn btn-three' onClick={handleClick}>Login</button>
      {show &&  <LoginPage showData={show } setShow={setShow} />}
    </>
  )
}

export default LoginButton
