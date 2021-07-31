import React from 'react'
import { useMedia } from 'react-use';
import Container from '../../components/common/Container';
import LoginForm from '../../components/LoginForm/LoginForm';
import s from './LoginPage.module.scss';


const LoginPage = () => {

    const isWide = useMedia('(min-width: 768px)');

    return (
        <>
            {isWide ?
              <div className={s.bgContainer}>
               <div className={s.background1}></div>
               <div className={s.background2}></div>
               <div className={s.background3}></div>
               <div className={s.background4}></div>
             </div> 
             : ''
           }
            <Container>
                <LoginForm />
            </Container>
        </>
    );
}

export default LoginPage;
