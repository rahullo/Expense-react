import './navigation.style.css'

import { Fragment } from "react"
import { Outlet } from 'react-router'
import { Link } from 'react-router-dom'


const Navigation = () => {
    return (
        <Fragment>
            <div className="nav-container">
                    {/* <div className="logo">
                        <span>EXPENSES</span>
                    </div> */}
                    <Link className='logo' to='/'>
                        <span>EXPENSES</span>
                    </Link>
                    <nav className="function">
                        <ul className="function-list">
                            <Link className='customer' to='/record'><li><button className="customer">Record</button></li></Link> 
                            <li><button>Pricing</button></li>
                            <li><button>Docs</button></li>
                            <li><button>Partner</button></li>
                            <li><button className="support">Support</button></li>
                            <li><button className="company">Company</button></li>
                            <li><button>Product</button></li>
                        </ul>
                    </nav>
                    <nav className="authentication">
                        <ul className="auth-way">
                            <Link className="login" to='/log-in'>
                                <li><button className="login">Log In</button></li>
                            </Link>
                            <Link className="signup" to="/sign-up">
                                <li><button className="signup">Sign Up</button></li>
                            </Link>
                        </ul>
                    </nav>
                </div>
                <Outlet/>
        </Fragment>
    )
}

export default Navigation