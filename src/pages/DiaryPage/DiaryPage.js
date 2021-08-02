import React from 'react';
import { useMedia } from 'react-use';

import styles from './DiaryPage.module.scss';

// Router
import { NavLink } from 'react-router-dom';

// Icon
import icon from '../../utils/images/diary-plus-icon.svg';

// Comps
import DiaryDateСalendar from '../../components/DiaryCalendar/DiaryDateСalendar';
import DiaryAddProductForm from '../../components/DiaryCalendar/DiaryAddProductForm';
import DiaryProductsList from '../../components/DiaryCalendar/DiaryProductsList';
import Container from '../../components/common/Container';

// common
import Button from '../../components/Button';

const DiaryPage = () => {

  const isWide = useMedia('(min-width: 768px)');

    return (
          <>
      {isWide ?
        <div className={styles.bgContainer}>
          <div className={styles.background}></div>
        </div>
        : ''
      }
        <Container>
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
  </Container>
  </>
    );

};

export default DiaryPage;
