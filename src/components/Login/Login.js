// import React, { useState } from 'react'
import { Link, useLocation, useHistory } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'
import './Login.css'

const Login = () => {
    const { signinUsingGoogle} = useAuth();
    const location = useLocation();
    const history = useHistory()
    const redirect_uri= location.state?.from || '/shop';
    console.log('came from', location.state?.from)

    const handelGoogleLogIn=()=>{
signinUsingGoogle(redirect_uri)
.then(result=>{
    // console.log(result.user)
    history.push(redirect_uri)
})
    }
    return (
        <div className="login-form">
            <div>
                <h2>Login</h2>
                <form>
                    <input type="text" placeholder="Your email" />
                    <br />
                    <input type="password" name="" id="" placeholder="your password" />
                    <br />
                    <input type="submit" value="submit" />
                </form>
                <p>new to ema-john?<Link to ="/register">Create Account</Link></p>
                <div>---------------------or--------------------</div>
                <button className="btn-regular" onClick={handelGoogleLogIn}>Google sign In</button>
            </div>
        </div>
    )
}

export default Login
