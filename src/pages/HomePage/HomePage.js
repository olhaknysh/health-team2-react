import s from './HomePage.module.scss';
import { useState } from 'react';
import { useMedia } from 'react-use';
import Container from '../../components/common/Container';
// import Modal from '../../components/Modal';
// import Button from '../../components/Button';
// import DailyCalorieIntake from '../../components/DailyCalorieIntake';




export default function HomePage() {

  const isWide = useMedia('(min-width: 768px)');
  
  const [modal, showModal] = useState(false);
  const toggleModal = () => {
    showModal(prev => !prev);
  };


  return (
    <> {isWide ?
      <div className={s.bgContainer}>
        <div className={s.background1}></div>
        <div className={s.background2}></div>
        <div className={s.background3}></div>
        <div className={s.background4}></div>
      </div> 
      : ''
    }
      <Container>Page content</Container>
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
