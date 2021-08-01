import s from './HomePage.module.scss';
import { useState, useRef } from 'react';
import { useMedia } from 'react-use';
import Container from '../../components/common/Container';
import {CSSTransition} from 'react-transition-group';
import Modal from '../../components/Modal';
import DailyCalorieIntake from '../../components/DailyCalorieIntake';
import CalculatorCalorieForm from '../../components/CalculatorCalorieForm';

export default function HomePage() {
  const isWide = useMedia('(min-width: 768px)');

  const item1 = useRef(null)
  const item2 = useRef(null)
  const item3 = useRef(null)
  const item4 = useRef(null)
  
  const [modal, showModal] = useState(false);
  const toggleModal = () => {
    showModal(prev => !prev);
  };

  return (
    <> {isWide ?
      <div className={s.bgContainer}>
        <CSSTransition
              nodeRef={item1}
              appear={true}
              in={true}
              timeout={500}
              classNames="item"
            >
          <div ref={item1} className={s.background1}></div>
           
        </CSSTransition>
        <CSSTransition
          nodeRef={item2}
            appear={true}
              in={true}
              timeout={500}
              classNames="item-2"
            >
          <div ref={item2} className={s.background2}></div>
        </CSSTransition>
        <CSSTransition
          nodeRef={item3}
              appear={true}
              in={true}
              timeout={500}
              classNames="item-3"
            >
          <div ref={item3} className={s.background3}></div>
        </CSSTransition>
        <CSSTransition
          nodeRef={item4}
             appear={true}
              in={true}
              timeout={500}
              classNames="item-4"
            >
          <div ref={item4} className={s.background4}></div>
          </CSSTransition>
      </div> 
      : ''
    }
      <Container>
        <div>
          <CalculatorCalorieForm onClick={toggleModal} />
          {modal && (
            <Modal onClose={toggleModal}>
              <DailyCalorieIntake onClose={toggleModal} />
            </Modal>
          )}
        </div>
      </Container>
    </>
  );
}
