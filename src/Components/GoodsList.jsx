import React, { useState } from 'react';
import styles from './GoodsList.module.css';
import Comments from './Comments';

const GoodsList = ({ goods, deleteGood }) => {
    const [comments, setComments] = useState({});

    const addComment = (itemId, comment) => {
        setComments((prevComments) => ({
            ...prevComments,
            [itemId]: [...(prevComments[itemId] || []), comment],
        }));
    };

    const handleDeleteGood = (itemId) => {
        setComments((prevComments) => {
            const newComments = { ...prevComments };
            delete newComments[itemId];
            return newComments;
        });
        deleteGood(itemId);
    };

    return (
        <div className={styles.goodsListContainer}>
            <h2 className={styles.title}>Goods List</h2>
            {goods.length > 0 ? (
                <ul className={styles.goodsList}>
                    {goods.map((item, index) => (
                        <li key={index} className={styles.goodsItem}>
                            <div className={styles.goodsInfo}>
                                <h3 className={styles.goodsName}>{item.name}</h3>
                                <h3 className={styles.goodsName}>{item.id}</h3>
                                <p className={styles.goodsDescription}>{item.description}</p>
                                <p className={styles.goodsPrice}>${item.price.toFixed(2)}</p>
                            </div>
                            <button
                                className={styles.deleteButton}
                                onClick={() => handleDeleteGood(item.id)}
                            >
                                Delete
                            </button>
                            <Comments
                                itemId={item.id}
                                comments={comments[item.id] || []}
                                addComment={addComment}
                            />
                        </li>
                    ))}
                </ul>
            ) : (
                <p className={styles.noGoodsMessage}>No goods added yet.</p>
            )}
        </div>
    );
};

export default GoodsList;