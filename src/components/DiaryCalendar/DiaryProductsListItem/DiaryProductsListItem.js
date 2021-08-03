import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './DiaryProductsListItem.module.scss';

import { productsOperations } from '../../../redux/products';
import { calendarSelectors } from '../../../redux/calendar';

// Icon
import icon from '../../../utils/images/diary-delete-icon.svg';

const DiaryProductsListItem = ({ id, title, weight, calories }) => {
    const dispatch = useDispatch();
    const date = useSelector(calendarSelectors.currentDate);
    const handleDelete = async (event) => {
        event.preventDefault();
        try {
            await dispatch(productsOperations.deleteProducts(id));
            await dispatch(productsOperations.getProductsByDay(date));
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
