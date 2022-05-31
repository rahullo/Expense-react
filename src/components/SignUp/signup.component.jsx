import './signup.style.css'

import { Fragment } from "react"
import { Link } from 'react-router-dom'


const SignUp = () => {
    return (
        <Fragment>
            <div className="signup-page">
                <div className="signup-container">
                    <div className="signup-inputs">
                        <form action="submit">
                            <label for="fname">Email:</label><br/>
                            <input className='inputs' label="email"
                                    name="email" />
                            <label for="fname">Password:</label><br/>
                            <input className='inputs'  label="Password"
                                    name="Password" />
                            <label for="fname">Confirm Password:</label><br/>
                            <input className='inputs'  label="confirm password"
                                    name="confirm password" />
                        </form>
                    </div>
                    <div className="submit">
                        <Link className='signup-button' to='/'>
                            <button className='signup-button'>Sign Up</button>
                        </Link>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}


export default SignUp