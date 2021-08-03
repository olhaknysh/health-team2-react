import React, { useState } from 'react';

import styles from './DiaryDateСalendar.module.scss';

import moment from 'moment';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import icon from '../../../utils/images/diary-calendar-icon.svg';

import { calendarOperations } from '../../../redux/calendar/';
import { productsOperations } from '../../../redux/products';
import { useDispatch } from 'react-redux';

const DiaryDateСalendar = () => {
  const dispatch = useDispatch();
  const [startDate, setStartDate] = useState(new Date());
  const [isOpen, setIsOpen] = useState(false);

  const currentDate = moment(startDate).format('L').split('/');
  const day = currentDate[1];
  const month = currentDate[0];
  const year = currentDate[2];
  const date = `${day}-${month}-${year}`;

  const handleClick = e => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  const handleChange = async e => {
    setIsOpen(!isOpen);
    setStartDate(e);

    const currentDate = moment(e).format('L').split('/');
    const day = currentDate[1];
    const month = currentDate[0];
    const year = currentDate[2];
    const date = `${day}-${month}-${year}`;

    try {
      dispatch(calendarOperations.addCurrentDate(date));
      dispatch(productsOperations.getProductsByDay(date));
    } catch (e) {}
  };

  return (
    <React.Fragment>
      <div className={styles.container}>
        <DatePicker
          selected={startDate}
          onChange={handleChange}
          customInput={
            <time className={styles.date} onClick={handleClick}>
              {date}
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
