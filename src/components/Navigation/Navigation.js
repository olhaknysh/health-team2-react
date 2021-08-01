import { React } from 'react';
import { NavLink } from 'react-router-dom';
import paths from '../../utils/routes';
import s from './Navigation.module.scss';
// import { useSelector } from 'react-redux';
// import { authSelectors } from '../../redux/auth';
import classNames from 'classnames';
import PropTypes from 'prop-types';




export default function Navigation({ isOpen, isAuth }) {
  
  // const isAuthenticated = useSelector(authSelectors.getIsAuthenticated);
  // const isAuthenticated = false;
  const navClassName = [];


  if (isAuth) {
     navClassName.push(s.navIsAuthenticated);
     if (isOpen) {
        navClassName.push(s.isOpen);
     }
  } else {
    navClassName.push(s.nav);
  }
  
  return (
    
    <nav className={classNames(navClassName.join(' '))} id="header_nav">
      <ul className={s.navList}>
        {!isAuth ?  <>
        <li className={s.navItem}>
          <NavLink
            exact
            to={paths.login}
            activeClassName={s.activeNavLink}
            className={s.navLink}
          >
           Вход
         </NavLink>
        </li>
        <li className={s.navItem}> 
         <NavLink
            to={paths.register}
            activeClassName={s.activeNavLink}
            className={s.navLink}
          >
            Регистрация
          </NavLink>
          </li> </> :
          <>
            <li className={s.navItem}>
          <NavLink
            exact
            to={paths.diary}
            activeClassName={s.activeNavLink}
            className={s.navLink}
          >
           Дневник
         </NavLink>
        </li>
        <li className={s.navItem}> 
         <NavLink
            to={paths.calculator}
            activeClassName={s.activeNavLink}
            className={s.navLink}
          >
            Калькулятор
          </NavLink>
          </li>
          </>}
       
      </ul>
    </nav>
  );
};

Navigation.propTypes = {
  isOpen: PropTypes.bool,
  isAuth: PropTypes.bool,
}

