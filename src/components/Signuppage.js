import React from 'react'
import Button from '@mui/material/Button'

function SignupPage(props) {

  function removePage() {
    props.setShow(false)
  }
  return (
    <>
      <div className="signUpForm">
        <form>
          <div className="image">
            <p>Sign Up</p>
          </div>
          <div class="mb-3 ">
            <input type="text" autoFocus="autofocus" className="form-control" id="exampleFormControlInput1" placeholder="Name" size="30" />
          </div>
          <div class="mb-3 ">
            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Email" size="30" />
          </div>
          <div class="mb-3">
            <input type="password" class="form-control" id="inputPassword" placeholder='Password' size="30" />
          </div>
          <div class="mb-3">
            <input type="password" class="form-control" id="inputPassword" placeholder='Confirm Password' size="30" />
          </div>
          <div className="remember">
            <input type="checkbox" />
            <p>I have read and agree to the <a href="./">Terms And Conditions</a></p>
          </div>
          <div className="loginbuttom">
            <Button variant="contained">Sign Up</Button>
          </div>
          <div className="forPass">
            <span>Already Have An Account? <a href='www.google.com'>Log In</a></span>
          </div>
        </form>
        <div className="close" onClick={removePage}>
          <i class="fa-solid fa-xmark" ></i>
        </div>
      </div>
    </>
  )
}

export default SignupPage
