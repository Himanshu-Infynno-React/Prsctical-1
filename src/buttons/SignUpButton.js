import React, { useState } from 'react'
import SignupPage from '../components/Signuppage';

function SignUpButton() {
  const [showSignUp , setShowSignUp] = useState(false);
  function ShowSignUp(){
    setShowSignUp(true);
  }
  return (
    <>
      <button onClick={()=> ShowSignUp()} className='signUpBtn btn-three'>Sign Up</button>
      {showSignUp && <SignupPage show={showSignUp} setShow={setShowSignUp} />}
    </>
  )
}

export default SignUpButton
