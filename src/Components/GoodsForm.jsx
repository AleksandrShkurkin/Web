import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styles from './GoodsForm.module.css';

const GoodsForm = ({ addGoods }) => {
    const [id, idChange] = useState(0);

    const handleSubmit = (values, { setSubmitting, resetForm }) => {
        setTimeout(() => {
            const newId = id;
            addGoods({ ...values, id: newId });
            
            idChange(prevId => prevId + 1);
            
            resetForm();
            setSubmitting(false);
        }, 400);
    };

    return (
        <Formik
            initialValues={{ id: `${id}`, name: '', description: '', price: '' }}
            validationSchema={Yup.object({
                name: Yup.string()
                    .trim()
                    .min(2, 'Must be at least 2 characters')
                    .required('Required'),
                description: Yup.string()
                    .trim()
                    .required('Required'),
                price: Yup.number()
                    .positive('Price must be a positive number')
                    .required('Required'),
            })}
            onSubmit={handleSubmit}
        >
            <Form className={styles.formContainer}>
                <label htmlFor="name" className={styles.formLabel}>Name:</label>
                <Field name="name" type="text" className={styles.formField} />
                <ErrorMessage name="name" component="div" className={styles.errorMessage} />

                <label htmlFor="description" className={styles.formLabel}>Description:</label>
                <Field name="description" as="textarea" className={`${styles.formField} ${styles.textArea}`} />
                <ErrorMessage name="description" component="div" className={styles.errorMessage} />

                <label htmlFor="price" className={styles.formLabel}>Price:</label>
                <Field name="price" type="number" className={styles.formField} />
                <ErrorMessage name="price" component="div" className={styles.errorMessage} />

                <button type="submit" className={styles.submitButton}>Submit</button>
            </Form>
        </Formik>
    );
};

export default GoodsForm;