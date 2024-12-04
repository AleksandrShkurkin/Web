import React, { useState } from 'react';
import styles from './Comments.module.css';

const Comments = ({ itemId, addComment, comments }) => {
    const [newComment, setNewComment] = useState('');

    const handleCommentChange = (e) => {
        setNewComment(e.target.value);
    };

    const handleCommentSubmit = (e) => {
        e.preventDefault();
        if (newComment.trim()) {
            addComment(itemId, newComment);
            setNewComment('');
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
            <form className={styles.commentForm} onSubmit={handleCommentSubmit}>
                <textarea
                    value={newComment}
                    onChange={handleCommentChange}
                    className={styles.commentInput}
                    placeholder="Add a comment..."
                />
                <button type="submit" className={styles.commentSubmitButton}>
                    Add Comment
                </button>
            </form>
        </div>
    );
};

export default Comments;