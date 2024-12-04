import React from "react";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styles from './Authorization.module.css'
import CustomTextInput from "./CustomTextInput";

const Authorization = ({ register }) => {
    return (
        <Formik
            initialValues={{ firstName: '', lastName: '', age: '', email: '', password: '' }}
            validationSchema={Yup.object({
                firstName: Yup.string()
                    .trim()
                    .min(3, 'Must be not less than 3 characters')
                    .required('Required'),
                lastName: Yup.string()
                    .trim()
                    .max(38, 'Must be 38 characters or less')//10+28
                    .required('Required'),
                age: Yup.number()
                    .moreThan(0, 'Your age must be greater than 0')
                    .integer('Your age must be an integer')
                    .required('Required'),
                email: Yup.string()
                    .trim()
                    .email('Must be a valid email')
                    .required('Required'),
                password: Yup.string()
                    .trim()
                    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z\d]).+$/g, { excludeEmptyString: false, message: 'Your password must have at least 1 lowercase and 1 uppercase letter, 1 digit and 1 symbol' })
                    .required('Required')
            })}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    register(true)
                    setSubmitting(false)
                }, 400);
            }}>
            <Form className={styles.formContainer}>
                <CustomTextInput
                    label="Name"
                    name="firstName"
                    type="text"
                />

                <CustomTextInput
                    label="Surname"
                    name="lastName"
                    type="text"
                />

                <CustomTextInput
                    label="Age"
                    name="age"
                    type="number"
                />

                <CustomTextInput
                    label="Email"
                    name="email"
                    type="email"
                />

                <CustomTextInput
                    label="Password"
                    name="password"
                    type="password"
                />

                <button type="submit" className={styles.submitButton}>Submit</button>
            </Form>
        </Formik>
    );
}

export default Authorization;