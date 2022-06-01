import './LogedInLandingPage.style.css'

import { Fragment } from "react"


const LogedIn = () => {

    return (
        <Fragment>
            <div className='landingpage-container'>
                <div className="months">
                    <div className="firsthalfyear">
                        <div className="month1 month">JANUARY</div>
                        <div className="month2 month">FEBRUARY</div>
                        <div className="month3 month">MARCH</div>
                        <div className="month4 month">APRIL</div>
                        <div className="month5 month">MAY</div>
                        <div className="month6 month">JUNE</div>
                    </div>
                    <div className="secondhalfyear">
                        <div className="month7 month">JULY</div>
                        <div className="month8 month">AUGUST</div>
                        <div className="month9 month">SEPTEMBER</div>
                        <div  className="month10 month">OCTOBER</div>
                        <div  className="month11 month">NOVEMBER</div>
                        <div  className="month12 month">DECEMBER</div>
                    </div>
                </div>
            </div>
        </Fragment>
    )


}

export default LogedIn