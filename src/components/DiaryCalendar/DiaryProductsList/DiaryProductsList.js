import React from 'react';

import styles from './DiaryProductsList.module.scss';

// Comps
// import DiaryProductsListItem from '../DiaryProductsListItem';

const DiaryProductsList = () => {
  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {true && (
          <h2 className={styles.noProductsHeading}>
            Добавте продукты за сегодня
          </h2>
        )}
      </ul>
      <div className={styles.overlay}></div>
    </div>
  );
};

export default DiaryProductsList;
