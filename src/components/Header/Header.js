
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { authSelectors } from '../../redux/auth';
import classNames from 'classnames';
import Logo from '../Logo';
import Navigation from '../Navigation';
import UserInfo from '../UserInfo';
import s from './Header.module.scss';
import { useLocation } from "react-router-dom";
import routes from '../../utils/routes';
import { useMedia } from 'react-use';


export default function Header() {
    let location = useLocation();
    const [isAuthPage, setIsAuthPage] = useState();
    const isWide = useMedia('(max-width: 1079px)');

    useEffect(() => {
        if (location.pathname.indexOf(routes.register) !== -1
            || location.pathname.indexOf(routes.login) !== -1) {
            setIsAuthPage(false)
        } else {
            setIsAuthPage(true)
        }
    }, [location]);

    const isAuthenticated = useSelector(authSelectors.getIsAuthenticated);

    const [isOpen, setIsOpen] = useState(false);
    const lines = [s.lines]

    if (isOpen) {
        lines.push(s.active);
    }

    const toggling = () => setIsOpen(!isOpen);
    const handleClickNavItem = (e) => {
        if (e.target.nodeName === 'A') {
            setIsOpen(!isOpen)
        }
    }

    return (
        <header className={s.header}>
            <div className={s.container}>
                <div className={s.logoAndNavContainer}>
                    <Logo />
                    {isAuthPage ? <Navigation isOpen={isOpen} isAuth={isAuthenticated} onClick={handleClickNavItem} /> : ''}


                </div>
                {isAuthenticated &&
                    <>
                        <UserInfo /> {isWide &&
                            <div onClick={() => toggling()} className={classNames(lines.join(' '))} role="button" aria-label="toggle menu button" aria-expanded={isOpen}
                                aria-controls="header_nav">
                                <div className={s.line}></div>
                                <div className={s.line}></div>
                                <div className={s.line}></div>
                            </div>}
                    </>}
            </div>
        </header>
    )
};





