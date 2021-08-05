import { useState } from 'react';
import { useMedia } from 'react-use';
import { createPortal } from 'react-dom';
import { useSelector } from 'react-redux';
import styles from './DiaryCalendar.module.scss';
import icon from '../../utils/images/diary-plus-icon.svg';
import Loader from '../Loader';
import Button from '../Button';

import DiaryDateСalendar from './DiaryDateСalendar';
import DiaryAddProductForm from './DiaryAddProductForm';
import DiaryProductsList from './DiaryProductsList';
import AddProductMobile from './AddProductMobile';
import Container from '../common/Container';

import { productsSelectors } from '../../redux/products';

const modalRoot = document.getElementById('root-modal');

const DailyCalendar = () => {
  const isWide = useMedia('(max-width: 768px)');
  const [showModal, setShowModal] = useState(false);
  const isLoadingProducts = useSelector(productsSelectors.isLoading);
  const toggleModal = e => {
    if (e.target.tagName === 'BUTTON' || e.target.tagName === 'DIV') {
      setShowModal(!showModal);
    }
  };

  return (
    <div className={styles.page}>
      <DiaryDateСalendar />
      <DiaryAddProductForm />
      {isLoadingProducts ? <Loader /> : <DiaryProductsList />}

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
