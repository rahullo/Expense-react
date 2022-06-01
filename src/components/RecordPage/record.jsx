import Content from '../content/content'
import { Fragment} from 'react'
// import { Outlet } from 'react-router'
// import { Link } from 'react-router-dom'

import './record.style.css'
import { Outlet } from 'react-router'


const Record = function() {

    const expense = [
        {
            "id": 1,
            "date": "6 May 2022",
            "price": 440,
            "items":["Rice Dal Masala"]
        },
        {
            "id": 2,
            "date": "10 May 2022",
            "price": 200,
            "items":["Vegetables"]
        },
        {
            "id": 3,
            "date": "16 May 2022",
            "price": 1000,
            "items":["Examination Fee"]
        },
        {
            "id": 4,
            "date": "15 May 2022",
            "price": 180,
            "items":["Mustard Oil"]
        },
        {
            "id": 5,
            "date": "20 May 2022",
            "price": 200,
            "items":["School Project"]
        },
        {
            "id": 6,
            "date": "25 May 2022",
            "price": 400,
            "items":["Gas refueling"]
        },
        {
            "id": 7,
            "date": "29 May 2022",
            "price": 2500,
            "items":["Rent"]
        },
        {
            "id": 8,
            "date": "31 May 2022",
            "price": 299,
            "items":["Mobile recharge"]
        }
        
    ]

    const totalSpending =(expense) => {
        let spend = 0
        expense.map((ele) => {
            spend += ele.price
            return spend
        })
        return spend
    }
    let spend = totalSpending(expense)
    return (
        <Fragment className="App" >
            <Outlet/>
            <div className="record-main-container">
                <header className="header">
                    <div className="months">
                        <div className="showing-month">May</div>
                        <div className="navigation">
                            <div className="next-month"><button className='next-month-btn'>Next Month</button> </div>
                            <div className="new-month"><button className='new-month-btn'>New Month</button></div>
                        </div>
                    </div>
                </header>
                <div className="base-container">
                    <div className="record-container">
                        <div className="nav">
                            <div className="budget">
                                <p>9000</p>
                            </div>
                            <div className="left">
                                <p>Money Left = {9000-spend}</p>
                            </div>
                            <div className="spend">
                                <p>Spend = {spend}</p>
                            </div>
                        </div>
                        <div className="content-container">
                            {
                              expense.map((element) => (
                                  <Content  key={element.id} element={element}/>
                              ))
                            }
                        </div>
                    </div>
                </div>
                {/* <div className="help">
                    <div className="welcome">
                        <h3>Welcome to the Front Help Center</h3>
                        <p>Whether you're new to Front or You've been with us for years,
                             this is your place to learn about Front, access our trainer 
                             resources, and get support from our team. If you need assistance, 
                             please don't hesitate to contact us.
                        </p>
                    </div>
                    <div className="contacts">
                        <img src="" alt=""/>
                        <img src="" alt=""/>
                        <img src="" alt=""/>
                        <img src="" alt=""/>
                    </div>
                </div> */}
                <div className="policy">
                    <h5>Privacy Policy | Terms of services | Status</h5>
                </div>
            </div>
        </Fragment>             
    )
}

export default Record