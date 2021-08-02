import React from 'react';
import { useMedia } from 'react-use';

import styles from './DiaryPage.module.scss';

import Container from '../../components/common/Container';

// Comps
import DiaryCalendar from '../../components/DiaryCalendar';
import RightSideBar from '../../components/RightSideBar';

const DiaryPage = () => {
  const isWide = useMedia('(min-width: 768px)');

  return (
    <>
      {isWide ? (
        <div className={styles.bgContainer}>
          <div className={styles.background}></div>
        </div>
      ) : (
        ''
      )}
      <Container>
        <div className={styles.calendarFlexBox}>
          <div className={styles.calendarCalorieFormItem}>
            <DiaryCalendar />
          </div>
          <div className={styles.RightSideBarItem}>
            <RightSideBar />
          </div>
        </div>
      </Container>
    </>
  );
};

export default DiaryPage;
