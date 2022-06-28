import React, { useState } from 'react'
import Button from '@mui/material/Button'
import Logo from "../images/person-circle.svg"

function LoginPage(props) {

    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");
    const [checked , setChecked] = useState(false);
    const [error , setError] = useState({})

    let errorObj = {
        email : "",
        password : ""
    }

    function removeData() {
        props.setShow(false);
    }

    function submitForm() {
        if(!email || !password){

            errorObj.email=!email&&"Please Enter Your Email"
            errorObj.password =!password&&"Please Enter Your Password"
            setError({...error, ...errorObj})
        }
        else{
            if(password.length < 6){
                errorObj.password = password.length < 6 && "Password should be more than 6 Characters"
                setError({...error , ...errorObj})
            }
            else{

                if(checked === true){
                    alert("Email : " + email + "\nPassword : "+ password + "\nThe User Wants to be Remembered" )
                }
                else {
                    alert("Email : " + email + "\nPassword : "+ password + "\nThe User does not wants to be Remembered" )
                }
            }
        }
                
    }

    return (
        <>
            <div className="form">
                <form>
                    <div className="image">
                        <img src={Logo} alt='hello' />
                    </div>
                    <div className="mb-3">
                        <p className='emailError' style={{display:error.email?"block":"none"}}>{error.email?error.email:"a"}</p>
                        <input type="email" autoFocus="autofocus" className="form-control" value={email} onChange={(e)=>{setEmail(e.target.value); setError({...error, email:""})}} id="exampleFormControlInput1" placeholder="Email" size="30" />
                    </div>
                    <div className="mb-3">
                        <p className='passwordError' style={{display:error.password?"block":"none"}}>{error.password?error.password:"a"}</p>
                        <input type="password" className="form-control" id="inputPassword" onChange={(e)=>{setPassword(e.target.value); setError({...error, password:""})}} placeholder='Password' size="30" />
                    </div>
                    <div className="remember">
                        <input type="checkbox"  value="false" onChange={(e)=>setChecked(e.target.checked)} />
                        <p>Remember me</p>
                    </div>
                    <div className="loginbuttom">
                        <Button variant="contained" onClick={() => submitForm()}>Log In</Button>
                    </div>
                    <div className="forPass">
                        <span>Forgot Your Password?</span>
                    </div>

                    <div className="horizontalLine">
                        <div className="line"></div>
                        <p>OR</p>
                        <div className="line"></div>
                    </div>
                    <div className="social">
                        <i class="fa-brands fa-google"></i>
                        <i class="fa-brands fa-facebook"></i>
                        <i class="fa-brands fa-linkedin"></i>
                    </div>
                </form>
                <div className="close" onClick={removeData}>
                    <i class="fa-solid fa-xmark" ></i>
                </div>
            </div>

        </>
    )
}

export default LoginPage
