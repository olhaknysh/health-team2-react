import s from './Logo.module.scss';
import { NavLink } from 'react-router-dom';
import paths from '../../utils/routes';

export default function Logo() {
    return (
        <div className={s.logoConatiner}>
            <NavLink
            to={paths.home}
            activeClassName={s.activeNavLink}
            className={s.navLink}
            >
              <span className={s.imageLogo}></span>
             </NavLink>
        </div>
    )
}