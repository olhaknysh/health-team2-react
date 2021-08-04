import React, { useState, useEffect } from 'react';
import getInitialDate from '../../../utils/date';
import styles from './DiaryDateСalendar.module.scss';

// import moment from 'moment';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import icon from '../../../utils/images/diary-calendar-icon.svg';

import { calendarOperations } from '../../../redux/calendar/';
import { productsOperations } from '../../../redux/products';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

const DiaryDateСalendar = () => {
  const dispatch = useDispatch();
  const [startDate, setStartDate] = useState(new Date());
  const [isOpen, setIsOpen] = useState(false);
  const initialDate = getInitialDate(startDate);
  useEffect(() => {
    dispatch(productsOperations.getProductsByDay(initialDate));
    dispatch(calendarOperations.addCurrentDate(initialDate));
  }, [dispatch]);

  const handleClick = e => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  const handleChange = async e => {
    setIsOpen(!isOpen);
    setStartDate(e);

    const date = getInitialDate(e);

    try {
      dispatch(calendarOperations.addCurrentDate(date));
      dispatch(productsOperations.getProductsByDay(date));
    } catch (e) {
      toast.error('Операции по этой дате не доступны');
    }
  };

  return (
    <React.Fragment>
      <div className={styles.container}>
        <DatePicker
          selected={startDate}
          onChange={handleChange}
          customInput={
            <time className={styles.date} onClick={handleClick}>
              {initialDate}
            </time>
          }
        />
        <DatePicker
          selected={startDate}
          onChange={handleChange}
          withPortal
          customInput={
            <button className={styles.customButton} onClick={handleClick}>
              <img src={icon} alt="date icon" />
            </button>
          }
        />
      </div>
    </React.Fragment>
  );
};

export default DiaryDateСalendar;
