import React, { useRef, useState, useEffect } from 'react';

import styles from './DiaryAddProductForm.module.scss';

// Icon
import icon from '../../../utils/images/diary-plus-icon.svg';

// Redux
import { useSelector, useDispatch } from 'react-redux';
import calendarSelectors from '../../../redux/calendar/calendar-selectors';
// import getProducts from '../../../redux/products/products-selectors';

// axios
import axios from 'axios';

//operations
import { productsOperations } from '../../../redux/products';

axios.defaults.baseURL = 'https://slim-mom-app.herokuapp.com/api';

const DiaryAddProductForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [weight, setWeight] = useState('');
  const [productsState, setProductsState] = useState([]);

  const dispatch = useDispatch();

  const date = useSelector(calendarSelectors.currentDate);

  const fetchProductsData = async value => {
    try {
      const { data } = await axios.get(`/products?search=${value}`);
      setProductsState(data.products);
    } catch (e) {}
  };

  useEffect(() => {
    fetchProductsData(title);
    if (!title) {
      setIsOpen(false);
    }
  }, [title]);

  const handleSubmit = async (event, values) => {
    event.preventDefault();
    // перевірка, мабуть, не потрібна
    // if (Object.values(values).length === 0) return;
    try {
      dispatch(productsOperations.addProducts(values));
      setTitle('');
      setWeight('');
      setIsOpen(false);
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <React.Fragment>
      <form
        className={styles.form}
        onSubmit={e => handleSubmit(e, { title, weight, date })}
      >
        <div>
          <input
            className={styles.input}
            label="Введите название продукта"
            placeholder="Введите название продукта *"
            id="title"
            name="title"
            type="text"
            value={title}
            required
            autoComplete="off"
            onChange={e => {
              setTitle(e.target.value);
              setIsOpen(true);
            }}
          />
          {isOpen && (
            <ul className={styles.productList}>
              {productsState.map(el => {
                return (
                  <li
                    key={el.title.ru}
                    onClick={() => {
                      setIsOpen(false);
                      setTitle(el.title.ru);
                    }}
                  >
                    <span>{el.title.ru}</span>
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        <input
          className={styles.input}
          label="Граммы"
          placeholder="Граммы *"
          id="weight"
          name="weight"
          type="number"
          required
          value={weight}
          onChange={e => setWeight(e.target.value)}
        />

        <button type="submit" className={styles.button}>
          <img src={icon} alt="form plus icon" />
        </button>
      </form>
    </React.Fragment>
  );
};

export default DiaryAddProductForm;
