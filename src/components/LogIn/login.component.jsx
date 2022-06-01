import './login.style.css'
import { Fragment } from "react"
import { Link } from 'react-router-dom'


const Login = () => {
    return (
        <Fragment>
            <div className="login-page">
                <div className="login-container">
                    <div className="login-inputs">
                        <form action="submit">
                            <label for="fname">Email:</label><br/>
                            <input className='inputs' label="email"
                                    name="email" />
                            <label for="fname">Password:</label><br/>
                            <input className='inputs'  label="Password"
                                    name="Password" type='password'/>
                        </form>
                    </div>
                    <div className="login-submit">
                        <Link className='login-button' to='/loged-in'>
                            <button className='login-button'>Login</button>
                        </Link>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}


export default Login