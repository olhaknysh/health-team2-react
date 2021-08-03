import React, { useEffect } from 'react';

import styles from './DiaryProductsList.module.scss';
import { useSelector } from 'react-redux';
import { productsSelectors } from '../../../redux/products';

import DiaryProductsListItem from '../DiaryProductsListItem';

const DiaryProductsList = () => {
    const productsByDay = useSelector(productsSelectors.getProductsByDay);
    const products = useSelector(productsSelectors.getProducts)
    // const isLoading = useSelector(productsSelectors.isLoading);
    console.log(productsByDay);

    return (
        <div className={styles.container}>
            {productsByDay?.length === 0 && (
                <h2 className={styles.noProductsHeading}>
                    Добавте продукты за сегодня
                </h2>
            )}
            <ul className={styles.list}>
                {productsByDay?.map(({ _id, title, weight, calories }) => (
                    <DiaryProductsListItem key={_id} id={_id} title={title} weight={weight} calories={calories} />
                ))}
            </ul>


            <div className={styles.overlay}></div>
        </div>
    );
};

export default DiaryProductsList;
