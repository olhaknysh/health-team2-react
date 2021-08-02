import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './DiaryProductsListItem.module.scss';

import { productsOperations, productsSelectors } from '../../../redux/products';

// Icon
import icon from '../../../utils/images/diary-delete-icon.svg';

const DiaryProductsListItem = ({ id }) => {
  const dispatch = useDispatch();
  const { title, weight, calories } = useSelector(
    productsSelectors.getProduct(id),
  );
  console.log(title);
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
        {calories} <span className={styles.cal}>ккал</span>
      </p>
      <button type="button" className={styles.delete} onClick={handleDelete}>
        <img src={icon} alt="delete icon" />
      </button>
    </li>
  );
};

export default DiaryProductsListItem;
