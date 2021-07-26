
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { authSelectors } from '../../redux/auth';
import classNames from 'classnames';
import Logo from '../Logo';
import Navigation from '../Navigation';
import UserInfo from '../UserInfo';
import Container from '../common/Container';
import s from './Header.module.scss';


export default function Header() {

  // const isAuthenticated = useSelector(authSelectors.getIsAuthenticated);
  const isAuthenticated = true;
  const [isOpen, setIsOpen] = useState(false);
   const lines = [s.lines]
    
    if (isOpen) {
        lines.push(s.active);
    }

  const toggling = () => setIsOpen(!isOpen);
  
  return (
    <header className={s.header}>
      <Container>
        <div className={s.container}>
          <div className={s.logoAndNavContainer}>
            <Logo/>
            <Navigation isOpen={isOpen} />
          </div>
          {isAuthenticated &&
            <>
            <UserInfo />
             <div onClick={()=> toggling()} className={classNames(lines.join(' '))} role="button" aria-label="toggle menu button" aria-expanded={isOpen}
                    aria-controls="header_nav">
                    <div className={s.line}></div>
                    <div className={s.line}></div>
                    <div className={s.line}></div>
              </div>
            </>}
        </div>
      </Container>
    </header>
  )
};





