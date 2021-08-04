import { useState } from 'react';
import styles from './DiaryCalendar.module.scss';

import icon from '../../utils/images/diary-plus-icon.svg';

import Button from '../../components/Button';

import DiaryDateСalendar from './DiaryDateСalendar';
import DiaryAddProductForm from './DiaryAddProductForm';
import DiaryProductsList from './DiaryProductsList';
import AddProductMobile from './AddProductMobile';

import { useMedia } from 'react-use';
import { createPortal } from 'react-dom';
import Container from '../common/Container';

const modalRoot = document.getElementById('root-modal');

const DailyCalendar = () => {
  const isWide = useMedia('(max-width: 768px)');

  const [showModal, setShowModal] = useState(false);
  const toggleModal = e => {
    if (e.target.tagName === 'BUTTON' || e.target.tagName === 'DIV') {
      setShowModal(!showModal);
    }
  };

  return (
    <div className={styles.page}>
      <DiaryDateСalendar />
      <DiaryAddProductForm />
      <DiaryProductsList />
      <div className={styles.mobileLink}>
        <Button type="button" className={styles.button} onClick={toggleModal}>
          <img src={icon} alt="form plus icon" />
        </Button>
      </div>

      <div>
        {isWide &&
          showModal &&
          createPortal(
            <div
              onClick={e => {
                setTimeout(() => {
                  toggleModal(e);
                }, 400);
              }}
              className={styles.Overlay}
            >
              <div className={styles.Modal}>
                <Container>
                  <AddProductMobile />
                </Container>
              </div>
            </div>,
            modalRoot,
          )}
      </div>
    </div>
  );
};

export default DailyCalendar;
