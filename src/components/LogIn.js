import React from "react";
import {useFormik} from "formik";
import * as Yup from "yup";
import {isConnected, processData} from "../utils";
import axios from "../utils/axios";

const LogIn = () => { 
    const formik = useFormik({
        initialValues:{
            email:'',
            password:''
        },
        validationSchema:Yup.object({
            email: Yup.string().email('Invalid email entered').required('Email is required'),
            password: Yup.string().min(5, 'Must be 5 or more Characters').required('Password is required')
        }),
        onSubmit: values => handleSubmit(values)
    });
    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        {...formik.getFieldProps('email')}
                        autoComplete="false"
                        className="form-control form-control-sm"
                    />
                    {formik.touched.email && formik.errors.email ? <div className="invalid_feedback">{formik.errors.email}</div> : null}
                        
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        autoComplete="off"
                        {...formik.getFieldProps('password')}
                        className="form-control form-control-sm"
                    />

                    {formik.touched.password && formik.errors.password ? <div className="invalid_feedback">{formik.errors.password}</div> : null}
                </div>
                <div className="form-group">
                    <button className="btn btn-primary" type="submit">Log In</button>
                </div>
            </form>
        </div>
    );
};
// eslint-disable-next-line one-var
const handleSubmit = function (state) {
    // TODO refactor the code(and check for error first before processing the data)
    if (isConnected()) {
        axios({
            method:"post",
            url:"login",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
            data: JSON.stringify({email: state.email, password: state.password}),
        })
            .then((response) => processData(response))
            .then((data) => {
                if (data?.success) {
                    console.log("finally logged in")
                }
            })
            .catch((err) => {
                console.error(err);
            });
    } else {
        console.log("Network is down, A request cannot be sent to the servers");
    }
};
export default LogIn;
