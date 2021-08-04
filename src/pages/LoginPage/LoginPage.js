import { React, useRef } from 'react';
import { useMedia } from 'react-use';
import { ToastContainer } from 'react-toastify';
import Container from '../../components/common/Container';
import LoginForm from '../../components/LoginForm/LoginForm';
import s from './LoginPage.module.scss';
import { CSSTransition } from 'react-transition-group';

const LoginPage = () => {
  const item1 = useRef(null);
  const item2 = useRef(null);
  const item3 = useRef(null);
  const item4 = useRef(null);

  const isWide = useMedia('(min-width: 768px)');

  return (
    <>
      {isWide ? (
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
      ) : (
        ''
      )}
      <ToastContainer />
      <Container>
        <LoginForm />
      </Container>
    </>
  );
};

export default LoginPage;
