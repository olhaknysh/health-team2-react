import React from 'react';
import { useMedia } from 'react-use';
import { ToastContainer } from 'react-toastify';
import styles from './DiaryPage.module.scss';

import { useSelector } from 'react-redux';
import { authSelectors } from '../../redux/auth';

import Container from '../../components/common/Container';

import DiaryCalendar from '../../components/DiaryCalendar';
import RightSideBar from '../../components/RightSideBar';
import DailyCaloriesDiaryInfo from '../../components/DailyCaloriesDiaryInfo';

const DiaryPage = () => {
  const isWide = useMedia('(min-width: 768px)');
  const dailyCalories = useSelector(authSelectors.dailyCalories);

  return (
    <>
      <ToastContainer />
      {isWide ? (
        <div className={styles.bgContainer}>
          <div className={styles.background}></div>
        </div>
      ) : (
        ''
      )}
      <Container>
        {dailyCalories ? (
          <div className={styles.calendarFlexBox}>
            <div className={styles.calendarCalorieFormItem}>
              <DiaryCalendar />
            </div>
            <div className={styles.RightSideBarItem}>
              <RightSideBar />
            </div>
          </div>
        ) : (
          <DailyCaloriesDiaryInfo />
        )}
      </Container>
    </>
  );
};

export default DiaryPage;
