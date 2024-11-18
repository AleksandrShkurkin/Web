import React, {Component} from "react";
import styles from "./Comments.module.css"
import { TransitionGroup, CSSTransition } from 'react-transition-group';

class Comments extends Component
{
    render()
    {
        return (
            <div>
                <h3>Comments:</h3>
                <TransitionGroup component="ul" className={styles.commentList}>
                    {this.props.comments.map((comment, index) =>
                    (
                        <CSSTransition
                        key={index}
                        timeout={300}
                        classNames={{
                            enter: styles.commentEnter,
                            enterActive: styles.commentEnterActive,
                            exit: styles.commentExit,
                            exitActive: styles.commentExitActive,
                        }}
                    >
                        <li key={index}>
                            <strong>{comment.name}</strong>: {comment.content}
                        </li>
                        </CSSTransition>
                    ))}
                </TransitionGroup>
            </div>
        );
    }
}

export default Comments;