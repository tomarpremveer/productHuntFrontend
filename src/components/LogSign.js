import React from "react";
import LogIn from "./LogIn";
import SignUp from "./SignUp";
const LogSign = () => {
    return (
        <div className="row">
            <div className="col-md-6">
                <LogIn />
            </div>
            <div className="col-md-6">
                <SignUp /> 
            </div>
        </div>
    );
};

export default LogSign;
