import React, { useRef, useState, useEffect, useCallback } from 'react';
import styles from './DiaryAddProductForm.module.scss';
import _ from 'lodash';

import icon from '../../../utils/images/diary-plus-icon.svg';

import { useSelector, useDispatch } from 'react-redux';
import { calendarSelectors } from '../../../redux/calendar';

import axios from 'axios';

import { productsOperations } from '../../../redux/products';

axios.defaults.baseURL = 'https://slim-mom-app.herokuapp.com/api';

const DiaryAddProductForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [weight, setWeight] = useState('');
  const [query, setQuery] = useState('');
  const [productsState, setProductsState] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  // const [element, setElement] = useState(null);
  // const observer = useRef(new IntersectionObserver(() => {}, {}));
  const dispatch = useDispatch();

  const date = useSelector(calendarSelectors.currentDate);
  // const isLoading = useSelector(calendarSelectors.isLoading);

  const fetchProductsData = async (value, currentPage) => {
    try {
      const { data } = await axios.get(
        `/products?search=${value}&page=${currentPage}`,
      );
      setProductsState(prev => [...data.products]);
    } catch (e) {}
  };

  const productSearch = useCallback(
    _.debounce(query => fetchProductsData(query, currentPage), 500),
    [],
  );

  useEffect(() => {
    if (!query) {
      setIsOpen(false);
      return;
    }
    productSearch(query);
  }, [query, productSearch]);

  const updatePage = () => {
    setCurrentPage(prevPage => prevPage + 1);
  };
  const handleSubmit = async (event, values) => {
    event.preventDefault();

    try {
      dispatch(productsOperations.addProducts(values));
      setTitle('');
      setWeight('');
      setIsOpen(false);
      setQuery('');
      setProductsState([]);
    } catch (e) {}
  };

  const handleTitleChange = e => {
    setTitle(e.target.value);
    setQuery(e.target.value);
    setIsOpen(true);
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
            onChange={e => handleTitleChange(e)}
            onBlur={() => {
              setTimeout(() => {
                setIsOpen(false);
              }, 300);
            }}
          />
          {isOpen && (
            <ul className={styles.productList}>
              {productsState.map(el => {
                return (
                  <li
                    key={el.title.ru}
                    onClick={() => {
                      setTitle(el.title.ru);
                      setIsOpen(false);
                    }}
                  >
                    <span>{el.title.ru}</span>
                  </li>
                );
              })}
              <li>
                <button type="button" onClick={updatePage}>
                  загрузить еще
                </button>
              </li>
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
