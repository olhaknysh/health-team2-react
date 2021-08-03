import React from 'react';

import styles from './DiaryProductsList.module.scss';
import { useSelector } from 'react-redux';
import { productsSelectors } from '../../../redux/products';

import DiaryProductsListItem from '../DiaryProductsListItem';

const DiaryProductsList = () => {
  const products = useSelector(productsSelectors.getProducts);
  // const productsByDay = useSelector(productsSelectors.getProductsByDay);
  // const isLoading = useSelector(productsSelectors.isLoading);

  return (
    <div className={styles.container}>
      {products.length === 0 && (
        <h2 className={styles.noProductsHeading}>
          Добавте продукты за сегодня
        </h2>
      )}
      <ul className={styles.list}>
        {products.map(({ _id }) => (
          <DiaryProductsListItem key={_id} id={_id} />
        ))}
      </ul>
      <div className={styles.overlay}></div>
    </div>
  );
};

export default DiaryProductsList;
