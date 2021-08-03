import styles from './DiaryCalendar.module.scss';

import { NavLink } from 'react-router-dom';

import icon from '../../utils/images/diary-plus-icon.svg';

import Button from '../../components/Button';

import DiaryDateСalendar from '../../components/DiaryCalendar/DiaryDateСalendar';
import DiaryAddProductForm from '../../components/DiaryCalendar/DiaryAddProductForm';
import DiaryProductsList from '../../components/DiaryCalendar/DiaryProductsList';

const DailyCalendar = () => {
  return (
    <div className={styles.page}>
      <DiaryDateСalendar />
      <DiaryAddProductForm />
      <DiaryProductsList />

      <div className={styles.mobileLink}>
        <NavLink to="/add">
          <Button type="button" className={styles.button}>
            <img src={icon} alt="form plus icon" />
          </Button>
        </NavLink>
      </div>
    </div>
  );
};

export default DailyCalendar;
