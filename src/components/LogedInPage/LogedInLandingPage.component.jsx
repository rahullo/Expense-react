import './LogedInLandingPage.style.css'
import { Link } from 'react-router-dom'
import { Fragment } from "react"


const LogedIn = () => {

    const handleClick = event => {
        console.log(event.currentTarget.id);
      };

    return (
        <Fragment>
            <div className='landingpage-container'>
                <div className="months">
                    <div className="firsthalfyear">
                        <Link id='1' to='records' style={{textDecoration:"none"}} onClick={handleClick}><div className="month1 month">JANUARY</div></Link>
                        <Link id='2' to='records' style={{textDecoration:"none"}} onClick={handleClick}><div className="month1 month">FEBRUARY</div></Link>
                        <Link id='3' to='records' style={{textDecoration:"none"}} onClick={handleClick}><div className="month1 month">MARCH</div></Link>
                        <Link id='4' to='records' style={{textDecoration:"none"}} onClick={handleClick}><div className="month1 month">APRIL</div></Link>
                        <Link id='5' to='records' style={{textDecoration:"none"}} onClick={handleClick}><div className="month1 month">MAY</div></Link>
                        <Link id='6' to='records' style={{textDecoration:"none"}} onClick={handleClick}><div className="month1 month">JUNE</div></Link>
                    </div>
                    <div className="secondhalfyear">
                        <Link id='7' to='records' style={{textDecoration:"none"}} onClick={handleClick}><div className="month1 month">JULY</div></Link>
                        <Link id='8' to='records' style={{textDecoration:"none"}} onClick={handleClick}><div className="month1 month">AUGUST</div></Link>
                        <Link id='9' to='records' style={{textDecoration:"none"}} onClick={handleClick}><div className="month1 month">SEPTEMBER</div></Link>
                        <Link id='10' to='records' style={{textDecoration:"none"}} onClick={handleClick}><div className="month1 month">OCTOBER</div></Link>
                        <Link id='11' to='records' style={{textDecoration:"none"}} onClick={handleClick}><div className="month1 month">NOVEMBER</div></Link>
                        <Link id='12' to='records' style={{textDecoration:"none"}} onClick={handleClick}><div className="month1 month">DECEMBER</div></Link>
                    </div>
                </div>
            </div>
        </Fragment>
    )


}

export default LogedIn