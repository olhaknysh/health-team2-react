import React from 'react';
import { useMedia } from 'react-use';
import Container from '../../components/common/Container';
import { NavLink } from 'react-router-dom';
import icon from '../../utils/images/diary-plus-icon.svg';
import DiaryDateСalendar from '../../components/DiaryCalendar/DiaryDateСalendar';
import DiaryAddProductForm from '../../components/DiaryCalendar/DiaryAddProductForm';
import DiaryProductsList from '../../components/DiaryCalendar/DiaryProductsList';
import styles from './DiaryPage.module.scss';

const DiaryPage = () => {
  const isWide = useMedia('(min-width: 480px)');
  
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
                      <button type="button" className={styles.button}>
                        <img src={icon} alt="form plus icon" />
                      </button>
                    </NavLink>
                  </div>
                </div>
           </Container>
    
  </>
);
};

export default DiaryPage;
