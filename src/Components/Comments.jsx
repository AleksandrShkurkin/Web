import React, { useState } from 'react';
import styles from './Comments.module.css';
import { Formik, Form, Field } from 'formik';

const Comments = ({ itemId, addComment, comments }) => {

    const handleCommentSubmit = (values, { setSubmitting, resetForm }) => {
        const newComment = values.comment.trim()
        if (newComment) {
            addComment(itemId, newComment);
            resetForm();
            setSubmitting(false);
        }
    };

    return (
        <div className={styles.commentsSection}>
            <ul className={styles.commentList}>
                {comments.map((comment, index) => (
                    <li key={index} className={styles.commentBubble}>
                        {comment}
                    </li>
                ))}
            </ul>
            <Formik 
            initialValues={{comment: ''}}
            onSubmit={handleCommentSubmit}>
                <Form className={styles.commentForm} >
                    <Field name="comment" type="textfield"
                        className={styles.commentInput}
                        placeholder="Add a comment..."
                    />
                    <button type="submit" className={styles.commentSubmitButton}>
                        Add Comment
                    </button>
                </Form>
            </Formik>
        </div>
    );
};

export default Comments;