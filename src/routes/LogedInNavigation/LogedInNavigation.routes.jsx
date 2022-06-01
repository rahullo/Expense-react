import './LogedInNavigation.style.css'

import { Fragment } from "react"
import { Outlet } from 'react-router'
import { Link } from 'react-router-dom'


const LogedINNav = () => {
    return (
        <Fragment>
            <div className="logedin-nav-container">
                {/* <div className="logo">
                    <span>EXPENSES</span>
                </div> */}
                <Link className='logedin-logo' to='/'>
                    <span>EXPENSES</span>
                </Link>
                <nav className="logedin-function">
                    <ul className="logedin-function-list">
                        <Link className='logedin-customer' to='/loged-in'><li><button className="customer">Record</button></li></Link> 
                        <li><button>Pricing</button></li>
                        <li><button>Docs</button></li>
                        <li><button>Partner</button></li>
                        <li><button className="logedin-support">Support</button></li>
                        <li><button className="logedin-company">Company</button></li>
                        <li><button>Product</button></li>
                    </ul>
                </nav>
                
            </div>
            <Outlet/>
        </Fragment>
    )
}

export default LogedINNav