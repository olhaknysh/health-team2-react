import React, { useState } from 'react';

import styles from './DiaryDateСalendar.module.scss';

// Moment
import moment from 'moment';

// Datepicker
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

// Icon
import icon from '../../../utils/images/diary-calendar-icon.svg';

// Redux
import calendarActions from '../../../redux/calendar/calendar-actions';

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
    dispatch(calendarActions.addCurrentDateRequest());

    const currentDate = moment(e).format('L').split('/');
    const day = currentDate[1];
    const month = currentDate[0];
    const year = currentDate[2];
    const date = `${day}-${month}-${year}`;

    try {
      dispatch(calendarActions.addCurrentDateSuccess(date));
    } catch (e) {
      dispatch(calendarActions.addCurrentDateError());
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
