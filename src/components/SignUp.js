import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
const SignUp = () => {
    const formik = useFormik({
        initialValues:{
            signEmail:'',
            signPassword:'',
            gender:'female'
        },
        validationSchema:Yup.object({
            signEmail: Yup.string().email('Invalid email entered').required('Email is required'),
            signPassword: Yup.string().min(5, 'Must be 5 or more Characters').required('Password is required')
        }),
        onSubmit: values => console.log(values)
    });
    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="signEmail"
                        id="signEmail"
                        autoComplete="off"
                        placeholder="Email"
                        className="form-control form-control-sm"
                        {...formik.getFieldProps('signEmail')}
                    />
                    {formik.touched.signEmail && formik.errors.signEmail ? <div className="invalid_feedback">{formik.errors.signEmail}</div> : null}
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        name="signPassword"
                        id="signPassword"
                        placeholder="Password"
                        className="form-control form-control-sm"
                        {...formik.getFieldProps('signPassword')}
                    />
                    {formik.touched.signPassword && formik.errors.signPassword ? <div className="invalid_feedback">{formik.errors.signPassword}</div> : null}
                </div>
                {/* TODO check formik documentation for working with radio buttons */}
                <div className="form-group">
                    <p>Gender:</p>
                    <input type="radio" name="gender" {...formik.getFieldProps('gender')}id="male" value="male" checked={formik.values.gender === 'male'} />
                    <label htmlFor="male">Male</label>
                    <input type="radio" name="gender" id="female" value="female" checked={formik.values.gender === 'female'} {...formik.getFieldProps('gender')}/>
                    <label htmlFor="female">Female</label>
                </div>
                <div className="form-group">
                    <button className="btn btn-primary" type="submit">Sign Up</button>
                </div>
            </form>
        </div>
    );
};

export default SignUp;
