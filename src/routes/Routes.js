import React, { Suspense } from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "../components/Home";
import Header from "../components/Header";
import Search from "../components/Search";
import Spinner from "../components/Spinner";
const LogSign = React.lazy(()=> import ('../components/LogSign'));
const PostAd  = React.lazy(() => import('../components/PostAd'))
function Routes () {
    return (
        <Router getUserConfirmation={(message = "hi do you wanna continue?", callback) => { //eslint-disable-line
            // this is the default behavior
            console.log("window is", window)
            const allowTransition = window.confirm(message);
            callback(allowTransition);
        }}
        >
            <Header />
            <Suspense fallback={<Spinner/>}>
                <Switch>
                    {/* TODO Put more verbose above. Define a Protected Route component for private routes */}
                    <Route path="/" exact   component={Home} />
                    <Route path="/d"        component={Search} />
                    <Route path="/login"    component={LogSign} />
                    <Route path="/postAd"   component={PostAd} />
                </Switch>
            </Suspense>
        </Router>
    );
}
export default Routes;
