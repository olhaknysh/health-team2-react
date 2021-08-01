import s from './HomePage.module.scss';
import { useState } from 'react';
import { useMedia } from 'react-use';
import Container from '../../components/common/Container';
// import Modal from '../../components/Modal';
// import Button from '../../components/Button';
// import DailyCalorieIntake from '../../components/DailyCalorieIntake';
import {CSSTransition} from 'react-transition-group';



export default function HomePage() {

  const isWide = useMedia('(min-width: 768px)');
  
  const [modal, showModal] = useState(false);
  const toggleModal = () => {
    showModal(prev => !prev);
  };


  return (
    <> {isWide ?
      <div className={s.bgContainer}>
        <CSSTransition
              appear={true}
              in={true}
              timeout={500}
              classNames="item"
            >
          <div className={s.background1}></div>
        </CSSTransition>
        <CSSTransition
            appear={true}
              in={true}
              timeout={500}
              classNames="item-2"
            >
          <div className={s.background2}></div>
        </CSSTransition>
        <CSSTransition
              appear={true}
              in={true}
              timeout={500}
              classNames="item-3"
            >
          <div className={s.background3}></div>
        </CSSTransition>
        <CSSTransition
             appear={true}
              in={true}
              timeout={500}
              classNames="item-4"
            >
          <div className={s.background4}></div>
          </CSSTransition>
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
