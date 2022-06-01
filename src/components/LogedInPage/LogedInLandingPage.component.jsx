import { Fragment } from "react"
import LogedINNav from "../../routes/LogedInNavigation/LogedInNavigation.routes"

const LogedIn = () => {
    return (
        <Fragment>
            <LogedINNav/>
            <h1>You are Logged In</h1>
        </Fragment>
    )


}

export default LogedIn