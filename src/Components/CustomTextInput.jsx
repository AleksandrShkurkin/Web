import { useField } from "formik"
import React from "react"
import styles from './Authorization.module.css'

const CustomTextInput = ({label, ...props}) => {
    const [field, meta] = useField(props)
    return (
        <>
            <label htmlFor={props.id || props.name} className={styles.formLabel}>{label}</label>
            <input className={styles.formField} {...field} {...props}/>
            {meta.touched && meta.error ? (
                <div className={styles.errorMessage}>{meta.error}</div>
            ) : null}
        </>
    )
}

export default CustomTextInput;