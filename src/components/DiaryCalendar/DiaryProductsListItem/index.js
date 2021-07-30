import React from 'react';

import styles from './DiaryProductsListItem.module.scss';

// Icon
import icon from '../../../utils/images/diary-delete-icon.svg';

const DiaryProductsListItem = () => {
  const handleDelete = () => {
    console.log('delete');
  };

  return (
    <li className={styles.item}>
      <p className={styles.product}>Баклажан</p>
      <p className={styles.quantity}>100 г</p>
      <p className={styles.calories}>
        320 <span className={styles.cal}>ккал</span>
      </p>
      <button type="button" className={styles.delete} onClick={handleDelete}>
        <img src={icon} alt="delete icon" />
      </button>
    </li>
  );
};

export default DiaryProductsListItem;
