// import s from './HomePage.module.scss';
import { useState } from 'react';
import Modal from '../../components/Modal';
import Button from '../../components/Button';
import DailyCalorieIntake from '../../components/DailyCalorieIntake';
export default function HomePage() {
  const [modal, showModal] = useState(false);
  const toggleModal = () => {
    showModal(prev => !prev);
  };
  return (
    <>
      <div></div>
    </>
  );
}

//  <Button onClick={toggleModal}>Открыть модалку</Button>;
//  {
//    modal && (
//      <Modal onClose={toggleModal}>
//        <DailyCalorieIntake onClose={toggleModal} />
//      </Modal>
//    );
//  }
