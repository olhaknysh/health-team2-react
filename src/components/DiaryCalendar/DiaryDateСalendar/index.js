import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { productsOperations } from '../../../redux/products'

import styles from './DiaryDateСalendar.module.scss';

// Moment
import moment from 'moment';

// Datepicker
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

// Icon
import icon from '../../../utils/images/diary-calendar-icon.svg';

const DiaryDateСalendar = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [isOpen, setIsOpen] = useState(false);
  const handleChange = e => {
    setIsOpen(!isOpen);
    setStartDate(e);
    console.log(startDate);
  };
  const handleClick = e => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  const currentDate = moment(startDate).format('L').split('/');
  const day = currentDate[1];
  const month = currentDate[0];
  const year = currentDate[2];
  const date = `${day}.${month}.${year}`;

  const dispatch = useDispatch();
  // const dateToSideBar = '08-01-2021'; // --- TODO только для теста! удалить позже.
  const dateToSideBar = `${day}-${month}-${year}`; // --- TODO раскомитить после теста
  useEffect(() => {
    dispatch(productsOperations.getProductsByDay(dateToSideBar));
  }, [dateToSideBar, dispatch]);

  return (
    <React.Fragment>
      <div className={styles.container}>
        <time className={styles.date}>{date}</time>
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
