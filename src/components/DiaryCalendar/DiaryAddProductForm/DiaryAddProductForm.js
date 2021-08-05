import React, { useRef, useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import _ from 'lodash';
import { toast } from 'react-toastify';

import styles from './DiaryAddProductForm.module.scss';
import icon from '../../../utils/images/diary-plus-icon.svg';
import { calendarSelectors } from '../../../redux/calendar';
import { productsOperations, productsSelectors } from '../../../redux/products';
import getInitialDate from '../../../utils/date';

axios.defaults.baseURL = 'https://slim-mom-app.herokuapp.com/api';

const DiaryAddProductForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [weight, setWeight] = useState('');
  const [query, setQuery] = useState('');
  const [productsState, setProductsState] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [element, setElement] = useState(null);
  const [total, setTotal] = useState(null);
  const dispatch = useDispatch();
  const initialDate = getInitialDate();
  const date = useSelector(calendarSelectors.currentDate);

  const isLoadingProducts = useSelector(productsSelectors.isLoading);

  const productSearch = useCallback(
    _.debounce(
      (query, currentPage) => fetchProductsData(query, currentPage),
      500,
    ),
    [],
  );

  const fetchProductsData = async (value, currentPage) => {
    setIsLoading(true);
    try {
      const { data } = await axios.get(
        `/products?search=${value}&page=${currentPage}`,
      );
      setProductsState(prevState => [...prevState, ...data.products]);
      setTotal(data.total);
    } catch (e) {
      toast.error('За вашим запросом продуктов не найдено');
    } finally {
      setIsLoading(false);
    }
  };

  const updatePage = useCallback(() => {
    setCurrentPage(prevPage => prevPage + 1);
  }, [setCurrentPage]);

  useEffect(() => {
    if (!query) {
      setIsOpen(false);
      return;
    }
    productSearch(query, currentPage);
  }, [query, currentPage, productSearch]);

  const observer = useRef(
    new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            updatePage();
            observer.disconnect();
          }
        });
      },
      {
        root: document.getElementById('productsRoot'),
        threshold: 0.35,
      },
    ),
  );

  useEffect(() => {
    const currentElement = element;
    const currentObserver = observer.current;
    if (currentElement) {
      currentObserver.observe(currentElement);
    }
    return () => {
      if (currentElement) {
        currentObserver.unobserve(currentElement);
      }
    };
  }, [element]);

  const handleSubmit = async (event, values) => {
    event.preventDefault();
    try {
      await dispatch(productsOperations.addProducts(values));
      setTitle('');
      setWeight('');
    } catch (e) {
      toast.error(e.message);
    }
  };

  const handleTitleChange = e => {
    setTitle(e.target.value);
    setQuery(e.target.value);
    setIsOpen(true);
    setCurrentPage(1);
    setProductsState([]);
  };

  return (
    <React.Fragment>
      {date === initialDate && (
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
            {isOpen && productsState.length > 0 && (
              <ul className={styles.productList} id="productsRoot">
                {productsState.map(el => {
                  return (
                    <li
                      key={el.title.ru}
                      onClick={() => {
                        setTitle(el.title.ru);
                        setWeight(el.weight);
                        setIsOpen(false);
                      }}
                    >
                      <span>{el.title.ru}</span>
                    </li>
                  );
                })}
                {isLoading ? (
                  <p className={styles.lodadingText}>загружаем...</p>
                ) : (
                  total > productsState.length && <li ref={setElement}></li>
                )}
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
            min="1"
            required
            value={weight}
            onChange={e => setWeight(e.target.value)}
            onClick={() => setWeight('')}
          />

          <button
            type="submit"
            className={styles.button}
            disabled={
              isLoadingProducts ||
              !productsState.some(product => title === product.title.ru)
            }
          >
            <img src={icon} alt="form plus icon" />
          </button>
        </form>
      )}
    </React.Fragment>
  );
};

export default DiaryAddProductForm;
