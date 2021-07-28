import React, { useState } from 'react';

import styles from './DiaryAddProductForm.module.scss';

// Icon
import icon from '../../../utils/images/diary-plus-icon.svg';

const DiaryAddProductForm = () => {
  const [product, setProduct] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleAddProduct = () => {
    console.log('add product');
  };

  const handleProductChange = ({ target }) => {
    console.log(target.value);

    setProduct(target.value);
  };

  const handleQuantityChange = ({ target }) => {
    console.log(target.value);

    setQuantity(target.value);
  };

  return (
    <React.Fragment>
      <form className={styles.form}>
        <input
          type="text"
          className={styles.input}
          placeholder="Введите название продукта"
          onChange={e => handleProductChange(e)}
          value={product}
        />
        <input
          type="number"
          className={styles.input}
          placeholder="Граммы"
          onChange={e => handleQuantityChange(e)}
          value={quantity}
        />
        <button
          type="button"
          className={styles.button}
          onClick={handleAddProduct}
        >
          <img src={icon} alt="form plus icon" />
        </button>
      </form>
    </React.Fragment>
  );
};

export default DiaryAddProductForm;
