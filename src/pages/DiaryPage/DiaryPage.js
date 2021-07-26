import React from 'react';
import styles from './DiaryPage.module.css';

// Router
import { NavLink } from 'react-router-dom';

// Icon
import icon from '../../utils/images/diary-plus-icon.svg';

// Comps
import DiaryDateСalendar from './DiaryDateСalendar/DiaryDateСalendar';
import DiaryAddProductForm from './DiaryAddProductForm/DiaryAddProductForm';
import DiaryProductsList from './DiaryProductsList/DiaryProductsList';

const DiaryPage = () => {
  return (
    <div className={styles.page}>
      <DiaryDateСalendar />
      <DiaryAddProductForm />
      <DiaryProductsList />

      <div className={styles.mobileLink}>
        <NavLink to="/add">
          <button type="button" className={styles.button}>
            <img src={icon} alt="form plus icon" />
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default DiaryPage;
