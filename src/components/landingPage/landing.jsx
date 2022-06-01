import './landing.style.css'
import { Outlet } from 'react-router'

const Landing = () => {

    const adam = require('../../img/adam.jpg')
    const money = require('../../img/money.jpg')

    return (
        <div className="App">
            <Outlet/>
            <div class="main-container">
                <div class="container">
                    <div class="first-half">
                        <img src={money} alt=""/>
                        <div class="first-half-about">
                            <h1><span>TRACK YOUR MONEY AND EXPENSES</span></h1>
                            <h2><span> Help you in dealing with your Expenses or creditors and help you manage your finance life.</span></h2>
                        </div>
                    </div>
                    <div class="second-half">
                        <div class="second-half-about">
                            <h1><span> HAVING MONEY RECORD IS VERY BENIFICIAL.</span></h1>
                            <h2><span>Record Every Expenses and take brief discription about your expenses and plan accordingly.
                                This make life financiely balance</span></h2>
                        </div>
                        {/* < Adam/ > */}
                        <img src={adam} alt=""/>
                    </div>
                </div>
        {/* <!-- <div class="partner">
            <h2>This is Partner Section</h2>
        </div> --> */}
    </div>
        </div>
    )
}

export default Landing
    