import { useMedia } from 'react-use';
import Container from '../../components/common/Container';
import RegisterForm from '../../components/RegisterForm';
import s from './RegisterPage.module.scss';
import {CSSTransition} from 'react-transition-group';

export default function RegisterPage() {
    
    const isWide = useMedia('(min-width: 768px)');
    
    return (
        <>
            {isWide ?
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
            
             <Container>
                 <RegisterForm/>
             </Container>
        </>
    )
}