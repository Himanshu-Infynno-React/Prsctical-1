import React from 'react'
import LoginButton from './buttons/LoginButton'
import SignUpButton from './buttons/SignUpButton'

function Landingpage() {

    return (
        <>
            <header className='header'>
                <div className="heading">
                    <h1>Welcome to The Website</h1>
                    <h1>Welcome to The Website</h1>
                </div>
                <div className="buttons">
                   <LoginButton /> 
                    <SignUpButton />
                </div> 
            </header>
        </>
    )
}

export default Landingpage
