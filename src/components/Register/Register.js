import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
    return (
        <div className="login-form">
            <div>
                <h2>Register: Create Acount</h2>
                <form onSubmit="">
                    <input type="text" name="" id="" />
                    <br />
                    <input type="email" name="" id="" placeholder="your email" />
                    <br />
                    <input type="password" name="" id="" placeholder="your password" />
                    <br />
                    <input type="password" name="" id="" placeholder="Re-enter-password" />
                    <br />
                    <input type="submit" value="submit" />
                </form>
                <p>Already have an Account? <Link to="/login">Login</Link></p>
                <div>----------------------or---------------------------</div>
                <button  className="btn-regular">Google sign In</button>
            </div>
        </div>
    )
}

export default Register
