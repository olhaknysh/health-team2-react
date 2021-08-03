import React from 'react';
import { useDispatch } from 'react-redux';
import styles from './DiaryProductsListItem.module.scss';

import { productsOperations } from '../../../redux/products';


// Icon
import icon from '../../../utils/images/diary-delete-icon.svg';

const DiaryProductsListItem = ({ id, title, weight, calories }) => {
    const dispatch = useDispatch();
    const handleDelete = event => {
        event.preventDefault();
        try {
            dispatch(productsOperations.deleteProducts(id));
        } catch (error) {
            console.log(error.message);
        }
    };

    return (
        <li className={styles.item}>
            <p className={styles.product}>{title}</p>
            <p className={styles.quantity}>{weight} г</p>
            <p className={styles.calories}>
                {Number.parseInt(calories)} <span className={styles.cal}>ккал</span>
            </p>
            <button type="button" className={styles.delete} onClick={handleDelete}>
                <img src={icon} alt="delete icon" />
            </button>
        </li>
    );
};

export default DiaryProductsListItem;
